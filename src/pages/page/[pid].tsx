import { useState, useEffect, useRef } from 'react'
import { API } from 'aws-amplify'
import { useRouter } from 'next/router'
import {
  Editor,
  defaultValueCtx,
  rootCtx,
  editorViewCtx,
  parserCtx,
} from '@milkdown/core'
import { listener, listenerCtx } from '@milkdown/plugin-listener'
import { clipboard } from '@milkdown/plugin-clipboard'
import { history } from '@milkdown/plugin-history'
import { diagram } from '@milkdown/plugin-diagram'
import { slash } from '@milkdown/plugin-slash'
import { upload } from '@milkdown/plugin-upload'
import { tokyo } from '@milkdown/theme-tokyo'
import { useEditor, ReactEditor } from '@milkdown/react'
import { commonmark } from '@milkdown/preset-commonmark'
import { insert } from '@milkdown/utils'
import Link from 'next/link'
import { useToolbar } from '../../components/Toolbar'
import { getPage as QUERY_GET_PAGE } from '../../graphql/queries'
import { updatePage as MUTATION_UPDATE_PAGE } from '../../graphql/mutations'
import * as s from './page.module.css'
import type { Element, FunctionComponent } from 'react'

async function getPage(id: string) {
  if (!id) throw new Error('Invalid ID')
  const { data, error } = await API.graphql({
    query: QUERY_GET_PAGE,
    variables: { id },
  })
  if (error) {
    console.error(error)
    return null
  }
  return data.getPage
}

// function usePage() {
//   const [page, setPage] = useState<any>()

//   return {
//     data,
//     error
//   }
// }

const Post: FunctionComponent = () => {
  const [page, setPage] = useState<any>()
  const [content, setContent] = useState<any>('')
  const [isAutoSaveEnabled, setIsAutoSaveEnabled] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [, toolbar] = useToolbar()
  const { editor, getInstance } = useEditor((root) =>
    Editor.make()
      .config((ctx) => {
        ctx.set(defaultValueCtx, content)
        ctx.set(rootCtx, root)
        ctx.get(listenerCtx).markdownUpdated((ctx, markdown, prevMarkdown) => {
          setContent(markdown)
        })
      })
      .use(listener)
      .use(tokyo)
      .use(clipboard)
      .use(history)
      // .use(diagram)
      .use(slash)
      .use(upload)
      .use(commonmark)
  )
  const router = useRouter()
  const { pid } = router.query as { pid: string }

  const save: () => Promise<void> = async () => {
    const { data, error } = await API.graphql({
      query: MUTATION_UPDATE_PAGE,
      variables: {
        input: {
          id: page.id,
          content: content,
        },
      },
    })
    if (error) {
      // there was an error handling save
      console.error('error saving', error)
      return
    }
    console.log('saved', data)
    setIsLoading(false)
    setIsSaved(true)
  }

  const handleOnBlur = () => {
    if (isAutoSaveEnabled) {
      save()
    }
  }

  useEffect(() => {
    ;(async () => {
      setIsLoading(true)
      if (!pid || page) {
        setIsLoading(false)
        return
      }
      const Page = await getPage(pid)
      setPage(Page)
      setContent(Page.content)
      setIsLoading(false)
    })()
  }, [pid])

  useEffect(() => {
    try {
      getInstance()?.action?.(insert(content))
    } catch (error) {
      // swallow getInstance() cannot read properties `matchesNode` of undefined
    }
  }, [isLoading])

  useEffect(() => {
    if (!isAutoSaveEnabled) return
    const delayDebounceFn = setTimeout(() => {
      save()
    }, 3000)

    return () => clearTimeout(delayDebounceFn)
  }, [content])

  useEffect(() => {
    if (!isSaved) return

    const displayTimerFn = setTimeout(() => {
      setIsSaved(false)
    }, 3000)

    return () => displayTimerFn && clearTimeout(displayTimerFn)
  }, [isSaved])

  const SaveButton = () => <button onClick={save}>Save</button>
  useEffect(() => {
    toolbar.add(SaveButton)
    return () => {
      toolbar.remove(SaveButton)
    }
  }, [])

  // if (isLoading) return <p>loading...</p>

  return (
    <section onBlur={handleOnBlur}>
      <div className={isLoading ? s.isLoading : ''}></div>
      <ReactEditor editor={editor} />
    </section>
  )
}

export default Post

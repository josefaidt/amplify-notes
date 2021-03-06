import { useCallback, useState, useEffect, useRef } from 'react'
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
import { useToolbar } from '../../components/Toolbar'
import { getPage as QUERY_GET_PAGE } from '../../graphql/queries'
import { updatePage as MUTATION_UPDATE_PAGE } from '../../graphql/mutations'
import s from './page.module.css'
import type { NextPage } from 'next'

async function getPage(id: string) {
  if (!id) throw new Error('Invalid ID')
  const { data, error } = (await API.graphql({
    query: QUERY_GET_PAGE,
    variables: { id },
  })) as any
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

const STORAGE_AUTOSAVE_KEY = 'AmplifyNotes__isAutoSaveEnabled'

const Page: NextPage = () => {
  const [page, setPage] = useState<any>()
  const [content, setContent] = useState<any>('')
  const [isAutoSaveEnabled, setIsAutoSaveEnabled] = useState(() => {
    if (window) {
      return (
        window.localStorage.getItem(STORAGE_AUTOSAVE_KEY) === 'true' || false
      )
    }
  })
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

  const save: () => Promise<void> = useCallback(async () => {
    const { data, error } = (await API.graphql({
      query: MUTATION_UPDATE_PAGE,
      variables: {
        input: {
          id: page.id,
          content: content,
        },
      },
    })) as any
    if (error) {
      // there was an error handling save
      console.error('error saving', error)
      return
    }
    console.log('saved', data)
    setIsLoading(false)
    setIsSaved(true)
  }, [page, content])

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
  }, [pid, page])

  useEffect(() => {
    try {
      getInstance()?.action?.(insert(content))
    } catch (error) {
      // swallow getInstance() cannot read properties `matchesNode` of undefined
    }
  }, [isLoading])

  useEffect(() => {
    // effect to auto-save document after 3 second delay (i.e. user stopped typing)
    if (!isAutoSaveEnabled) return
    const delayDebounceFn = setTimeout(() => {
      save()
    }, 3000)

    return () => clearTimeout(delayDebounceFn)
  }, [content, isAutoSaveEnabled, save])

  useEffect(() => {
    // effect to remove/hide the "Saved!" message after 3 seconds
    if (!isSaved) return

    const displayTimerFn = setTimeout(() => {
      setIsSaved(false)
    }, 3000)

    return () => displayTimerFn && clearTimeout(displayTimerFn)
  }, [isSaved])

  const SaveButton = useCallback(
    () => <button onClick={save}>Save</button>,
    [save]
  )
  const AutoSaveToggleButton = useCallback(
    () => (
      <button
        onClick={() => {
          setIsAutoSaveEnabled(!isAutoSaveEnabled)
          localStorage.setItem(STORAGE_AUTOSAVE_KEY, `${isAutoSaveEnabled}`)
        }}
      >
        {isAutoSaveEnabled ? 'Disable' : 'Enable'} Auto-Save
      </button>
    ),
    [isAutoSaveEnabled]
  )

  useEffect(() => {
    // we _only_ want this to run on mount. If we provide the toolbar as a dependency it will run infinitely
    toolbar.add(SaveButton)
    toolbar.add(AutoSaveToggleButton)
    return () => {
      toolbar.remove(SaveButton)
      toolbar.remove(AutoSaveToggleButton)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // if (isLoading) return <p>loading...</p>

  return (
    <section onBlur={handleOnBlur}>
      <div className={isLoading ? s.isLoading : ''}></div>
      <ReactEditor editor={editor} />
    </section>
  )
}

export default Page

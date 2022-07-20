import { API } from 'aws-amplify'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { listPages as QUERY_LIST_PAGES } from '../graphql/queries'
import { createPage as MUTATION_CREATE_PAGE } from '../graphql/mutations'
import * as s from './index.module.css'
import type { FunctionComponent } from 'react'

const list = async () => {
  const { data, error } = await API.graphql({
    query: QUERY_LIST_PAGES,
  })
  if (error) {
    console.error(error)
    return null
  }
  return data.listPages.items
}

const HomePage: FunctionComponent = () => {
  const [pages, setPages] = useState<any[]>()
  const router = useRouter()

  const createNewPost = async () => {
    const { data, error } = await API.graphql({
      query: MUTATION_CREATE_PAGE,
      variables: {
        input: {},
      },
    })
    if (error) {
      console.error(error)
      return
    }
    console.log(data)
    router.push(`/page/${data.createPage.id}`)
    return data
  }

  const reload = async () => {
    const pages = await list()
    setPages(pages)
  }

  useEffect(() => {
    reload()
  }, [])

  return (
    <section>
      <h1>Home</h1>
      <button onClick={() => createNewPost()}>New</button>
      {pages?.length ? (
        <ul>
          {pages.map((page) => (
            <li key={page.id}>
              <Link href={`/page/${page.id}`}>{page.id}</Link>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  )
}

export default HomePage

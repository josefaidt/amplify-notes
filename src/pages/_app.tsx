import { Amplify } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'
import Link from 'next/link'
import { ToolbarProvider, Toolbar } from '../components/Toolbar'
import awsExports from '../aws-exports'
import '@aws-amplify/ui-react/styles.css'
import '../app.css'
import * as s from './app.module.css'

Amplify.configure(awsExports)

export default function App({ Component, pageProps }) {
  return (
    <ToolbarProvider>
      <Authenticator>
        {({ signOut, user }) => (
          <>
            <header className={s.header}>
              <Link href="/">
                <a>
                  <b>Notes</b>
                </a>
              </Link>
              <Toolbar>
                <button onClick={signOut}>Sign out</button>
              </Toolbar>
            </header>
            <main className={s.main}>
              <Component {...pageProps} />
            </main>
          </>
        )}
      </Authenticator>
    </ToolbarProvider>
  )
}

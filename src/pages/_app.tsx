import { Amplify } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'
import Link from 'next/link'
import { ToolbarProvider, Toolbar } from '../components/Toolbar'
import awsExports from '../aws-exports'
import '@aws-amplify/ui-react/styles.css'
import '../app.css'
import s from './app.module.css'
import type { AppProps } from 'next/app'

Amplify.configure(awsExports)

const App = ({ Component, pageProps }: AppProps) => {
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

export default App

import Head from 'next/head'
import Header from './header'

const Layout = (props) => (
  <>
    <div id="wrapper">
      <Head>
        <title>Sing Along With Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div className="container">{props.children}</div>
      </main>

      <footer>
        <a
          href="https://www.unaulla.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Una Ulla
        </a>
      </footer>
    </div>

    <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      html,
      body {
        padding: 0;
        margin: 0;
        height: 100%;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }
      * {
        box-sizing: border-box;
      }
      #wrapper {
        min-height: 100%;
        position: relative;
      }
      main {
        padding: 10px;
        padding-bottom: 60px;
      }
      .container {
        max-width: 42rem;
        margin: 0 auto;
        padding: 2rem 1.25rem;
      }
      footer {
        position: absolute;
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </>
)

export default Layout

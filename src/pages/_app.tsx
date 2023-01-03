import { Layout } from 'components/Layout'
import { ThemeProvider } from 'context/theme.context'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'
import { appConfig } from 'util/config'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
      />
      <Head>
        <title>{appConfig.title}</title>
        <meta name="description" content={appConfig.metaTitleContent} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

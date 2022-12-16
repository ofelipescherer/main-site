import { Layout } from 'compoents/Layout/indext'
import { ThemeProvider } from 'context/theme.context'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'
import { appConfig } from 'util/config'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Layout>
        <Head>
          <title>{appConfig.title}</title>
          <meta name="description" content={appConfig.metaTitleContent} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

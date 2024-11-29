import Head from 'next/head'
import '../styles/global.css'

export default function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pusula Alüminyum</title>
        <meta
          name='description'
          content='Division, mobil uygulama geliştirme hizmetlerinde lider bir şirkettir.'
        />
        <link rel='icon' href='/images/footerlogo.png' type='image/png' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

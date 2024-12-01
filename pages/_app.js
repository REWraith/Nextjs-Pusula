import Head from 'next/head'
import '../styles/global.css'

export default function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pusula Alüminyum</title>
        <link rel='icon' href='/assets/minilogo.png' />
        <meta
          name='description'
          content='Pusula Alüminyum, dayanıklı ve estetik alüminyum çözümleri sunan, müşteri odaklı bir firmadır. Teknoloji ve sürdürülebilirliğe önem vererek hem standart hem de özel üretim hizmetleri'
        />
        <link rel='icon' href='/images/footerlogo.png' type='image/png' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

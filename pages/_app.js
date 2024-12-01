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
          content='Pusula Alüminyum, yüksek kalite standartlarında alüminyum çözümleri sunan, müşteri odaklı yaklaşımıyla sektöründe fark yaratan bir firmadır. Ürün yelpazesi, yapı ve endüstri projelerine özel olarak tasarlanmış dayanıklı, hafif ve estetik alüminyum profillerden oluşmaktadır. Teknolojik yenilikleri takip eden ve sürekli gelişimi hedefleyen firma, modern üretim tesisleri ve uzman kadrosu ile müşterilerine hem standart hem de özel üretim seçenekleri sunmaktadır. Çevreye duyarlılığı ve sürdürülebilirlik ilkelerini benimseyen Pusula Alüminyum, uzun ömürlü ve geri dönüştürülebilir ürünleriyle sektördeki lider konumunu güçlendirmektedir.'
        />
        <link rel='icon' href='/images/footerlogo.png' type='image/png' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

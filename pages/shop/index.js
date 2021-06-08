import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../../components/Layout/Layout'
import styles from '../../styles/Youtube.module.css'

function Shop({ posts }) {
  
    const { t } = useTranslation('common')

  return <Layout>
    <Head>
      <title>{t('title')} | UI Developer • Interaction Designer | Julio Montás</title>
      <meta name='twitter:url' content='https://juliomontas.com/shop/' />
      <meta property='og:url' content='https://juliomontas.com/shop/' />
      <meta property='og:image' content='https://juliomontas.com/me.png' />
      <meta name='twitter:image' content='https://juliomontas.com/me.png' />
      <meta property='og:title' content='Shop | UI Developer • Interaction Designer | Julio Montás' />
      <meta name='twitter:title' content='Shop | UI Developer • Interaction Designer | Julio Montás' />
      <meta name="description" content="Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC." key="description"/>
      <meta property='og:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
      <meta name='twitter:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
      <link rel="canonical" href="https://juliomontas.com/shop/" />
      <link rel="alternate" href="https://juliomontas.com/shop/" hreflang="en-us" />
      <link rel="alternate" href="https://juliomontas.com/es-us/shop/" hreflang="es-us" />
    </Head>
    <div className={styles.wrapper}>
        <div className={styles.main}>
            <h2>{t('comingSoon')}</h2>
            {/* <a href="" >Sign up</a> */}
        </div>
    </div>
  </Layout>
}

export async function getServerSideProps(context) {
  return {
    props: {},
  }
}
  
export default Shop
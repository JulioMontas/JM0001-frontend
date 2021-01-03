import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'

import Layout from '../../components/Layout/Layout'
import styles from '../../styles/Youtube.module.css'

function Youtube({ posts }) {
  
    const { t } = useTranslation('youtube')

  return <Layout>
    <Head>
      <title>{t('title')} | UI Developer • Interaction Designer | Llegó Julio</title>
      <meta name='twitter:url' content='https://llegojulio.com/youtube/' />
      <meta property='og:url' content='https://llegojulio.com/youtube/' />
      
      <meta property='og:image' content='https://llegojulio.com/me.png' />
      <meta name='twitter:image' content='https://llegojulio.com/me.png' />

      <meta property='og:title' content='Youtube | UI Developer • Interaction Designer | Llegó Julio' />
      <meta name='twitter:title' content='Youtube | UI Developer • Interaction Designer | Llegó Julio' />

      <meta name="description" content="Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC." key="description"/>
      <meta property='og:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
      <meta name='twitter:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />

      <link rel="canonical" href="https://llegojulio.com/youtube/" />
      <link rel="alternate" href="https://llegojulio.com/youtube/" hreflang="en" />
      <link rel="alternate" href="https://llegojulio.com/es/youtube" hreflang="es" />
    </Head>
    <div className={styles.container}>
        <div className={styles.articleList}>
            <h2>{t('title')}</h2>
        </div>
    </div>
  </Layout>
}

export async function getServerSideProps(context) {
  return {
    props: {},
  }
}
  
export default Youtube
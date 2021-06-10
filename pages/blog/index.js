import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../../components/Layout/Layout'
import styles from '../../styles/Youtube.module.css'
import { motion, useTransform } from "framer-motion"

function Blog({ posts }) {
    const { t } = useTranslation('common')
    const title = t('title')
    const comingSoon = t('comingSoon')
  return <Layout>
    <Head>
      <title>{title} | UI Developer • Interaction Designer | Julio Montás</title>
      <meta name='twitter:url' content='https://juliomontas.com/blog/' />
      <meta property='og:url' content='https://juliomontas.com/blog/' />
      <meta property='og:image' content='https://juliomontas.com/me.png' />
      <meta name='twitter:image' content='https://juliomontas.com/me.png' />
      <meta property='og:title' content='Blog | UI Developer • Interaction Designer | Julio Montás' />
      <meta name='twitter:title' content='Blog | UI Developer • Interaction Designer | Julio Montás' />
      <meta name="description" content="Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC." key="description"/>
      <meta property='og:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
      <meta name='twitter:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
      <link rel="canonical" href="https://juliomontas.com/blog/" />
      <link rel="alternate" href="https://juliomontas.com/blog/" hreflang="en-us" />
      <link rel="alternate" href="https://juliomontas.com/es-us/Blog/" hreflang="es-us" />
    </Head>
    <div className={styles.wrapper}>
      <motion.div className="styles.main"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}>
        <h2>{comingSoon}</h2>
      </motion.div>
    </div>
  </Layout>
}

export default Blog

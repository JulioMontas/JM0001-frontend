import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/Layout/Layout'
import { motion } from "framer-motion"
import styles from '../../styles/Blog.module.css'

export default function Blog({ data }) {
  return <Layout>
  <Head>
    <title>Blog | UI Developer • Interaction Designer | Julio Montás</title>
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
    <link rel="alternate" href="https://juliomontas.com/blog/" hrefLang="en-us" />
    <link rel="alternate" href="https://juliomontas.com/es-us/Blog/" hrefLang="es-us" />
  </Head>
  <motion.div
  initial={{ x: 600, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  exit={{ x: -600, opacity: 0 }}>
    <div className={styles.wrapper}>
      <div className={styles.main}>
      {data && data.map((blog) => (
        <a href={"blog/" + blog.slug} key={blog.id}>
          <Image
            src="/img/case-study/00/_.jpg"
            alt={blog.title}
            width={250}
            height={175}
            quality={100}
            layout="responsive"
            loading="lazy"
          />
          <h2 className={styles.blgTitle}>{blog.title}</h2>
          <p className={styles.blgSummery}>{blog.summary}</p>
         </a>
        ))}
      </div>
    </div>
    </motion.div>
  </Layout>
}

export async function getStaticProps() {
  const res = await fetch(`http://62a7072b7017.ngrok.io/articles`)
  const data = await res.json()

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { data },
  }
}

import Head from 'next/head'
import Layout from '../../components/Layout/Layout'
import Link from 'next/link'
import { motion } from "framer-motion"
import styles from '../../styles/Report.module.css'

export default function post({ post }) {
  return(
    <Layout>
      <Head>
      <title>{post.title} | Julio Montás</title>
      <meta name='twitter:url' content='https://juliomontas.com/case-study/0/' />
      <meta property='og:url' content='https://juliomontas.com/case-study/0/' />
      <meta property='og:image' content='https://juliomontas.com/img/pendulum/pendulum_instagram.jpg' />
      <meta name='twitter:image' content='https://juliomontas.com/img/pendulum/pendulum_instagram.jpg' />
      <meta property='og:title' content= {post.title + " | Julio Montás"} />
      <meta name='twitter:title' content= {post.title + " | Julio Montás"} />
      <meta name="description" content={post.summary} key="description"/>
      <meta property='og:description' content={post.summary} />
      <meta name='twitter:description' content={post.summary} />
      <link rel="canonical" href="https://juliomontas.com/case-study/0/" />
      <link rel="alternate" href="https://juliomontas.com/case-study/0/" hreflang="en-us" />
      <link rel="alternate" href="https://juliomontas.com/es-us/case-study/0/" hreflang="es-us" />
      </Head>
      <motion.div
      initial={{ y: 600, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -600, opacity: 0 }}>
      <div className={styles.mainIndex}>
        <div className={styles.mainCenterCont}>

          <Link href="/blog">
            <a alt="Close Page">
              <span>Close</span>
            </a>
          </Link>

          <div className={styles.flipSwitch}>
            <h2>{post.title}</h2>
            <p>{post.summary}</p>
          </div>

          <div>
            <p>{post.content}</p>
          </div>

        </div>
      </div>
      </motion.div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await fetch('http://62a7072b7017.ngrok.io/articles');
  const posts = await res.json();

  const paths = posts.map(post => ({
    params: { slug: post.slug }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch(`http://62a7072b7017.ngrok.io/articles?slug=${slug}`);
  const data = await res.json();
  const post = data[0];
  return {
    props: { post }
  };
}

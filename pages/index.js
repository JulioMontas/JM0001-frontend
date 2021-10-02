import Image from 'next/image'
import Link from 'next/link'
import { motion, useTransform } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import { request } from "../lib/datocms";
import useTranslation from 'next-translate/useTranslation'

export default function SideProject({ data }) {
  const { t } = useTranslation('home')
  const title = t('title')
  const description = t('descriptionA')
  return (
    <Layout>
    <Head>
      <title>Julio Montás - {title}</title>
      <meta name='twitter:url' content='https://juliomontas.com/' />
      <meta property='og:url' content='https://juliomontas.com/' />
      <meta property='og:image' content='https://juliomontas.com/me.png' />
      <meta name='twitter:image' content='https://juliomontas.com/me.png' />
      <meta property='og:title' content='Julio Montás - UI Developer • Interaction Designer' />
      <meta name='twitter:title' content='Julio Montás - UI Developer • Interaction Designer' />
      <meta name="description" content="Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC." key="description"/>
      <meta property='og:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
      <meta name='twitter:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
      <link rel="canonical" href="https://juliomontas.com/" />
      <link rel="alternate" href="https://juliomontas.com/" hreflang="en-us" />
      <link rel="alternate" href="https://juliomontas.com/es-us/" hreflang="es-us" />
    </Head>
    <div className={styles.container}>
    <motion.div
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -300, opacity: 0 }}>
    <div className={styles.main}>
    <section>
      <Image
        src="/me.png"
        alt="self portrait of me wearing sunglasses indoors"
        width={200}
        height={200}
      />
      <h2>{title}</h2>
    </section>
    <section>
      <p>{description}</p>
    </section>
    </div>
    </motion.div>
    </div>
    </Layout>
  );
}

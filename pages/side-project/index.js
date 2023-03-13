import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../../components/Layout'
import styles from '../../styles/Project.module.css'

const easing = [.6, -.05, .01, .99];

const fadeInUp = {
  initial:{
    y: 60,
    opacity: 0
  },
  animate:{
    y: 0,
    opacity: 1,
    transition:{
      duration: .6,
      ease: easing
    }
  }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function sideProject({ posts }) {
  const { t } = useTranslation('sideProject')
  return <Layout>
    <Head>
      <title>Side Project - UI Developer • Interaction Designer | Julio Montás</title>
      <meta name='twitter:url' content='https://juliomontas.com/side-project/' />
      <meta property='og:url' content='https://juliomontas.com/side-project/' />
      <meta property='og:image' content='https://juliomontas.com/me.png' />
      <meta name='twitter:image' content='https://juliomontas.com/me.png' />
      <meta property='og:title' content='Projects - UI Developer • Interaction Designer | Julio montas' />
      <meta name='twitter:title' content='Projects - UI Developer • Interaction Designer | Julio montas' />
      <meta name="description" content="Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC." key="description"/>
      <meta property='og:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
      <meta name='twitter:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
      <link rel="canonical" href="https://juliomontas.com/side-project/" />
      <link rel="alternate" href="https://juliomontas.com/side-project/" hreflang="en-us" />
      <link rel="alternate" href="https://juliomontas.com/es-us/side-project/" hreflang="es-us" />
    </Head>
    <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
      <div className={styles.container}>
        <motion.div  variants={stagger}>
          <div className={styles.main}>


           <motion.div variants={fadeInUp} className='card'>
           <section>
               <Link href={`/side-project/hellocode-the-home-for-programming-languages`}>
                 <a alt={t('title_01')}>
                   <h1 className={styles.blgTitle}>{t('title_01')}</h1>
                   <h3 className={styles.blgSummery}>{t('content_01')}</h3>
                   <span>
                     <Image
                       src="/img/side-project/hc/hc02.gif"
                       alt={t('title_01')}
                       width={1422}
                       height={688}
                      />
                   </span>
                </a>
               </Link>
               </section>
               </motion.div>

          <motion.div variants={fadeInUp} className='card'>
           <section>
            <Link href={`/side-project/surveillance-culture`}>
              <a alt={t('title_02')}>
                <h2 className={styles.blgTitle}>{t('title_02')}</h2>
                <h3 className={styles.blgSummery}>{t('content_02')}</h3>
                <span>
                  <Image
                  src="/img/side-project/surveillance/jessieNguyen-socialProof.jpg"
                  alt={t('title_02')}
                  width={640}
                  height={640}
                  quality={1}
                  loading="eager"
                  />
                </span>
              </a>
            </Link>
            </section>
            </motion.div>

            <motion.div variants={fadeInUp} className='card'>
            <section>
              <Link href={`/side-project/width-take-over-the-screen`}>
                <a alt={t('title_03')}>
                  <h2 className={styles.blgTitle}>{t('title_03')}</h2>
                  <h3 className={styles.blgSummery}>{t('content_03')}</h3>
                  <span>
                    <Image
                    src="/img/side-project/width/width_Landing_Page.png"
                    alt={t('title_03')}
                    width={360}
                    height={210}
                    quality={25}
                    loading="eager"
                    />
                  </span>
                </a>
              </Link>
              </section>
              </motion.div>

            <motion.div variants={fadeInUp} className='card'>
            <section>
            <Link href={`/side-project/basic-color-fundamentals`}>
              <a alt={t('title_05')}>
                <h2 className={styles.blgTitle}>{t('title_05')}</h2>
                <h3 className={styles.blgSummery}>{t('content_05')}</h3>
                <span>
                  <Image
                  src="/img/colorView_01.jpg"
                  alt={t('title_05')}
                  width={200}
                  height={200}
                  quality={15}
                  loading="eager"
                  />
                </span>
              </a>
            </Link>
            </section>
            </motion.div>


          </div>
        </motion.div>
      </div>
    </motion.div>
  </Layout>
}

export default sideProject

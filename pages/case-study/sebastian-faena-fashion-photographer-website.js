import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactPlayer from "react-player"
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Container from '../../components/Container'
import ExitButton from '../../components/ExitButton'
import PaletteList from '../../components/PaletteList'
import RelatedCTA from '../../components/RelatedCTA'
import styles from '../../styles/Report.module.css'

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

function CaseStudyIndex() {
  const { t } = useTranslation('caseStudy')
  return <Container>
    <Head>
      <title>{t('title_07')}</title>
      <meta name='twitter:url' content='https://juliomontas.com/case-study/2/' />
      <meta property='og:url' content='https://juliomontas.com/case-study/2/' />
      <meta property='og:image' content='https://juliomontas.com/img/ecommerce/mockupFragrance_A01.jpg' />
      <meta name='twitter:image' content='https://juliomontas.com/img/ecommerce/mockupFragrance_A01.jpg' />
      <meta property='og:title' content='Shopify Fragrance eCommerce - A Discovery In Scent | Julio Montás' />
      <meta name='twitter:title' content='Shopify Fragrance eCommerce - A Discovery In Scent | Julio Montás' />
      <meta name="description" content="A luxury fragrances distribution company going B2C with their first shofity eCommerce online store" key="description"/>
      <meta property='og:description' content='A luxury fragrances distribution company going B2C with their first shofity eCommerce online store' />
      <meta name='twitter:description' content='A luxury fragrances distribution company going B2C with their first shofity eCommerce online store' />
      <link rel="canonical" href="https://juliomontas.com/case-study/2/" />
      <link rel="alternate" href="https://juliomontas.com/case-study/2/" hreflang="en-us" />
      <link rel="alternate" href="https://juliomontas.com/es-us//case-study/2/" hreflang="es-us" />
    </Head>
    <motion.div exit={{y: -300, opacity: 0 }} initial='initial' animate='animate'>
    <motion.div variants={stagger}>
      <div className={styles.mainIndex}>
        <div className={styles.mainCenterCont}>
          <div className={styles.gridContainer}>

          <motion.div variants={fadeInUp}>
          <div className={styles.flipSwitch}>
            <div>
              <h1>{t('title_07')}</h1>
              <p>{t('content_07')}</p>
            </div>
            <ExitButton url="/" />
          </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
          <div className={styles.flipSwitch}>
            <h3>&#128466; {t('overview')}</h3>
            <p>{t('overviewContent_07')}</p>
          </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
          <div className={styles.secLandingPage}>
            <div className={styles.flipSwitch}>
              <h3>&#127968; {t('landingPage')}</h3>
              <p>{t('landingPageContent_07')}</p>
            </div>
          </div>
          </motion.div>

          </div>
          </div>
      </div>
    </motion.div>
    </motion.div>
  </Container>
}

export async function getServerSideProps(context) {
  return {
    props: {},
  }
}

export default CaseStudyIndex

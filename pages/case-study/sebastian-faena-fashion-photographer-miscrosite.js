import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Container from '../../components/Container'
import ExitButton from '../../components/ExitButton'
import RelatedCTA from '../../components/RelatedCTA'
import SideProjectWrap from '../../components/SideProjectWrap'
import ContactForm from '../../components/ContactForm'
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
  return <div className={styles.backgroundColor}>
  <Container>
    <Head>
      <title>{t('title_07')}</title>
      <meta name='twitter:url' content='https://juliomontas.com/case-study/sebastian-faena-fashion-photographer-miscrosite/' />
      <meta property='og:url' content='https://juliomontas.com/case-study/sebastian-faena-fashion-photographer-miscrosite/' />
      <meta property='og:image' content='https://juliomontas.com/img/ecommerce/mockupFragrance_A01.jpg' />
      <meta name='twitter:image' content='https://juliomontas.com/img/ecommerce/mockupFragrance_A01.jpg' />
      <meta property='og:title' content='Sebastian Faena: Fashion Photographer Miscrosite' />
      <meta name='twitter:title' content='Sebastian Faena: Fashion Photographer Miscrosite' />
      <meta name="description" content="The landing page image changes to a random image each time it is refreshed." key="description"/>
      <meta property='og:description' content='The landing page image changes to a random image each time it is refreshed.' />
      <meta name='twitter:description' content='The landing page image changes to a random image each time it is refreshed.' />
      <link rel="canonical" href="https://juliomontas.com/case-study/sebastian-faena-fashion-photographer-miscrosite/" />
      <link rel="alternate" href="https://juliomontas.com/case-study/sebastian-faena-fashion-photographer-miscrosite/" hreflang="en-us" />
      <link rel="alternate" href="https://juliomontas.com/es-us//case-study/sebastian-faena-fashion-photographer-miscrosite/" hreflang="es-us" />
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
          </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
          <div className={styles.flipSwitch}>
            <h2>&#128466; {t('overview')}</h2>
            <p>{t('overviewContent_07')}</p>
          </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
          <div>
            <h2>&#128248; Actual Website</h2>
            <Image
              src="/img/case-study/sebastian-faena.gif"
              alt="In the night at the beach"
              width={1024}
              height={600}
              quality={100}
              layout="responsive"
              loading="lazy"
            />
          </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
          <div>
            <h2>&#128065; Wireframe</h2>
            <Swiper
            style={{
              "--swiper-navigation-color": "#FFFC00",
              "--swiper-pagination-color": "#FFFC00",
            }}
             modules={[Navigation, Pagination, Scrollbar, A11y]}
            pagination={{ clickable: true }}
            speed={400}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
                width: 300
              },
              1200: {
                slidesPerView: 1,
                spaceBetween: 10,
                width: 1000
              }
            }}
            >
          <SwiperSlide>
                <Image
                src="/img/case-study/sebastian-faena_Wireframe_02.gif"
                alt="Mockups design 1"
                width={1000}
                height={613}
                quality={100}
                layout="responsive"
                loading="lazy"
                />
          </SwiperSlide>
          <SwiperSlide>
                <Image
                src="/img/case-study/sebastian-faena_Wireframe_01.gif"
                alt="Mockups design 2"
                width={1000}
                height={613}
                quality={100}
                layout="responsive"
                loading="lazy"
                />
          </SwiperSlide>
          </Swiper>
          </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
          <div className={styles.flipSwitch}>
            <h2>More Case Study</h2>
            <ul>
              <RelatedCTA
                url={"/case-study/" + t('slug_04')}
                title={t('title_04')}
                content={t('content_04')}
              />
              <RelatedCTA
                url={"/case-study/" + t('slug_00')}
                title={t('title_00')}
                content={t('content_00')}
              />
              <RelatedCTA
                url={"/case-study/" + t('slug_01')}
                title={t('title_01')}
                content={t('content_01')}
              />
              <RelatedCTA
                url={"/case-study/" + t('slug_02')}
                title={t('title_02')}
                content={t('content_02')}
              />
              <RelatedCTA
                url={"/case-study/" + t('slug_03')}
                title={t('title_03')}
                content={t('content_03')}
              />
              <RelatedCTA
                url={"/case-study/" + t('slug_08')}
                title={t('title_08')}
                content={t('content_08')}
              />
              <RelatedCTA
                url={"/case-study/" + t('slug_06')}
                title={t('title_06')}
                content={t('content_06')}
              />
              <RelatedCTA
                url={"/case-study/" + t('slug_05')}
                title={t('title_05')}
                content={t('content_05')}
              />
            </ul>
          </div>
          </motion.div>

          <SideProjectWrap
            title="Side Projects"
          />

          <ContactForm
            title="Contact Form"
          />

          </div>
          </div>
      </div>
    </motion.div>
    </motion.div>
  </Container>
  </div>
}

export async function getServerSideProps(context) {
  return {
    props: {},
  }
}

export default CaseStudyIndex

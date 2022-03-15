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
      <title>{t('title_05')}</title>
      <meta name='twitter:url' content='https://juliomontas.com/case-study/lancome-visionnaire-video-ui/' />
      <meta property='og:url' content='https://juliomontas.com/case-study/lancome-visionnaire-video-ui/' />
      <meta property='og:image' content='https://juliomontas.com/img/ecommerce/mockupFragrance_A01.jpg' />
      <meta name='twitter:image' content='https://juliomontas.com/img/ecommerce/mockupFragrance_A01.jpg' />
      <meta property='og:title' content='Lancome: Visionnaire Video U' />
      <meta name='twitter:title' content='Lancome: Visionnaire Video U' />
      <meta name="description" content=" " key="description"/>
      <meta property='og:description' content=' ' />
      <meta name='twitter:description' content=' ' />
      <link rel="canonical" href="https://juliomontas.com/case-study/lancome-visionnaire-video-ui/" />
      <link rel="alternate" href="https://juliomontas.com/case-study/lancome-visionnaire-video-ui/" hreflang="en-us" />
      <link rel="alternate" href="https://juliomontas.com/es-us/case-study/lancome-visionnaire-video-ui/" hreflang="es-us" />
    </Head>
    <motion.div exit={{y: -300, opacity: 0 }} initial='initial' animate='animate'>
    <motion.div variants={stagger}>
      <div className={styles.mainIndex}>
        <div className={styles.mainCenterCont}>
          <div className={styles.gridContainer}>

          <motion.div variants={fadeInUp}>
          <div className={styles.flipSwitch}>
            <div>
              <h1>{t('title_05')}</h1>
              <p>{t('content_05')}</p>
            </div>
            <ExitButton url="/" />
          </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
          <div className={styles.flipSwitch}>
            <h2>&#128466; {t('overview')}</h2>
            <p>{t('overviewContent_05')}</p>
          </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
          <div>
            <h2>&#128248; Video Player</h2>
            <Image
              src="/img/case-study/lancome.gif"
              alt="In the night at the beach"
              width={1000}
              height={613}
              quality={75}
              layout="responsive"
              loading="lazy"
            />
          </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
          <div>
            <h2>&#128065; Mockups</h2>
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
                src="/img/case-study/lc01.jpg"
                alt="Mockups design 1"
                width={1000}
                height={613}
                quality={20}
                layout="responsive"
                loading="lazy"
                />
          </SwiperSlide>
          <SwiperSlide>
                <Image
                src="/img/case-study/lc02.jpg"
                alt="Mockups design 2"
                width={1000}
                height={613}
                quality={20}
                layout="responsive"
                loading="lazy"
                />
          </SwiperSlide>
          <SwiperSlide>
                <Image
                src="/img/case-study/lc03.jpg"
                alt="Mockups design 3"
                width={1000}
                height={613}
                quality={20}
                layout="responsive"
                loading="lazy"
                />
          </SwiperSlide>
          <SwiperSlide>
                <Image
                src="/img/case-study/lc05.jpg"
                alt="Mockups design 4"
                width={1000}
                height={613}
                quality={20}
                layout="responsive"
                loading="lazy"
                />
          </SwiperSlide>
          <SwiperSlide>
                <Image
                src="/img/case-study/lc06.jpg"
                alt="Mockups design 5"
                width={1000}
                height={613}
                quality={20}
                layout="responsive"
                loading="lazy"
                />
          </SwiperSlide>
          </Swiper>
          </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
          <div>
            <h2>&#128248; Video Player in a microsite</h2>
            <Image
              src="/img/case-study/lc08.jpg"
              alt="In the night at the beach"
              width={1024}
              height={1868}
              quality={75}
              layout="responsive"
              loading="lazy"
            />
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
                url={"/case-study/" + t('slug_07')}
                title={t('title_07')}
                content={t('content_07')}
              />
            </ul>
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

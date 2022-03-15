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
      <title>{t('title_08')}</title>
      <meta name='twitter:url' content='https://juliomontas.com/case-study/nike-retail-ipad-app/' />
      <meta property='og:url' content='https://juliomontas.com/case-study/nike-retail-ipad-app/' />
      <meta property='og:image' content='https://juliomontas.com/img/ecommerce/mockupFragrance_A01.jpg' />
      <meta name='twitter:image' content='https://juliomontas.com/img/ecommerce/mockupFragrance_A01.jpg' />
      <meta property='og:title' content='Nike: Retail iPad App Re-skinning' />
      <meta name='twitter:title' content='Nike: Retail iPad App Re-skinning' />
      <meta name="description" content="Re-skinning an existing in-store app to match the look and feel of Nike branding for wider store distribution." key="description"/>
      <meta property='og:description' content='Re-skinning an existing in-store app to match the look and feel of Nike branding for wider store distribution.' />
      <meta name='twitter:description' content='Re-skinning an existing in-store app to match the look and feel of Nike branding for wider store distribution.' />
      <link rel="canonical" href="https://juliomontas.com/case-study/nike-retail-ipad-app/" />
      <link rel="alternate" href="https://juliomontas.com/case-study/nike-retail-ipad-app/" hreflang="en-us" />
      <link rel="alternate" href="https://juliomontas.com/es-us/case-study/nike-retail-ipad-app/" hreflang="es-us" />
    </Head>
    <motion.div exit={{y: -300, opacity: 0 }} initial='initial' animate='animate'>
    <motion.div variants={stagger}>
      <div className={styles.mainIndex}>
        <div className={styles.mainCenterCont}>
          <div className={styles.gridContainer}>

          <motion.div variants={fadeInUp}>
          <div className={styles.flipSwitch}>
            <div>
              <h1>{t('title_08')}</h1>
              <p>{t('content_08')}</p>
            </div>
          </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
          <div className={styles.flipSwitch}>
            <h2>&#128466; {t('overview')}</h2>
            <p>{t('overviewContent_08')}</p>
          </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
          <div>
            <h2>&#128248; Video Player</h2>
            <Image
              src="/img/case-study/n01.jpg"
              alt="In the night at the beach"
              width={1024}
              height={747}
              quality={75}
              layout="responsive"
              loading="lazy"
            />
          </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
          <div>
            <h2>&#128065; UI Design</h2>
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
                spaceBetween: 20,
                width: 1024
              }
            }}
            >
          <SwiperSlide>
                <Image
                src="/img/case-study/n03.jpg"
                alt="Mockups design 2"
                width={1024}
                height={747}
                quality={20}
                layout="responsive"
                loading="lazy"
                />
          </SwiperSlide>
          <SwiperSlide>
                <Image
                src="/img/case-study/n02.jpg"
                alt="Mockups design 3"
                width={1024}
                height={747}
                quality={20}
                layout="responsive"
                loading="lazy"
                />
          </SwiperSlide>
          <SwiperSlide>
                <Image
                src="/img/case-study/n05.jpg"
                alt="Mockups design 4"
                width={1024}
                height={747}
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
            <h2>&#128248; Video Player</h2>
            <Image
              src="/img/case-study/n06.jpg"
              alt="In the night at the beach"
              width={1024}
              height={748}
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
                url={"/case-study/" + t('slug_06')}
                title={t('title_06')}
                content={t('content_06')}
              />
              <RelatedCTA
                url={"/case-study/" + t('slug_05')}
                title={t('title_05')}
                content={t('content_05')}
              />
              <RelatedCTA
                url={"/case-study/" + t('slug_07')}
                title={t('title_07')}
                content={t('content_07')}
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

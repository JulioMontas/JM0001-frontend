import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Container from '../../components/Container'
import NavBar from '../../components/NavBar'
import RelatedCTA from '../../components/RelatedCTA'
import CaseStudiesWrap from '../../components/CaseStudiesWrap'
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

function ProjectIndex() {
  const { t } = useTranslation('sideProject')
  return <div className={styles.backgroundColor}>
  <NavBar />
  <Container>
    <Head>
      <title>{t('title_04')} | Side Project</title>
      <meta name='twitter:url' content='https://juliomontas.com/side-project/meliorem/' />
      <meta property='og:url' content='https://juliomontas.com/side-project/meliorem/' />
      <meta property='og:image' content='https://juliomontas.com/img/side-project/meliorem/meliorem-02.png' />
      <meta name='twitter:image' content='https://juliomontas.com/img/side-project/meliorem/meliorem-02.png' />
      <meta property='og:title' content='Meliorem - Cultivating Your Passion to Level Up | Julio montas' />
      <meta name='twitter:title' content='Meliorem - Cultivating Your Passion to Level Up | Julio montas' />
      <meta name="description" content="Reward self task manager to stimulate your existence" key="description"/>
      <meta property='og:description' content='Reward self task manager to stimulate your existence' />
      <meta name='twitter:description' content='Reward self task manager to stimulate your existence' />
      <link rel="canonical" href="https://juliomontas.com/side-project/meliorem/" />
      <link rel="alternate" href="https://juliomontas.com/side-project/meliorem/" hreflang="en-us" />
      <link rel="alternate" href="https://juliomontas.com/es-us/side-project/meliorem/" hreflang="es-us" />
    </Head>
    <motion.div exit={{y: -300, opacity: 0 }} initial='initial' animate='animate'>
    <motion.div variants={stagger}>
    <div className={styles.mainIndex}>
      <div className={styles.mainCenterCont}>
        <div className={styles.gridContainer}>

          <motion.div variants={fadeInUp}>
          <div className={styles.flipSwitch}>
            <div>
              <h1>{t('title_04')}</h1>
              <p>{t('content_04')}</p>
            </div>
          </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
          <div className={styles.flipSwitch}>
            <h2>Concept</h2>
            <p>{t('conceptContent_04')}</p>
          </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
          <div>
            <h2>UI Design</h2>
            <Image
            src="/img/side-project/meliorem/projectManagementTracker-Mockup00A.jpg"
            alt="Mockup of python page"
            width={1440}
            height={1267}
            quality={50}
            layout="responsive"
            loading="eager"
            />
            <p className={styles.textUnderImg}>{t('uiDesignContent_04a')}</p>
            <Swiper
            speed={400}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
                width: 300
              },
              1200: {
                slidesPerView: 1,
                spaceBetween: 10,
                width: 700
              }
            }}
            >
              <SwiperSlide>
                <Image
                src="/img/side-project/meliorem/meliorem-01.png"
                alt="Mockup of python page"
                width={1080}
                height={1080}
                quality={100}
                layout="responsive"
                loading="lazy"
                />
                <p className={styles.textUnderImg}>{t('uiDesignContent_04b')}</p>
              </SwiperSlide>
              <SwiperSlide>
                <Image
                src="/img/side-project/meliorem/meliorem-02.png"
                alt="Mockup of python page"
                width={1080}
                height={1080}
                quality={100}
                layout="responsive"
                loading="lazy"
                />
                <p className={styles.textUnderImg}>{t('uiDesignContent_04c')}</p>
              </SwiperSlide>
              <SwiperSlide>
                <Image
                src="/img/side-project/meliorem/meliorem-03.png"
                alt="Mockup of python page"
                width={1080}
                height={1080}
                quality={100}
                layout="responsive"
                loading="lazy"
                />
                <p className={styles.textUnderImg}>{t('uiDesignContent_04d')}</p>
              </SwiperSlide>
            </Swiper>
          </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
          <div className={styles.flipSwitch}>
            <h2>More Projects</h2>
            <ul>
            <RelatedCTA
              url="/side-project/hellocode-the-home-for-programming-languages"
              title={t('title_01')}
              content={t('content_01')}
            />
            <RelatedCTA
              url="/side-project/width-take-over-the-screen"
              title={t('title_03')}
              content={t('content_03')}
            />
            <RelatedCTA
              url="/side-project/basic-color-fundamentals"
              title={t('title_05')}
              content={t('content_05')}
            />
            </ul>
          </div>
          </motion.div>

          <CaseStudiesWrap
            title="Case Studies"
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

export default ProjectIndex

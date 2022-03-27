import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Container from '../../components/Container'
import ExitButton from '../../components/ExitButton'
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
  <Container>
  <Head>
    <title>Side Project: {t('title_03')}</title>
    <meta name='twitter:url' content='https://juliomontas.com/side-project/width/' />
    <meta property='og:url' content='https://juliomontas.com/side-project/width/' />
    <meta property='og:image' content='https://juliomontas.com/img/side-project/width/width_BothPlayer_1080.gif' />
    <meta name='twitter:image' content='https://juliomontas.com/img/side-project/width/width_BothPlayer_1080.gif' />
    <meta property='og:title' content='Width Take Over the Screen | Julio montas' />
    <meta name='twitter:title' content='Width Take Over the Screen | Julio montas' />
    <meta name="description" content="A two-player game in which you must defeat your opponents by clicking to take over the screen" key="description"/>
    <meta property='og:description' content='A two-player game in which you must defeat your opponents by clicking to take over the screen' />
    <meta name='twitter:description' content='A two-player game in which you must defeat your opponents by clicking to take over the screen' />
    <link rel="canonical" href="https://juliomontas.com/side-project/width/" />
    <link rel="alternate" href="https://juliomontas.com/side-project/width/" hreflang="en-us" />
    <link rel="alternate" href="https://juliomontas.com/es-us/side-project/width/" hreflang="es-us" />
  </Head>
  <motion.div exit={{y: -300, opacity: 0 }} initial='initial' animate='animate'>
  <motion.div variants={stagger}>
  <div className={styles.mainIndex}>
    <div className={styles.mainCenterCont}>
      <div className={styles.gridContainer}>

                <motion.div variants={fadeInUp}>
                <div className={styles.flipSwitch}>
                    <div>
                        <h1>{t('title_03')}</h1>
                        <p>{t('content_03')}</p>
                    </div>
                </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                <div className={styles.flipSwitch}>
                    <h3>Concept</h3>
                    <p>{t('conceptContent_03')}</p>
                </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                <div>
                  <h3>UI Design</h3>
                  <Image
                    src="/img/side-project/width/width_Sketch_Iphone.png"
                    alt="Mockup of python page"
                    width={1280}
                    height={735}
                    quality={70}
                    layout="responsive"
                    loading="eager"
                  />
                </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                <div>
                <p className={styles.textUnderImg}>{t('uiDesignContent_03a')}</p>
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
                        width: 800
                    }
                }}
                >
                    <SwiperSlide>
                        <Image
                        src="/img/side-project/width/width_Wireframe_levelOne.png"
                        alt="Wireframe level one design"
                        width={1280}
                        height={800}
                        quality={20}
                        layout="responsive"
                        loading="lazy"
                        />
                        <p className={styles.textUnderImg}>{t('uiDesignContent_03b')}</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                        src="/img/side-project/width/width_Wireframe_levelThree.png"
                        alt="Wireframe level three design"
                        width={1280}
                        height={800}
                        quality={20}
                        layout="responsive"
                        loading="lazy"
                        />
                        <p className={styles.textUnderImg}>{t('uiDesignContent_03c')}</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                        src="/img/side-project/width/width_Wireframe_levelSix.png"
                        alt="Wireframe level six design"
                        width={1280}
                        height={800}
                        quality={20}
                        layout="responsive"
                        loading="lazy"
                        />
                        <p className={styles.textUnderImg}>{t('uiDesignContent_03d')}</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                        src="/img/side-project/width/width_Wireframe_levelTwelve.png"
                        alt="Wireframe level twelve design"
                        width={1280}
                        height={800}
                        quality={20}
                        layout="responsive"
                        loading="lazy"
                        />
                        <p className={styles.textUnderImg}>{t('uiDesignContent_03e')}</p>
                    </SwiperSlide>
                </Swiper>

                </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                <div>
                    <Image
                    src="/img/side-project/width/width_Landing_Page.png"
                    alt="Main page for width"
                    width={1080}
                    height={629}
                    quality={70}
                    layout="responsive"
                    loading="lazy"
                    />
                    <p className={styles.textUnderImg}>{t('uiDesignContent_03f')}</p>
                </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                <div className={styles.flipSwitch}>
                  <h3>URL</h3>
                  <ul>
                    <RelatedCTA
                      url="https://width.herokuapp.com"
                      title="Prototype Demo"
                      content=""
                    />
                  </ul>
                </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                <div className={styles.flipSwitch}>
                    <h3>More Projects</h3>
                    <ul>
                    <RelatedCTA
                      url="/side-project/hellocode-the-home-for-programming-languages"
                      title={t('title_01')}
                      content={t('content_01')}
                    />
                    <RelatedCTA
                      url="/side-project/surveillance-culture"
                      title={t('title_02')}
                      content={t('content_02')}
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

export default ProjectIndex

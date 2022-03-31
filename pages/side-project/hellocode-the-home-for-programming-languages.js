import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
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
    <title>Side Project: {t('title_01')}</title>
    <meta name='twitter:url' content='https://juliomontas.com/side-project/hellocode/' />
    <meta property='og:url' content='https://juliomontas.com/side-project/hellocode/' />
    <meta property='og:image' content='https://juliomontas.com/img/side-project/hc/hc01.gif' />
    <meta name='twitter:image' content='https://juliomontas.com/img/side-project/hc/hc01.gif' />
    <meta property='og:title' content='Helloco.de The Home For Programming Languages | Julio montas' />
    <meta name='twitter:title' content='Helloco.de The Home For Programming Languages | Julio montas' />
    <meta name="description" content="List of programming languages that have been developed from 1950–1979, 1980–1999, and 2000 to the present" key="description"/>
    <meta property='og:description' content='List of programming languages that have been developed from 1950–1979, 1980–1999, and 2000 to the present' />
    <meta name='twitter:description' content='List of programming languages that have been developed from 1950–1979, 1980–1999, and 2000 to the present' />
    <link rel="canonical" href="https://juliomontas.com/side-project/hellocode/" />
    <link rel="alternate" href="https://juliomontas.com/side-project/hellocode/" hreflang="en-us" />
    <link rel="alternate" href="https://juliomontas.com/es-us/side-project/hellocode/" hreflang="es-us" />
  </Head>
  <motion.div exit={{y: -300, opacity: 0 }} initial='initial' animate='animate'>
  <motion.div variants={stagger}>
  <div className={styles.mainIndex}>
    <div className={styles.mainCenterCont}>
      <div className={styles.gridContainer}>

                <motion.div variants={fadeInUp}>
                <div className={styles.flipSwitch}>
                    <div>
                        <h1>{t('title_01')}</h1>
                        <p>{t('content_01')}</p>
                    </div>
                </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                <div className={styles.flipSwitch}>
                    <h3>Concept</h3>
                    <p>{t('conceptContent_01')}</p>
                </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                <div>
                    <h3>UI Design</h3>
                    <Image
                    src="/img/side-project/hc/CABulM1UwAAPf4a.png"
                    alt="Mockup of python page"
                    width={1421}
                    height={1897}
                    quality={100}
                    layout="responsive"
                    loading="eager"
                    />
                </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                <div>
                <p className={styles.textUnderImg}>{t('uiDesignContent_01a')}</p>
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
                        spaceBetween: 20,
                        width: 800
                    }
                }}
                >
                    <SwiperSlide>
                        <Image
                        src="/img/side-project/hc/hc02.gif"
                        alt="Mockup of python page"
                        width={940}
                        height={718}
                        quality={100}
                        layout="responsive"
                        loading="lazy"
                        />
                        <p className={styles.textUnderImg}>{t('uiDesignContent_01b')}</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                        src="/img/side-project/hc/hc01.gif"
                        alt="Mockup of python page"
                        width={1422}
                        height={768}
                        quality={100}
                        layout="responsive"
                        loading="lazy"
                        />
                        <p className={styles.textUnderImg}>{t('uiDesignContent_01c')}</p>
                    </SwiperSlide>
                </Swiper>
                </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                <div className={styles.flipSwitch}>
                <h3>URL</h3>
                    <div>
                        <ul className={styles.secTextList}>
                        <RelatedCTA
                          url="https://bfacd.parsons.edu/2013/helloco-de"
                          title="The New School BFA Thesis 2013"
                          content=""
                        />
                        <RelatedCTA
                          url="https://twitter.com/msdev/status/485951332105195520"
                          title="Microsoft Developer Tweet"
                          content=""
                        />
                        </ul>
                    </div>
                </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                <div className={styles.flipSwitch}>
                  <h3>More Projects</h3>
                  <ul>
                    <RelatedCTA
                      url="/side-project/surveillance-culture"
                      title={t('title_02')}
                      content={t('content_02')}
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

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
      <title>{t('title_04')}</title>
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
              <h1>{t('title_04')}</h1>
              <p>{t('content_04')}</p>
            </div>
            <ExitButton url="/" />
          </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
          <div className={styles.flipSwitch}>
            <h3>&#128466; {t('overview')}</h3>
            <p>{t('overviewContent_04')}</p>
          </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
          <div>
            <h3>&#128444; {t('moodboard_03')}</h3>
            <Swiper
            speed={400}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
                width: 250
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 10,
                width: 1200
              }
            }}
            >
            <SwiperSlide>
             <div>
               <div className={styles.shortCurve}>
               <Image
              src="/img/ecommerce/"
              alt="Text"
              width={885}
              height={498}
              quality={50}
              layout="responsive"
              loading="eager"
            />
               </div>
               <div className={styles.longCurve}>
               <Image
              src="/img/ecommerce/"
              alt="silk sheets"
              width={794}
              height={794}
              quality={50}
              layout="responsive"
              loading="eager"
            />
               </div>
             </div>
          </SwiperSlide>
            <SwiperSlide>
            <div>
            <div className={styles.halfCurveUpRight}>
            <Image
              src="/img/ecommerce/"
              alt="Text"
              width={601}
              height={800}
              quality={50}
              layout="responsive"
              loading="eager"
            />
            </div>
            <div className={styles.halfCurveBottomLeft}>
            <Image
              src="/img/ecommerce/"
              alt="Text"
              width={300}
              height={250}
              quality={50}
              layout="responsive"
              loading="eager"
            />
            </div>
             </div>
            </SwiperSlide>
            <SwiperSlide>
            <div>
               <div className={styles.longButNo}>
               <Image
              src="/img/ecommerce/"
              alt="Text"
              width={600}
              height={955}
              quality={50}
              layout="responsive"
              loading="eager"
            />
               </div>
               <div className={styles.injectionCircle}>
               <Image
              src="/img/ecommerce/"
              alt="Text"
              width={225}
              height={225}
              quality={50}
              layout="responsive"
              loading="eager"
            />
               </div>
             </div>
            </SwiperSlide>
            <SwiperSlide>
            <div>
            <div className={styles.longFlat}>
            <Image
              src="/img/ecommerce/"
              alt="Text"
              width={462}
              height={624}
              quality={50}
              layout="responsive"
              loading="eager"
            />
            </div>
             </div>
            </SwiperSlide>
            </Swiper>
          </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
          <div className={styles.flipSwitch}>
            <h3>&#128640; {t('background')}</h3>
            <p>{t('backgroundContent_04')}</p>
          </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
          <div className={styles.flipSwitch}>
            <h3>&#9997; Oswald By Vernon Adams, Kalapi Gajjar, Cyreal</h3>
          </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
          <PaletteList
            title={t('palette')}
            first="3d586b"
            second="1d3851"
            third="bca360"
            fourth="FFF"
            last="eef0f2"
          />
          </motion.div>

          <motion.div variants={fadeInUp}>
          <div className={styles.flipSwitch}>
            <h3>&#127853; {t('gradient')}</h3>
            <div className={styles.secColorGradient}>
              <span style={{backgroundImage:'linear-gradient(#3d586b,rgba(29,56,81,.6))'}}></span>
            </div>
          </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
          <div className={styles.SecBackground}>
            <h3>&#128736; {t('sitemap')}</h3>
          </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
          <div className={styles.secLandingPage}>
            <div className={styles.flipSwitch}>
              <h3>&#127968; {t('landingPage')}</h3>
              <p>{t('landingPageContent_04')}</p>
            </div>
            <Swiper
            speed={400}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
                width: 310
              },
              1200: {
                slidesPerView: 2,
                spaceBetween: 10,
                width: 1000
              }
            }}
            >
              <SwiperSlide>
                <Image
                src="/img/ecommerce/"
                alt="Mockup Landing Before"
                width={1440}
                height={800}
                quality={50}
                layout="responsive"
                loading="lazy"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                src="/img/ecommerce/"
                alt="Mockup Landing After"
                width={1440}
                height={800}
                quality={50}
                layout="responsive"
                loading="lazy"
                />
              </SwiperSlide>
            </Swiper>
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

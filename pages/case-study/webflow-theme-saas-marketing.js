import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import ReactPlayer from "react-player"
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import NavBar from '../../components/NavBar'
import Container from '../../components/Container'
import ExitButton from '../../components/ExitButton'
import RelatedCTA from '../../components/RelatedCTA'
import SideProjectWrap from '../../components/SideProjectWrap'
import ContactForm from '../../components/ContactForm'
import styles from '../../styles/Report.module.css'
import PaletteList from '../../components/PaletteList'
import CaseStudiesWrap from '../../components/CaseStudiesWrap'

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
  return <>
  <NavBar />
  <div className={styles.backgroundColor}>
  <Container>
    <Head>
      <title>{t('title_10')} | Case Study</title>
      <meta property='og:title' content={t('title_10')} />
      <meta name='twitter:title' content={t('title_10')} />
      <meta name="description" content={t('description_09')} key="description"/>
      <meta property='og:description' content={t('description_10')} />
      <meta name='twitter:description' content={t('description_10')} />
      <meta property='og:image' content='https://juliomontas.com/img/pendulum/pendulum_instagram.jpg' />
      <meta name='twitter:image' content='https://juliomontas.com/img/pendulum/pendulum_instagram.jpg' />
      <meta name='twitter:url' content='https://juliomontas.com/case-study/webflow-theme-saas-marketing' />
      <meta property='og:url' content='https://juliomontas.com/case-study/webflow-theme-saas-marketing' />
      <link rel="canonical" href="https://juliomontas.com/case-study/webflow-theme-saas-marketing" />
      <link rel="alternate" href="https://juliomontas.com/case-study/webflow-theme-saas-marketing" hreflang="en-us" />
      <link rel="alternate" href="https://juliomontas.com/es-us/case-study/webflow-theme-saas-marketing" hreflang="es-us" />
    </Head>
      <motion.div exit={{y: -300, opacity: 0 }} initial='initial' animate='animate'>
      <motion.div variants={stagger}>
      <div className={styles.mainIndex}>
          <div className={styles.mainCenterCont}>
            <div className={styles.gridContainer}>

            <motion.div variants={fadeInUp}>
            <div className={styles.flipSwitch}>
              <div>
                <h1>{t('title_10')}</h1>
                <p>{t('content_10')}</p>
              </div>
            </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
            <div className={styles.flipSwitch}>
              <h3>&#128466; {t('overview')}</h3>
              <p>{t('overviewContent_10')}</p>
            </div>
            </motion.div>

            {/* <motion.div variants={fadeInUp}>
          <div className={styles.flipSwitch}>
            <h2>&#128736; {t('development')}</h2>
            <ul className={styles.secTextList}>
              <li>Product Listing Pages (PLPs)</li>
              <li>Product Detail Page (PDP)</li>
              <li>Checkout</li>
              <li>e-Mails Templates</li>
            </ul>
          </div>
          </motion.div> */}

          <motion.div variants={fadeInUp}>
          <PaletteList
            title={t('palette')}
            first="0665d6"
            second="054796"
            third="#333"
            fourth="505050"
            last="fff"
          />
          </motion.div>

          {/* <motion.div variants={fadeInUp}>
          <div className={styles.flipSwitch}>
            <h2>&#128640; {t('background')}</h2>
            <p>{t('backgroundContent_10')}</p>
          </div>
          </motion.div> */}

          <motion.div variants={fadeInUp}>
          <div>
            <div className={styles.flipSwitch}>
              <h2>&#128065; Sitemap</h2>
              {/* <p className={styles.textAbove}>Text</p> */}
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
                slidesPerView: 1,
                spaceBetween: 10,
                width: 1200
              }
            }}
            >
            <SwiperSlide>
              <Image
              src="/img/case-study/TRMA0A-Sitemap-A02.jpg"
              alt="Mockup PDP B1 with post review"
              width={1600}
              height={800}
              quality={100}
              layout="responsive"
              loading="lazy"
              />
              {/* <small>Text</small> */}
            </SwiperSlide>
            </Swiper>
          </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
          <div>
            <div className={styles.flipSwitch}>
              <h2>&#128065; Homepage</h2>
              {/* <p className={styles.textAbove}>Text</p> */}
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
                slidesPerView: 1,
                spaceBetween: 10,
                width: 1100
              }
            }}
            >
            <SwiperSlide>
              <Image
              src="/img/case-study/TRMA0A-homepage-wireframe.jpg"
              alt="Mockup PDP B1 with post review"
              width={1440}
              height={4910}
              quality={100}
              layout="responsive"
              loading="lazy"
              />
              {/* <small>Text</small> */}
            </SwiperSlide>
            <SwiperSlide>
              <Image
              src="/img/case-study/TRMA0A-homepage-mockup.jpg"
              alt="Mockup PDP B1 with post review"
              width={1440}
              height={4910}
              quality={100}
              layout="responsive"
              loading="lazy"
              />
              {/* <small>Text</small> */}
            </SwiperSlide>
            </Swiper>
          </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <div className={styles.flipSwitch}>
              <h2>&#127919; {t('results')}</h2>
              <p>{t('resultsContent_10')}</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
          <div className={styles.flipSwitch}>
            <h2>Official Website</h2>
            <ul className={styles.secTextList}>
              <RelatedCTA
                url="https://saas-marketing.webflow.io/"
                title="saas-marketing.webflow.io"
                content="https://saas-marketing.webflow.io/"
              />
            </ul>
          </div>
          </motion.div>

          <motion.div>
            <CaseStudiesWrap
              title="Case Studies"
            />
          </motion.div>

          <motion.p variants={fadeInUp}>
              © {new Date().getFullYear()} Julio Montás. All Rights Reserved.
          </motion.p>
          
            </div>
          </div>
      </div>
      </motion.div>
      </motion.div>
  </Container>
  </div>
  </>
}

export default CaseStudyIndex

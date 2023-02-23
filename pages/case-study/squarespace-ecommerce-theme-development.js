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
      <title>{t('title_09')} | Case Study</title>
      <meta property='og:title' content={t('title_09')} />
      <meta name='twitter:title' content={t('title_09')} />
      <meta name="description" content={t('description_09')} key="description"/>
      <meta property='og:description' content={t('description_09')} />
      <meta name='twitter:description' content={t('description_09')} />
      <meta property='og:image' content='https://juliomontas.com/img/pendulum/pendulum_instagram.jpg' />
      <meta name='twitter:image' content='https://juliomontas.com/img/pendulum/pendulum_instagram.jpg' />
      <meta name='twitter:url' content='https://juliomontas.com/case-study/squarespace-ecommerce-theme-development' />
      <meta property='og:url' content='https://juliomontas.com/case-study/squarespace-ecommerce-theme-development' />
      <link rel="canonical" href="https://juliomontas.com/case-study/squarespace-ecommerce-theme-development" />
      <link rel="alternate" href="https://juliomontas.com/case-study/squarespace-ecommerce-theme-development" hreflang="en-us" />
      <link rel="alternate" href="https://juliomontas.com/es-us/case-study/squarespace-ecommerce-theme-development" hreflang="es-us" />
    </Head>
      <motion.div exit={{y: -300, opacity: 0 }} initial='initial' animate='animate'>
      <motion.div variants={stagger}>
      <div className={styles.mainIndex}>
          <div className={styles.mainCenterCont}>
            <div className={styles.gridContainer}>

            <motion.div variants={fadeInUp}>
            <div className={styles.flipSwitch}>
              <div>
                <h1>{t('title_09')}</h1>
                <p>{t('content_09')}</p>
              </div>
            </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
            <div className={styles.flipSwitch}>
              <h3>&#128466; {t('overview')}</h3>
              <p>{t('overviewContent_09')}</p>
            </div>
            </motion.div>

          <motion.div variants={fadeInUp}>
          <div className={styles.flipSwitch}>
            <h2>&#128640; {t('background')}</h2>
            <p>{t('backgroundContent_09')}</p>
          </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
          <PaletteList
            title={t('palette')}
            first="534488"
            second="9b8dc3"
            third="ed969e"
            fourth="C43737"
            last="fbc941"
          />
          </motion.div>

            <motion.div variants={fadeInUp}>
              <div className={styles.flipSwitch}>
                <h2>&#128736; {t('development')}</h2>
                <ul className={styles.secTextList}>
                  <li>Product Listing Pages (PLPs)</li>
                  <li>Product Detail Page (PDP)</li>
                  <li>Checkout</li>
                  <li>e-Mails Templates</li>
                </ul>
              </div>
            </motion.div>

          <motion.div variants={fadeInUp}>
          <div className={styles.flipSwitch}>
            <h2>Official Website</h2>
            <ul className={styles.secTextList}>
              <RelatedCTA
                url="https://www.eresyou.com/store"
                title="eresyou.com/store"
                content="https://www.eresyou.com/store"
              />
            </ul>
          </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
          <div>
            <div className={styles.flipSwitch}>
              <h2>&#128065; {t('productListingPages_02')}</h2>
              <div>
                <p className={styles.textAbove}>Text</p>
              </div>
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
              src="/img/case-study/shop-product-listing-pages.png"
              alt="Mockup Fragrance Finder A1"
              width={1920}
              height={2607}
              quality={100}
              layout="responsive"
              loading="lazy"
              />
              <small>Text </small>
            </SwiperSlide>
          </Swiper>
          </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
          <div>
            <div className={styles.flipSwitch}>
              <h2>&#128065; {t('productDetailPage_02')}</h2>
              <p>{t('productDetailPageContent_02')}</p>
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
              src="/img/case-study/eres-product-detail-page.png"
              alt="Mockup PDP B1 with post review"
              width={1920}
              height={3978}
              quality={100}
              layout="responsive"
              loading="lazy"
              />
              <small>Text</small>
            </SwiperSlide>
            </Swiper>
          </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
          <div>
            <div className={styles.flipSwitch}>
              <h2>&#128065; Checkout</h2>
              <p>{t('productDetailPageContent_02')}</p>
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
              src="/img/case-study/eres-checkout.png"
              alt="Mockup PDP B1 with post review"
              width={1905}
              height={1096}
              quality={100}
              layout="responsive"
              loading="lazy"
              />
              <small> v</small>
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
  </div>
  </>
}

export default CaseStudyIndex

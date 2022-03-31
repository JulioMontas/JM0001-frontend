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
  <NavBar />
  <Container>
    <Head>
      <title>Adorama - eCommerce | Case Study</title>
      <meta name='twitter:url' content='https://juliomontas.com/case-study/adorama-ecommerce/' />
      <meta property='og:url' content='https://juliomontas.com/case-study/adorama-ecommerce/' />
      <meta property='og:image' content='https://juliomontas.com/img/pendulum/pendulum_instagram.jpg' />
      <meta name='twitter:image' content='https://juliomontas.com/img/pendulum/pendulum_instagram.jpg' />
      <meta property='og:title' content='Adorama - eCommerce' />
      <meta name='twitter:title' content='Adorama - eCommerce' />
      <meta name="description" content="Adorama - eCommerce" key="description"/>
      <meta property='og:description' content='Adorama - eCommerce' />
      <meta name='twitter:description' content='Adorama - eCommerce' />
      <link rel="canonical" href="https://juliomontas.com/case-study/adorama-ecommerce/" />
      <link rel="alternate" href="https://juliomontas.com/case-study/adorama-ecommerce/" hreflang="en-us" />
      <link rel="alternate" href="https://juliomontas.com/es-us/case-study/adorama-ecommerce/" hreflang="es-us" />
    </Head>
      <motion.div exit={{y: -300, opacity: 0 }} initial='initial' animate='animate'>
      <motion.div variants={stagger}>
      <div className={styles.mainIndex}>
          <div className={styles.mainCenterCont}>
            <div className={styles.gridContainer}>

            <motion.div variants={fadeInUp}>
            <div className={styles.flipSwitch}>
              <div>
                <h1>{t('title_00')}</h1>
                <p>{t('content_00')}</p>
              </div>
            </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
            <div className={styles.flipSwitch}>
              <h3>&#128466; {t('overview')}</h3>
              <p>{t('overviewContent_00')}</p>
            </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
            <div>
              <Image
                src="/img/case-study/Inventory_management.jpg"
                alt="Inventory management"
                width={1917}
                height={1056}
                quality={80}
                layout="responsive"
                loading="lazy"
              />
            </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
            <div className={styles.flipSwitch}>
                <h3>&#128466; Products</h3>
                <ul className={styles.secTextList}>
                  <li><b>Adorama.com</b> {t('productList_00_a')}</li>
                  <li><b>SunnySports.com</b> {t('productList_00_b')}</li>
                  <li><b>AdoramaRentals.com</b> {t('productList_00_c')}</li>
                  <li><b>LeisurePro.com</b> {t('productList_00_d')}</li>
                </ul>
            </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
            <div className={styles.flipSwitch}>
              <h3>&#128640; Background</h3>
              <p>{t('backgroundContent_00')}</p>
            </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
            <div className={styles.dosFotos}>
              <h3>Brand promotional educational microsite</h3>
             <section>
               <Image
                 src="/img/case-study/raw_mobile.jpg"
                 alt="Mobile view of raw mockup"
                 width={320}
                 height={3003}
                 quality={100}
                 layout="responsive"
                 loading="lazy"
                />
              </section>
              <section>
                <Image
                  src="/img/case-study/raw_desktop.jpg"
                  alt="Desktop view of raw mockup"
                  width={1870}
                  height={3871}
                  quality={100}
                  layout="responsive"
                  loading="lazy"
                 />
              </section>
            </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
            <div className={styles.flipSwitch}>
              <h3>&#128640; Responsibility</h3>
              <p>
                <ul className={styles.secTextList}>
                  <li>{t('backgroundContent_00_a')}</li>
                  <li>{t('customerSatisfaction_00_a')}</li>
                  <li>{t('customerSatisfaction_00_b')}</li>
                  <li>{t('customerSatisfaction_00_c')}</li>
                  <li>{t('customerSatisfaction_00_d')}</li>
                  <li>{t('customerSatisfaction_00_e')}</li>
                  <li>{t('customerSatisfaction_00_f')}</li>
                  <li>{t('customerSatisfaction_00_g')}</li>
                  <li>{t('backgroundContent_00_b')}</li>
                </ul>
              </p>
            </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
            <div>
                <Image
                  src="/img/case-study/flow.png"
                  alt="flowchart"
                  width={1600}
                  height={1360}
                  quality={100}
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

export default CaseStudyIndex

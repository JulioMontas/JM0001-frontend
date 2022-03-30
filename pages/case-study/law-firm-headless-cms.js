import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Container from '../../components/Container'
import ExitButton from '../../components/ExitButton'
import PaletteList from '../../components/PaletteList'
import RelatedCTA from '../../components/RelatedCTA'
import NavBar from '../../components/NavBar'
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
      <title>{t('title_04')}</title>
      <meta name='twitter:url' content='https://juliomontas.com/case-study/law-firm-headless-cms/' />
      <meta property='og:url' content='https://juliomontas.com/case-study/law-firm-headless-cms/' />
      <meta property='og:image' content='https://juliomontas.com/img/ecommerce/mockupFragrance_A01.jpg' />
      <meta name='twitter:image' content='https://juliomontas.com/img/ecommerce/mockupFragrance_A01.jpg' />
      <meta property='og:title' content='Law Firm Headless CMS' />
      <meta name='twitter:title' content='Law Firm Headless CMS' />
      <meta name="description" content="Redesign website to improve user experience, site navigation, follow best practices of SEO and integrate a headless CMS" key="description"/>
      <meta property='og:description' content='Redesign website to improve user experience, site navigation, follow best practices of SEO and integrate a headless CMS' />
      <meta name='twitter:description' content='Redesign website to improve user experience, site navigation, follow best practices of SEO and integrate a headless CMS' />
      <link rel="canonical" href="https://juliomontas.com/case-study/law-firm-headless-cms/" />
      <link rel="alternate" href="https://juliomontas.com/case-study/law-firm-headless-cms/" hreflang="en-us" />
      <link rel="alternate" href="https://juliomontas.com/es-us/case-study/law-firm-headless-cms/" hreflang="es-us" />
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
            <h2>&#128466; {t('overview')}</h2>
            <p>{t('overviewContent_04')}</p>
          </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
          <div>
            <h2>&#128444; {t('moodboard_03')}</h2>
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
            <h2>&#128640; {t('background')}</h2>
            <p>{t('backgroundContent_04')}</p>
          </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
          <div className={styles.flipSwitch}>
            <h2>&#9997; Oswald By Vernon Adams, Kalapi Gajjar, Cyreal</h2>
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
            <h2>&#127853; {t('gradient')}</h2>
            <div className={styles.secColorGradient}>
              <span style={{backgroundImage:'linear-gradient(#3d586b,rgba(29,56,81,.6))'}}></span>
            </div>
          </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
          <div className={styles.flipSwitch}>
            <h2>&#128736; {t('development')}</h2>
            <ul className={styles.secTextList}>
              <li>Design and prototype using Figma</li>
              <li>Front-end development using Gatsby.js a React framework</li>
              <li>Back-end CMS using DatoCMS with GraphQL for query data</li>
              <li>Code watch in Gatbsy Cloud and Netlify</li>
              <li>Code save in Github</li>
            </ul>
          </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
          <div className={styles.SecBackground}>
            <h2>&#128736; {t('sitemap')}</h2>
          </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
          <div>
            <h2>&#128248; Landing page UI design</h2>
            <Image
              src="/img/case-study/BTG_Desktop_Homepage.jpg"
              alt="In the night at the beach"
              width={1512}
              height={5148}
              quality={75}
              layout="responsive"
              loading="lazy"
            />
          </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
          <div>
            <h2>&#128065; Attorney and Practice Areas UI Design</h2>
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
                src="/img/case-study/btg_desktop_attorney_page.jpg"
                alt="Mockups design 2"
                width={1512}
                height={2661}
                quality={20}
                layout="responsive"
                loading="lazy"
                />
          </SwiperSlide>
          <SwiperSlide>
                <Image
                src="/img/case-study/btg_desktop_practiceAreas_article.jpg"
                alt="Mockups design 3"
                width={1512}
                height={2038}
                quality={20}
                layout="responsive"
                loading="lazy"
                />
          </SwiperSlide>
          </Swiper>
          </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
          <div className={styles.flipSwitch}>
            <h2>Demo</h2>
            <ul>
              <RelatedCTA
                url="https://btg-site.netlify.app/"
                title="btg-site.netlify.app"
                content="Demo Website"
              />
            </ul>
          </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
          <div className={styles.flipSwitch}>
            <h2>More Case Study</h2>
            <ul>
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

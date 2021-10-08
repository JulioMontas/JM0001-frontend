import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import ReactPlayer from "react-player"
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../../../components/Layout'
import ExitButton from '../../../components/ExitButton'
import RelatedCTA from '../../../components/RelatedCTA'
import styles from '../../../styles/Report.module.css'

function CaseStudyIndex() {
  const { t } = useTranslation('caseStudy')
  return <Layout>
    <Head>
      <title>Adorama - eCommerce | Julio Montás</title>
      <meta name='twitter:url' content='https://juliomontas.com/case-study/0/' />
      <meta property='og:url' content='https://juliomontas.com/case-study/0/' />
      <meta property='og:image' content='https://juliomontas.com/img/pendulum/pendulum_instagram.jpg' />
      <meta name='twitter:image' content='https://juliomontas.com/img/pendulum/pendulum_instagram.jpg' />
      <meta property='og:title' content='Adorama - eCommerce | Julio Montás' />
      <meta name='twitter:title' content='Adorama - eCommerce | Julio Montás' />
      <meta name="description" content="Adorama - eCommerce" key="description"/>
      <meta property='og:description' content='Adorama - eCommerce' />
      <meta name='twitter:description' content='Adorama - eCommerce' />
      <link rel="canonical" href="https://juliomontas.com/case-study/0/" />
      <link rel="alternate" href="https://juliomontas.com/case-study/0/" hreflang="en-us" />
      <link rel="alternate" href="https://juliomontas.com/es-us/case-study/0/" hreflang="es-us" />
    </Head>
      <motion.div
      initial={{ y: 600, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -600, opacity: 0 }}>
        <div className={styles.mainIndex}>
          <div className={styles.mainCenterCont}>
            <div className={styles.gridContainer}>

            <div className={styles.flipSwitch}>
              <h2>Adorama - eCommerce</h2>
              <ExitButton url="/case-study" />
            </div>

            <div className={styles.flipSwitch}>
              <h3>&#128466; {t('overview')}</h3>
              <p>{t('overviewContent_00')}</p>
            </div>

            <div>
                <Image
                  src="/img/case-study/00/Inventory_management.jpg"
                  alt="Inventory management"
                  width={1917}
                  height={1056}
                  quality={100}
                  layout="responsive"
                  loading="lazy"
                />
            </div>

            <div className={styles.flipSwitch}>
              <h3>&#128640; Background</h3>
              <p>{t('backgroundContent_00')}
                <ul className={styles.secTextList}>
                  <li>{t('backgroundContent_00_a')}</li>
                  <li>{t('backgroundContent_00_b')}</li>
                </ul>
              </p>
            </div>

            <div className={styles.dosFotos}>
              <h3>Brand promotional educational microsite</h3>
             <section>
               <Image
                 src="/img/case-study/00/raw_mobile.jpg"
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
                  src="/img/case-study/00/raw_desktop.jpg"
                  alt="Desktop view of raw mockup"
                  width={1870}
                  height={3871}
                  quality={100}
                  layout="responsive"
                  loading="lazy"
                 />
              </section>
            </div>

            <div className={styles.flipSwitch}>
              <h3>&#128640; Customer Satisfaction</h3>
              <p>{t('customerSatisfaction_00')}
                <ul className={styles.secTextList}>
                  <li>{t('customerSatisfaction_00_a')}</li>
                  <li>{t('customerSatisfaction_00_b')}</li>
                  <li>{t('customerSatisfaction_00_c')}</li>
                  <li>{t('customerSatisfaction_00_d')}</li>
                  <li>{t('customerSatisfaction_00_e')}</li>
                  <li>{t('customerSatisfaction_00_f')}</li>
                  <li>{t('customerSatisfaction_00_g')}</li>
                </ul>
              </p>
            </div>

            <div className={styles.blurtImages}>
                <Image
                  src="/img/case-study/00/flow.png"
                  alt="flowchart"
                  width={1600}
                  height={1360}
                  quality={100}
                  layout="responsive"
                  loading="lazy"
                 />
            </div>

            <div className={styles.flipSwitch}>
                <h3>&#128466; Products</h3>
                <ul className={styles.secTextList}>
                  <li><b>Adorama.com</b> {t('productList_00_a')}</li>
                  <li><b>SunnySports.com</b> {t('productList_00_b')}</li>
                  <li><b>AdoramaRentals.com</b> {t('productList_00_c')}</li>
                  <li><b>LeisurePro.com</b> {t('productList_00_d')}</li>
                </ul>
            </div>

            <div className={styles.flipSwitch}>
                <h3>More Case Study</h3>
                <ul>
                  <RelatedCTA
                    url="/case-study/1"
                    title={t('title_01')}
                    content={t('content_01')}
                  />
                  <RelatedCTA
                    url="/case-study/2"
                    title={t('title_02')}
                    content={t('content_02')}
                  />
                  <RelatedCTA
                    url="/case-study/3"
                    title={t('title_03')}
                    content={t('content_03')}
                  />
                </ul>
            </div>


          </div>
          </div>
        </div>
      </motion.div>
  </Layout>
}

export default CaseStudyIndex

import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import ReactPlayer from "react-player"
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../../../components/Layout/Layout'
import styles from '../../../styles/Report.module.css'

function CaseStudyIndex() {
  const { t } = useTranslation('caseStudy')
  return <Layout>
    <Head>
      <title>Retail Store | Julio Montás</title>
      <meta name='twitter:url' content='https://juliomontas.com/case-study/0/' />
      <meta property='og:url' content='https://juliomontas.com/case-study/0/' />
      <meta property='og:image' content='https://juliomontas.com/img/pendulum/pendulum_instagram.jpg' />
      <meta name='twitter:image' content='https://juliomontas.com/img/pendulum/pendulum_instagram.jpg' />
      <meta property='og:title' content='Retail Store | Julio Montás' />
      <meta name='twitter:title' content='Retail Store | Julio Montás' />
      <meta name="description" content="Retail Store" key="description"/>
      <meta property='og:description' content='Retail Store' />
      <meta name='twitter:description' content='Retail Store' />
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

            <div className={styles.flipSwitch}>
              <h2>Adorama - eCommerce</h2>
              <div className={styles.secExit}>
                <Link href="/case-study">
                  <a alt="Page Exit">
                    <span>Close</span>
                  </a>
                </Link>
              </div>
            </div>

            <div className={styles.flipSwitch}>
              <h3>&#128466; {t('overview')}</h3>
              <p>A private American consumer electronics retailer launched in 1975. They offer new and used camera equipment, photography classes, lenses, audio, video, drones, computers and musical instruments in a large multi-floor Chelsea store, located in New York City.</p>
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
            <h3>&#128466; Products</h3>
              <ul className={styles.secTextList}>
                <li><b>Adorama.com</b> Cameras, lenses, audio, video, drones, and Instruments</li>
                <li><b>SunnySports.com</b> Camping, hiking, climbing, cycling, and outdoor equipment</li>
                <li><b>AdoramaRentals.com</b> Rent digital cinema cameras, lenses, grips, lighting, photography, and video gear</li>
                <li><b>LeisurePro.com</b> Scuba diving, snorkeling, and underwater gear</li>
              </ul>
            </div>

            <div className={styles.flipSwitch}>
              <h3>&#128640; Background</h3>
              <p>Working alongside multidisciplinary teams of designers, developers (overseas and internal), marketers and product managers throughout the design process.
                <ul className={styles.secTextList}>
                  <li>Designs solutions with Sketch (UI), Balsamiq (Wireframe) and InVision (Prototype).</li>
                  <li>Turn design to HTML/CSS experience cross-device responsiveness front-end.</li>
                  <li>Senior user experience (UX) designer in agile for a team of 4 designers that frequently collaborated.</li>
                    <li>Utilized user feedback tools such as Google Analytics and Hotjar to make small site accessibility changes that improved the flow of the website and reduced cart abandonment.</li>
                </ul>
              </p>
            </div>

            <div>
              <Image
                src="/img/case-study/00/flow.png"
                alt="Picture of the author"
                width={1600}
                height={1360}
                quality={100}
                layout="responsive"
                loading="lazy"
               />
            </div>

          </div>
        </div>
      </motion.div>
  </Layout>
}

export default CaseStudyIndex

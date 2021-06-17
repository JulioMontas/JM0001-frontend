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
              <h2>Retail Store</h2>
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
              <p>eCommerce for photography equipment, digital cameras, lenses, pro audio & video, professional gear & musical instruments from top brands.</p>
            </div>

            <div>
              <h3>&#128248; Exploration:</h3>
                <Image
                  src="/img/ad/defective.png"
                  alt="Picture of the author"
                  width={1600}
                  height={1360}
                  quality={100}
                  layout="responsive"
                  loading="lazy"
                />
            </div>


            <div className={styles.flipSwitch}>
              <h3>&#128640; Background</h3>
              <p>Text Text</p>
            </div>

            <div>
              <h3>&#128248; Exploration:</h3>
              <Swiper
              speed={400}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
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
                  src="/img/ad/raw_desktop.jpg"
                  alt="Picture of the author"
                  width={1870}
                  height={3871}
                  quality={100}
                  layout="responsive"
                  loading="lazy"
                 />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/img/ad/raw_mobile.jpg"
                  alt="Picture of the author"
                  width={320}
                  height={3003}
                  quality={100}
                  layout="responsive"
                  loading="lazy"
                 />
              </SwiperSlide>
            </Swiper>
            </div>


            <div className={styles.flipSwitch}>
              <h3>&#128736; {t('development')}</h3>
              <div>
                <p>Text</p>
                <ul className={styles.secTextList}>
                  <li>Start of returns for Damage/Defective Items</li>
                  <li>Damaged/Defective replacement right away</li>
                  <li>Non-Defective return reasons</li>
                  <li>Damaged/Defective replacement upon receipt</li>
                  <li>Single payment instrument refund customer self-shipping option</li>
                  <li>Replacement and Refund combination case, store label, single payment instrument, right away options</li>
                  <li>Return of used Item or special order</li>
                  <li>Return of oversize Item</li>
                  <li>Refund Item paid with a gift card</li>
                  <li>Damaged/Defective Item kits with a gift card sub-item</li>
                  <li>Return of Damaged/Defective Item kits different scenario</li>
                  <li>Return oversize Item from kit</li>
                  <li>Damaged/Defective discontinued Item</li>
                  <li>Single/Multiple payment checkout</li>
                  <li>Checkout & receipt variants</li>
                  <li>Checkout payment page</li>
                </ul>
              </div>
            </div>


          </div>
        </div>
      </motion.div>
  </Layout>
}

export default CaseStudyIndex

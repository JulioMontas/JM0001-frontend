import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../../../components/Layout/Layout'
import ExitButton from '../../../components/ExitButton/ExitButton'
import RelatedCTA from '../../../components/RelatedCTA/RelatedCTA'
import styles from '../../../styles/Report.module.css'

function ProjectIndex() {
    const { t } = useTranslation('sideProject')
  return <Layout>
      <Head>
          <title>Side Project | {t('title_01')} | Julio Montás</title>
          <meta name='twitter:url' content='https://juliomontas.com/side-project/hellocode/' />
          <meta property='og:url' content='https://juliomontas.com/side-project/hellocode/' />
          <meta property='og:image' content='https://juliomontas.com/img/side-project/hc/hc01.gif' />
          <meta name='twitter:image' content='https://juliomontas.com/img/side-project/hc/hc01.gif' />
          <meta property='og:title' content='Helloco.de The Home For Programming Languages | Julio Montás' />
          <meta name='twitter:title' content='Helloco.de The Home For Programming Languages | Julio Montás' />
          <meta name="description" content="List of programming languages that have been developed from 1950–1979, 1980–1999, and 2000 to the present" key="description"/>
          <meta property='og:description' content='List of programming languages that have been developed from 1950–1979, 1980–1999, and 2000 to the present' />
          <meta name='twitter:description' content='List of programming languages that have been developed from 1950–1979, 1980–1999, and 2000 to the present' />
          <link rel="canonical" href="https://juliomontas.com/side-project/hellocode/" />
          <link rel="alternate" href="https://juliomontas.com/side-project/hellocode/" hreflang="en-us" />
          <link rel="alternate" href="https://juliomontas.com/es-us/side-project/hellocode/" hreflang="es-us" />
      </Head>
    <motion.div
    initial={{ y: 600, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -600, opacity: 0 }}>
        <div className={styles.mainIndex}>
            <div className={styles.mainCenterCont}>
                <div className={styles.flipSwitch}>
                    <div>
                        <h2>{t('title_01')}</h2>
                        <p>{t('content_01')}</p>
                    </div>
                    <ExitButton url="/side-project" />
                </div>
                <div className={styles.flipSwitch}>
                    <h3>Concept</h3>
                    <p>{t('conceptContent_01')}</p>
                </div>
                <div>
                    <h3>UI Design</h3>
                    <Image
                    src="/img/side-project/hc/CABulM1UwAAPf4a.png"
                    alt="Mockup of python page"
                    width={1421}
                    height={1897}
                    quality={75}
                    layout="responsive"
                    loading="eager"
                    />
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
                            quality={20}
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
                            quality={50}
                            layout="responsive"
                            loading="lazy"
                            />
                            <p className={styles.textUnderImg}>{t('uiDesignContent_01c')}</p>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className={styles.flipSwitch}>
                    <h3>URL</h3>
                    <div>
                        <ul className={styles.secTextList}>
                            <li><a href="https://bfacd.parsons.edu/2013/helloco-de" target="_blank">The New School BFA Thesis 2013</a></li>
                            <li><a href="https://twitter.com/msdev/status/485951332105195520" target="_blank">Microsoft Developer Tweet</a></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.flipSwitch}>
                  <h3>More Projects</h3>
                  <ul>
                    <RelatedCTA
                      url="/side-project/surveillance"
                      title={t('title_02')}
                      content={t('content_02')}
                    />
                    <RelatedCTA
                      url="/side-project/width"
                      title={t('title_03')}
                      content={t('content_03')}
                    />
                    <RelatedCTA
                      url="/side-project/colors"
                      title={t('title_05')}
                      content={t('content_05')}
                    />
                  </ul>
                </div>
            </div>
        </div>
    </motion.div>
  </Layout>
}

export async function getServerSideProps(context) {
    return {
        props: {},
    }
}

export default ProjectIndex

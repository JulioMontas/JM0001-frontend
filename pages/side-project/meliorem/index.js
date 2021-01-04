import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'

import Layout from '../../../components/Layout/Layout'
import styles from '../../../styles/Report.module.css'

function ProjectIndex() {
    const { t } = useTranslation('sideProject')
  return <Layout>
      <Head>
          <title>Side Project | {t('title_04')} | Llegó Julio</title>
          <meta name='twitter:url' content='https://llegojulio.com/side-project/meliorem' />
          <meta property='og:url' content='https://llegojulio.com/side-project/meliorem' />

          <meta property='og:image' content='https://llegojulio.com/img/side-project/meliorem/meliorem-02.png' />
          <meta name='twitter:image' content='https://llegojulio.com/img/side-project/meliorem/meliorem-02.png' />

          <meta property='og:title' content='Meliorem - Cultivating Your Passion to Level Up | Llegó Julio' />
          <meta name='twitter:title' content='Meliorem - Cultivating Your Passion to Level Up | Llegó Julio' />

          <meta name="description" content="Reward self task manager to stimulate your existence" key="description"/>
          <meta property='og:description' content='Reward self task manager to stimulate your existence' />
          <meta name='twitter:description' content='Reward self task manager to stimulate your existence' />

          <link rel="canonical" href="https://llegojulio.com/side-project/meliorem" />
          <link rel="alternate" href="https://llegojulio.com/side-project/meliorem" hreflang="en" />
          <link rel="alternate" href="https://llegojulio.com/es/side-project/meliorem" hreflang="es" />
      </Head>
    <motion.div 
    initial={{ y: 600, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -600, opacity: 0 }}>
        <div className={styles.mainIndex}>
            <div className={styles.mainCenterCont}>
                <div className={styles.flipSwitch}>
                    <div>
                        <h2>{t('title_04')}</h2>
                        <p>{t('content_04')}</p>
                    </div>
                    <div className={styles.secExit}>
                        <Link href="/side-project">
                            <a alt="Page Exit" rel="alternate" hreflang="en">
                                <span>Close page</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={styles.flipSwitch}>
                    <h3>Concept</h3>
                    <p>{t('conceptContent_04')}</p>
                </div>
                <div>
                    <h3>UI Design</h3>
                    <Image
                    src="/img/side-project/meliorem/projectManagementTracker-Mockup00A.jpg"
                    alt="Mockup of python page"
                    width={1440}
                    height={1267}
                    quality={50}
                    layout="responsive"
                    loading="eager"
                    />
                    <p>{t('uiDesignContent_04a')}</p>
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
                            spaceBetween: 10,
                            width: 700
                        }
                    }}
                    >
                        <SwiperSlide>
                            <Image
                            src="/img/side-project/meliorem/meliorem-01.png"
                            alt="Mockup of python page"
                            width={1080}
                            height={1080}
                            quality={20}
                            layout="responsive"
                            loading="lazy"
                            />
                            <p>{t('uiDesignContent_04b')}</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                            src="/img/side-project/meliorem/meliorem-02.png"
                            alt="Mockup of python page"
                            width={1080}
                            height={1080}
                            quality={50}
                            layout="responsive"
                            loading="lazy"
                            />
                             <p>{t('uiDesignContent_04c')}</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                            src="/img/side-project/meliorem/meliorem-03.png"
                            alt="Mockup of python page"
                            width={1080}
                            height={1080}
                            quality={50}
                            layout="responsive"
                            loading="lazy"
                            />
                             <p>{t('uiDesignContent_04d')}</p>
                        </SwiperSlide>
                    </Swiper>
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
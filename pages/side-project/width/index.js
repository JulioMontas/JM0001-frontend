import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'

import Layout from '../../../components/Layout/Layout'
import styles from '../../../styles/Report.module.css'

function ProjectIndex() {
    const { t } = useTranslation('sideProject')
  return <Layout>
      <Head>
          <title>Side Project | {t('title_03')} | Llegó Julio</title>
          <meta name='twitter:url' content='https://llegojulio.com/side-project/width' />
          <meta property='og:url' content='https://llegojulio.com/side-project/width' />

          <meta property='og:image' content='https://llegojulio.com/img/side-project/width/width_BothPlayer_1080.gif' />
          <meta name='twitter:image' content='https://llegojulio.com/img/side-project/width/width_BothPlayer_1080.gif' />

          <meta property='og:title' content='Width Take Over the Screen | Llegó Julio' />
          <meta name='twitter:title' content='Width Take Over the Screen | Llegó Julio' />

          <meta name="description" content="A two-player game in which you must defeat your opponents by clicking to take over the screen" key="description"/>
          <meta property='og:description' content='A two-player game in which you must defeat your opponents by clicking to take over the screen' />
          <meta name='twitter:description' content='A two-player game in which you must defeat your opponents by clicking to take over the screen' />

          <link rel="canonical" href="https://llegojulio.com/side-project/width" />
          <link rel="alternate" href="https://llegojulio.com/side-project/width" hreflang="en" />
          <link rel="alternate" href="https://llegojulio.com/es/side-project/width" hreflang="es" />
      </Head>
    <motion.div 
    initial={{ y: 600, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -600, opacity: 0 }}>
        <div className={styles.mainIndex}>
            <div className={styles.mainCenterCont}>
                <div className={styles.flipSwitch}>
                    <div>
                        <h2>{t('title_03')}</h2>
                        <p>{t('content_03')}</p>
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
                    <p>{t('conceptContent_03')}</p>
                </div>
                <div>
                    <h3>UI Design</h3>          
                    <Image
                    src="/img/side-project/width/width_Sketch_Iphone.png"
                    alt="Mockup of python page"
                    width={1280}
                    height={735}
                    quality={70}
                    layout="responsive"
                    loading="eager"
                    />
                    <p>{t('uiDesignContent_03a')}</p>
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
                            width: 800
                        }
                    }}
                    >
                        <SwiperSlide>
                            <Image
                            src="/img/side-project/width/width_Wireframe_levelOne.png"
                            alt="Wireframe level one design"
                            width={1280}
                            height={800}
                            quality={20}
                            layout="responsive"
                            loading="lazy"
                            />
                            <p>{t('uiDesignContent_03b')}</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                            src="/img/side-project/width/width_Wireframe_levelThree.png"
                            alt="Wireframe level three design"
                            width={1280}
                            height={800}
                            quality={20}
                            layout="responsive"
                            loading="lazy"
                            />
                            <p>{t('uiDesignContent_03c')}</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                            src="/img/side-project/width/width_Wireframe_levelSix.png"
                            alt="Wireframe level six design"
                            width={1280}
                            height={800}
                            quality={20}
                            layout="responsive"
                            loading="lazy"
                            />
                            <p>{t('uiDesignContent_03d')}</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                            src="/img/side-project/width/width_Wireframe_levelTwelve.png"
                            alt="Wireframe level twelve design"
                            width={1280}
                            height={800}
                            quality={20}
                            layout="responsive"
                            loading="lazy"
                            />
                            <p>{t('uiDesignContent_03e')}</p>
                        </SwiperSlide>
                    </Swiper>
                    <Image
                    src="/img/side-project/width/width_Landing_Page.png"
                    alt="Main page for width"
                    width={1080}
                    height={629}
                    quality={70}
                    layout="responsive"
                    loading="lazy"
                    />
                    <p>{t('uiDesignContent_03f')}</p>
                </div>
                <div className={styles.flipSwitch}>
                    <h3>URL</h3>
                    <a href="https://width.herokuapp.com" target="_blank">Prototype Demo</a>
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
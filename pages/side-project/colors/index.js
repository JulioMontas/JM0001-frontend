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
            <title>Side Project | {t('title_05')} | Llegó Julio</title>          
            <meta name='twitter:url' content='https://llegojulio.com/side-project/colors' />
            <meta property='og:url' content='https://llegojulio.com/side-project/colors' />

            <meta property='og:image' content='https://llegojulio.com/img/side-project/colors/slide_03.png' />
            <meta name='twitter:image' content='https://llegojulio.com/img/side-project/colors/slide_03.png' />

            <meta property='og:title' content='Basic Color Fundamentals - Simple Fun App for Toddlers | Llegó Julio' />
            <meta name='twitter:title' content='Basic Color Fundamentals - Simple Fun App for Toddlers | Llegó Julio' />

            <meta name="description" content="Figure out a device for toddler to learn the basic of colors pronunciation and visual recognition memory" key="description"/>
            <meta property='og:description' content='Figure out a device for toddler to learn the basic of colors pronunciation and visual recognition memory' />
            <meta name='twitter:description' content='Figure out a device for toddler to learn the basic of colors pronunciation and visual recognition memory' />

            <link rel="canonical" href="https://llegojulio.com/en-us/side-project/colors/" />
            <link rel="alternate" href="https://llegojulio.com/en-us/side-project/colors/" hreflang="en-us" />
            <link rel="alternate" href="https://llegojulio.com/es-us/side-project/colors/" hreflang="es-us" />
        </Head>
    <motion.div 
    initial={{ y: 600, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -600, opacity: 0 }}>
        <div className={styles.mainIndex}>
            <div className={styles.mainCenterCont}>
                <div className={styles.flipSwitch}>
                    <div>
                        <h2>{t('title_05')}</h2>
                        <p>{t('content_05')}</p>
                    </div>
                    <div className={styles.secExit}>
                        <Link href="/side-project">
                            <a alt="Page Exit">
                                <span>Close page</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={styles.flipSwitch}>
                    <h3>{t('concept_05')}</h3>
                    <p>{t('conceptContent_05')}</p>
                </div>
                <div>
                    <h3>{t('uiDesign_05')}</h3>
                    <Image
                    src="/img/side-project/colors/slide_03.png"
                    alt="Choose a color to learn"
                    width={1080}
                    height={1080}
                    quality={20}
                    layout="responsive"
                    loading="eager"
                    />
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
                            width: 950
                        }
                    }}
                    >
                        <SwiperSlide>
                            <Image
                            src="/img/side-project/colors/slide_04.png"
                            alt="Mockup design of the green color"
                            width={1080}
                            height={1080}
                            quality={20}
                            layout="responsive"
                            loading="lazy"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                            src="/img/side-project/colors/slide_05.png"
                            alt="Mockup design of the blue color"
                            width={1080}
                            height={1080}
                            quality={20}
                            layout="responsive"
                            loading="lazy"
                            />
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
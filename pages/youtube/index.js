import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import Head from 'next/head'

import Layout from '../../components/Layout/Layout'
import styles from '../../styles/Youtube.module.css'

function Youtube({ posts }) {
  return <Layout>
    <Head>
      <title>Youtube (Coming Soon) | UI Developer • Interaction Designer | Llegó Julio</title>
      <meta name='twitter:url' content='https://llegojulio.com/youtube/' />
      <meta property='og:url' content='https://llegojulio.com/youtube/' />
      
      <meta property='og:image' content='https://llegojulio.com/me.png' />
      <meta name='twitter:image' content='https://llegojulio.com/me.png' />

      <meta property='og:title' content='Youtube | UI Developer • Interaction Designer | Llegó Julio' />
      <meta name='twitter:title' content='Youtube | UI Developer • Interaction Designer | Llegó Julio' />

      <meta name="description" content="Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC." key="description"/>
      <meta property='og:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
      <meta name='twitter:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />

      <link rel="canonical" href="https://llegojulio.com/youtube/" />
      <link rel="alternate" href="https://llegojulio.com/youtube/" hrefLang="en-us" />
    </Head>
    <div className={styles.container}>
        <motion.div 
        initial={{ x: 600, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -600, opacity: 0 }}>
            <Swiper
            speed={400}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{ 
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    width: 300
                },
                1200: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    width: 300
                }
            }}
            >
                <div className={styles.container}>
                    <div className={styles.main}>
                        <SwiperSlide>
                            <div className={styles.articleList}>
                                <h2>Coming Soon - February 2021</h2>
                            </div>
                        </SwiperSlide>
                    </div>
                </div>
            </Swiper>
        </motion.div>
    </div>
  </Layout>
}

export default Youtube
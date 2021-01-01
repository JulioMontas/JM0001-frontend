import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import Head from 'next/head'

import Layout from '../../components/Layout/Layout'
import styles from '../../styles/Blog.module.css'

function CaseStudy({ posts }) {
  return <Layout>
    <Head>
      <title>Blog | UI Developer • Interaction Designer</title>
      <meta name='twitter:url' content='https://llegojulio.com/case-study/' />
      <meta property='og:url' content='https://llegojulio.com/case-study/' />
      
      <meta property='og:image' content='https://llegojulio.com/me.png' />
      <meta name='twitter:image' content='https://llegojulio.com/me.png' />

      <meta property='og:title' content='Blog | UI Developer • Interaction Designer' />
      <meta name='twitter:title' content='Blog | UI Developer • Interaction Designer' />

      <meta name="description" content="Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC." key="description"/>
      <meta property='og:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
      <meta name='twitter:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />

      <link rel="canonical" href="https://llegojulio.com/case-study/" />
      <link rel="alternate" href="https://llegojulio.com/case-study/" hrefLang="en-us" />
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
                <SwiperSlide>
                    <div className={styles.articleList}>
                        <h2>Coming Soon / Late Jan 2021</h2>
                    </div>
                </SwiperSlide>     
            </Swiper>
        </motion.div>
    </div>
  </Layout>
}

export default CaseStudy
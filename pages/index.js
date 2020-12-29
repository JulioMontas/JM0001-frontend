import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import Head from 'next/head'

import Layout from '../components/Layout/Layout'
import styles from '../styles/Home.module.css'

function HomePage() {
  return <Layout>
    <Head>
      <title>UI Developer • Interaction Designer</title>
      <meta name='twitter:url' content='https://llegojulio.com/' />
      <meta property='og:url' content='https://llegojulio.com/' />
      
      <meta property='og:image' content='https://llegojulio.com/me.png' />
      <meta name='twitter:image' content='https://llegojulio.com/me.png' />

      <meta property='og:title' content='UI Developer • Interaction Designer' />
      <meta name='twitter:title' content='UI Developer • Interaction Designer' />

      <meta name="description" content="Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC." key="description"/>
      <meta property='og:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
      <meta name='twitter:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />

      <link rel="canonical" href="https://llegojulio.com/" />
      <link rel="alternate" href="https://llegojulio.com/" hrefLang="en-us" />
    </Head>
    <motion.div 
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -300, opacity: 0 }}>
    <div className={styles.main}>
      <Swiper
      speed={400}
      // pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{ 
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
          width: 310
        },
        1200: {
          slidesPerView: 1,
          spaceBetween: 10,
          width: 450
        }
      }}
    >
      <SwiperSlide>
        <div className={styles.sectionUno}>
          <div>
            <Image
              src="/me.png"
              alt="Picture of the author"
              width={200}
              height={200}
            />
            <h1>Designer <span>with</span> Coding Ability</h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div  className={styles.sectionDos}>
        <p>Interested in the evolution of technology in our daily lives and how it’s affecting our behavior. Currently working as a <b>UI/UX Designer</b> with some <b>Front-end Development</b> based in NYC, experience with startup, private companies and creative agency.<br/><br/> Alumnus from <b>Altos de Chavón</b>,<b>Parsons</b> / <b>The New School</b> and <b>General Assembly</b> coding bootcamp.<br/> <br/>  In my free time, I like to explore the other side of the internet and mixed minimal house / techno for others to relax and dance.</p>
      </div>
      </SwiperSlide>
    </Swiper>
    </div>
    </motion.div>
  </Layout>
}
export default HomePage
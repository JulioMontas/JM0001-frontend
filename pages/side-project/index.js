import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import Head from 'next/head'

import Layout from '../../components/Layout/Layout'
import styles from '../../styles/Project.module.css'

function Project({ posts }) {
  return <Layout>
    <Head>
      <title>Side Project - UI Developer • Interaction Designer | Llegó Julio</title>
      <meta name='twitter:url' content='https://llegojulio.com/side-project/' />
      <meta property='og:url' content='https://llegojulio.com/side-project/' />
      
      <meta property='og:image' content='https://llegojulio.com/me.png' />
      <meta name='twitter:image' content='https://llegojulio.com/me.png' />

      <meta property='og:title' content='Projects - UI Developer • Interaction Designer | Llegó Julio' />
      <meta name='twitter:title' content='Projects - UI Developer • Interaction Designer | Llegó Julio' />

      <meta name="description" content="Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC." key="description"/>
      <meta property='og:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
      <meta name='twitter:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />

      <link rel="canonical" href="https://llegojulio.com/side-project/" />
      <link rel="alternate" href="https://llegojulio.com/side-project/" hrefLang="en-us" />
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
              slidesPerView: 5,
              spaceBetween: 20,
              width: 1200
            }
          }}
         >
           <SwiperSlide>
             <div className={styles.main}>
               <Link href={`/side-project/hellocode`}>
                 <a>
                   <h3 className={styles.blgSummery}>Collective Memory, Education, 2012</h3>
                   <Image
                   src="/img/side-project/hc/hc02.gif"
                   alt="Picture of the author"
                   width={1422}
                   height={688}
                   />
                   <h2 className={styles.blgTitle}>Helloco.de - The Home For Programming Languages</h2>
                </a>
               </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.main}>
            <Link href={`/side-project/surveillance`}>
              <a>
              <h3 className={styles.blgSummery}>Deepfake, Data Collection, 2015</h3>
                <Image
                src="/img/side-project/surveillance/jessieNguyen-socialProof.jpg"
                alt="Picture of the author"
                width={640}
                height={640}
                quality={1}
                loading="eager"
                />
                <h2 className={styles.blgTitle}>Surveillance Culture - Modernity Identity and Security</h2>
              </a>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.main}>
              <Link href={`/side-project/width`}>
                <a>
                <h3 className={styles.blgSummery}>JavaScript Web Game, 2016</h3>
                  <Image
                  src="/img/side-project/width/width_Landing_Page.png"
                  alt="Picture of the author"
                  width={360}
                  height={210}
                  quality={25}
                  loading="eager"
                  />
                  <h2 className={styles.blgTitle}>Width - Take Over the Screen</h2>
                </a>
              </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.main}>
            <Link href={`/side-project/meliorem`}>
              <a>
              <h3 className={styles.blgSummery}>Productivity App, Dopamine Stimulator, 2016</h3>
                <Image
                src="/img/side-project/meliorem/meliorem-02.png"
                alt="Picture of the author"
                width={1080}
                height={1080}
                quality={15}
                loading="eager"
                />
                <h2 className={styles.blgTitle}>Meliorem - Cultivating Your Passion to Level Up</h2>
              </a>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.main}>
            <Link href={`/side-project/colors`}>
              <a>
              <h3 className={styles.blgSummery}>eLearning, New Memories, 2016</h3>
                <Image
                src="/img/colorView_01.jpg"
                alt="Picture of the author"
                width={200}
                height={200}
                quality={15}
                loading="eager"
                />
                <h2 className={styles.blgTitle}>Basic Color Fundamentals - Simple Fun App for Toddlers</h2>
              </a>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </motion.div>
    </div>
  </Layout>
}

export default Project
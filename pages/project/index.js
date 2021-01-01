import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import Head from 'next/head'

import Layout from '../../components/Layout/Layout'
import styles from '../../styles/Project.module.css'

function ProjectIndex() {
  return <Layout>
    <Head>
      <title>UI Developer • Interaction Designer</title>
      <meta name='twitter:url' content='https://llegojulio.com/project/' />
      <meta property='og:url' content='https://llegojulio.com/project/' />
      
      <meta property='og:image' content='https://llegojulio.com/me.png' />
      <meta name='twitter:image' content='https://llegojulio.com/me.png' />

      <meta property='og:title' content='UI Developer • Interaction Designer' />
      <meta name='twitter:title' content='UI Developer • Interaction Designer' />

      <meta name="description" content="Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC." key="description"/>
      <meta property='og:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
      <meta name='twitter:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />

      <link rel="canonical" href="https://llegojulio.com/project/" />
      <link rel="alternate" href="https://llegojulio.com/project/" hrefLang="en-us" />
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
               <Link href={`/project/hellocode`}>
                 <a>
                   <h3 className={styles.blgSummery}>Collective Memory, Education, 2012</h3>
                   <Image
                   src="/img/project/hc/hc02.gif"
                   alt="Picture of the author"
                   width={1422}
                   height={688}
                   />
                   <h2 className={styles.blgTitle}>Helloco.de the Home For Programming Languages</h2>
                </a>
               </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.main}>
            <Link href={`/project/surveillance`}>
              <a>
              <h3 className={styles.blgSummery}>Deepfake, Data Collection, 2015</h3>
                <Image
                src="/img/project/surveillance/jessieNguyen-socialProof.jpg"
                alt="Picture of the author"
                width={640}
                height={640}
                quality={1}
                loading="eager"
                />
                <h2 className={styles.blgTitle}>Surveillance Culture Modernity, Identity and Security</h2>
              </a>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.main}>
              <Link href={`/project/width`}>
                <a>
                <h3 className={styles.blgSummery}>JavaScript Web Game, 2016</h3>
                  <Image
                  src="/img/project/width/width_Landing_Page.png"
                  alt="Picture of the author"
                  width={360}
                  height={210}
                  quality={25}
                  loading="eager"
                  />
                  <h2 className={styles.blgTitle}>Taking Over the Full Width of any screen size</h2>
                </a>
              </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.main}>
            <Link href={`/project/meliorem`}>
              <a>
              <h3 className={styles.blgSummery}>Productivity App, Dopamine Stimulator, 2016</h3>
                <Image
                src="/img/project/meliorem/meliorem-02.png"
                alt="Picture of the author"
                width={1080}
                height={1080}
                quality={15}
                loading="eager"
                />
                <h2 className={styles.blgTitle}>Meliorem Cultivating Your Passion to Level Up</h2>
              </a>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.main}>
            <Link href={`/project/colors`}>
              <a>
              <h3 className={styles.blgSummery}>Teaching kids, Education, 2016</h3>
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

export default ProjectIndex
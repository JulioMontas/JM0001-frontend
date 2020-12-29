import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import Head from 'next/head'

import Layout from '../../components/Layout/Layout'
import styles from '../../styles/CaseStudy.module.css'

function CaseStudy({ posts }) {
  return <Layout>
    <Head>
      <title>Case Study | UI Developer • Interaction Designer</title>
      <meta name='twitter:url' content='https://llegojulio.com/case-study/' />
      <meta property='og:url' content='https://llegojulio.com/case-study/' />
      
      <meta property='og:image' content='https://llegojulio.com/img/ecommerce/mockupFragrance_A01.jpg' />
      <meta name='twitter:image' content='https://llegojulio.com/img/ecommerce/mockupFragrance_A01.jpg' />

      <meta property='og:title' content='Case Study | UI Developer • Interaction Designer' />
      <meta name='twitter:title' content='Case Study | UI Developer • Interaction Designer' />

      <meta name="description" content="Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC." key="description"/>
      <meta property='og:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
      <meta name='twitter:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />

      <link rel="canonical" href="https://llegojulio.com/case-study/" />
      <link rel="alternate" href="https://llegojulio.com/case-study/" hrefLang="en-us" />
    </Head>
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
          slidesPerView: 3,
          spaceBetween: 60,
          width: 1080
        }
      }}
    >
        <SwiperSlide>
        <div className={styles.main}>
            <Link href={`/case-study/1`}>
              <a>
              <div className={styles.cube}>
              <div className={styles.cara1}>
              <Image
                src="/img/Pendulum-3D-Box-Face-01.jpg"
                alt="Picture of the author"
                width={200}
                height={200}
                quality={1}
                loading="eager"
                />
              </div>
              <div className={styles.cara2}>
              <Image
                src="/img/Pendulum-3D-Box-Right-02.jpg"
                alt="Picture of the author"
                width={200}
                height={200}
                quality={1}
                loading="eager"
                />
              </div>
              <div className={styles.cara3}>
              <Image
                src="/img/Pendulum-3D-Box-Back-03.jpg"
                alt="Picture of the author"
                width={200}
                height={200}
                quality={1}
                loading="eager"
                />
              </div>
              <div className={styles.cara4}>
              <Image
                src="/img/Pendulum-3D-Box-Left-04.jpg"
                alt="Picture of the author"
                width={200}
                height={200}
                quality={1}
                loading="eager"
                />
              </div>
              <div className={styles.cara5}>
              <Image
                src="/img/Pendulum-3D-Box-Bottom-05.jpg"
                alt="Picture of the author"
                width={200}
                height={200}
                quality={1}
                loading="eager"
                />
              </div>
              <div className={styles.cara6}>
              <Image
                src="/img/Pendulum-3D-Box-Top-06.jpg"
                alt="Picture of the author"
                width={200}
                height={200}
                quality={1}
                loading="eager"
                />
              </div>
            </div>
                <h2 className={styles.title}>Vinyl Label Design Pendulum EP</h2>
                <h3 className={styles.description}>The second EP of ERRANT Recordings with a style of ambient and minimal tech house</h3>
              </a>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.main}>
            <Link href={`/case-study/2`}>
              <a>
              <div className={styles.cube}>
              <div className={styles.cara1}>
              <Image
                src="/img/ecommerce.png"
                alt="Picture of the author"
                width={200}
                height={200}
                quality={1}
                loading="eager"
                />
              </div>
              <div className={styles.cara2}>
              <Image
                src="/img/ecommerce.png"
                alt="Picture of the author"
                width={200}
                height={200}
                quality={1}
                loading="eager"
                />
              </div>
              <div className={styles.cara3}>
              <Image
                src="/img/ecommerce.png"
                alt="Picture of the author"
                width={200}
                height={200}
                quality={1}
                loading="eager"
                />
              </div>
              <div className={styles.cara4}>
              <Image
                src="/img/ecommerce.png"
                alt="Picture of the author"
                width={200}
                height={200}
                quality={1}
                loading="eager"
                />
              </div>
              <div className={styles.cara5}>
              <Image
                src="/img/ecommerce.png"
                alt="Picture of the author"
                width={200}
                height={200}
                quality={1}
                loading="eager"
                />
              </div>
              <div className={styles.cara6}>
              <Image
                src="/img/ecommerce.png"
                alt="Picture of the author"
                width={200}
                height={200}
                quality={1}
                loading="eager"
                />
              </div>
            </div>
                <h2 className={styles.title}>So-Avant-Garde.com A Discovery In Scent</h2>
                <h3 className={styles.description}>A luxury fragrances distribution company going B2C with their first shofity eCommerce online store</h3>
              </a>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.main}>
            <Link href={`/case-study/3`}>
              <a>
              <div className={styles.cube}>
              <div className={styles.cara1}>
              <Image
                src="/img/music_3D_Top.png"
                alt="Picture of the author"
                width={200}
                height={200}
                quality={1}
                loading="eager"
                />
              </div>
              <div className={styles.cara2}>
                <Image
                src="/img/music_3D_Top.png"
                alt="Picture of the author"
                width={200}
                height={200}
                quality={1}
                loading="eager"
                />
              </div>
              <div className={styles.cara3}>
                <Image
                src="/img/music_3D_Top.png"
                alt="Picture of the author"
                width={200}
                height={200}
                quality={1}
                loading="eager"
                />
              </div>
              <div className={styles.cara4}>
                <Image
                src="/img/music_3D_Top.png"
                alt="Picture of the author"
                width={200}
                height={200}
                quality={1}
                loading="eager"
                />
              </div>
              <div className={styles.cara5}>
                <Image
                src="/img/music_3D_Top.png"
                alt="Picture of the author"
                width={200}
                height={200}
                quality={1}
                loading="eager"
                />
              </div>
              <div className={styles.cara6}>
                <Image
                src="/img/music_3D_Top.png"
                alt="Picture of the author"
                width={200}
                height={200}
                quality={1}
                loading="eager"
                />
              </div>
            </div>
                <h2 className={styles.title}>Website CMS for Musicians & Bands</h2>
                <h3 className={styles.description}>Custom content management system for independent artist to manage and keep their fan loyalty.</h3>
              </a>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </motion.div>
  </Layout>
}

export default CaseStudy
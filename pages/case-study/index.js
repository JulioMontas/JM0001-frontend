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
      
      <meta property='og:image' content='https://llegojulio.com/me.png' />
      <meta name='twitter:image' content='https://llegojulio.com/me.png' />

      <meta property='og:title' content='Case Study | UI Developer • Interaction Designer' />
      <meta name='twitter:title' content='Case Study | UI Developer • Interaction Designer' />

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
          slidesPerView: 3,
          spaceBetween: 20,
          width: 800
        }
      }}
    >
        <SwiperSlide>
        <div className={styles.main}>
            <Link href={`/case-study/1`}>
              <a>
                  <h3 className={styles.description}>Visual Design, 2019</h3>
                  <div className={styles.cubeWrapper}>
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
                  </div>
                <h2 className={styles.title}>Pendulum EP - Vinyl Record Label Design</h2>
              </a>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.main}>
            <Link href={`/case-study/2`}>
              <a>
              <h3 className={styles.description}>Full Stack Designer, 2018-2017</h3>
              <div className={styles.cubeWrapper}>
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
              </div>
              <h2 className={styles.title}>Shopify Fragrance eCommerce - A Discovery In Scent</h2>
              </a>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.main}>
            <Link href={`/case-study/3`}>
              <a>
                <h3 className={styles.description}>Full Stack Designer, 2017</h3>
                <div className={styles.cubeWrapper}>
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
                </div>
                <h2 className={styles.title}>Custom Wordpress Theme - for Musicians and Bands</h2>
              </a>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </motion.div>
    </div>
  </Layout>
}

export default CaseStudy
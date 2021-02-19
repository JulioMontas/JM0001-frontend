import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../../components/Layout/Layout'
import styles from '../../styles/Project.module.css'

function sideProject({ posts }) {
  const { t } = useTranslation('sideProject')
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
      <link rel="alternate" href="https://llegojulio.com/side-project/" hreflang="en-us" />
      <link rel="alternate" href="https://llegojulio.com/es-us/side-project/" hreflang="es-us" />
    </Head>
    <div className={styles.wrapper}>
    <motion.div 
       initial={{ x: 600, opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       exit={{ x: -600, opacity: 0 }}>
         <div className={styles.main}>
         <Swiper
         speed={400}
         onSlideChange={() => console.log('slide change')}
         onSwiper={(swiper) => console.log(swiper)}
         breakpoints={{ 
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
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
               <Link href={`/side-project/hellocode`}>
                 <a alt={t('title_01')}>
                   <h3 className={styles.blgSummery}>{t('content_01')}</h3>
                   <Image
                     src="/img/side-project/hc/hc02.gif"
                     alt="Picture of the author"
                     width={1422}
                     height={688}
                    />
                   <h2 className={styles.blgTitle}>{t('title_01')}</h2>
                </a>
               </Link>
        </SwiperSlide>
           <SwiperSlide>
            <Link href={`/side-project/surveillance`}>
              <a alt={t('title_02')}>
              <h3 className={styles.blgSummery}>{t('content_02')}</h3>
                <Image
                src="/img/side-project/surveillance/jessieNguyen-socialProof.jpg"
                alt="Picture of the author"
                width={640}
                height={640}
                quality={1}
                loading="eager"
                />
                <h2 className={styles.blgTitle}>{t('title_02')}</h2>
              </a>
            </Link>
        </SwiperSlide>
           <SwiperSlide>
              <Link href={`/side-project/width`}>
                <a alt={t('title_03')}>
                <h3 className={styles.blgSummery}>{t('content_03')}</h3>
                  <Image
                  src="/img/side-project/width/width_Landing_Page.png"
                  alt="Picture of the author"
                  width={360}
                  height={210}
                  quality={25}
                  loading="eager"
                  />
                  <h2 className={styles.blgTitle}>{t('title_03')}</h2>
                </a>
              </Link>
        </SwiperSlide>
           <SwiperSlide>
            <Link href={`/side-project/colors`}>
              <a alt={t('title_05')}>
              <h3 className={styles.blgSummery}>{t('content_05')}</h3>
                <Image
                src="/img/colorView_01.jpg"
                alt="Picture of the author"
                width={200}
                height={200}
                quality={15}
                loading="eager"
                />
                <h2 className={styles.blgTitle}>{t('title_05')}</h2>
              </a>
            </Link>
        </SwiperSlide>
      </Swiper>
      </div>
    </motion.div>
    </div>
  </Layout>
}

export async function getServerSideProps(context) {
  return {
    props: {},
  }
}

export default sideProject
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../../components/Layout'
import styles from '../../styles/CaseStudy.module.css'

function caseStudy({ posts }) {
  const { t } = useTranslation('caseStudy')
  return <Layout>
    <Head>
      <title>Case Study - UI Developer • Interaction Designer | Julio Montás</title>
      <meta name='twitter:url' content='https://juliomontas.com/case-study/' />
      <meta property='og:url' content='https://juliomontas.com/case-study/' />
      <meta property='og:image' content='https://juliomontas.com/me.png' />
      <meta name='twitter:image' content='https://juliomontas.com/me.png' />
      <meta property='og:title' content='Case Study | UI Developer • Interaction Designer' />
      <meta name='twitter:title' content='Case Study | UI Developer • Interaction Designer' />
      <meta name="description" content="Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC." key="description"/>
      <meta property='og:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
      <meta name='twitter:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
      <link rel="canonical" href="https://juliomontas.com/case-study/" />
      <link rel="alternate" href="https://juliomontas.com/case-study/" hreflang="en-us" />
      <link rel="alternate" href="https://juliomontas.com/es-us/case-study/" hreflang="es-us" />
    </Head>
    <div className={styles.container}>
      <motion.div
      initial={{ x: 600, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -600, opacity: 0 }}>
        <div className={styles.main}>

        <section>
        <Link href={`/case-study/0`}>
          <a alt={t('title_00')} rel="alternate" hreflang="en">
          <h2 className={styles.title}>{t('title_00')}</h2>
            <h3 className={styles.description}>{t('content_00')}</h3>
            <div className={styles.cubeWrapper}>
              <div className={styles.cube}>
                <div className={styles.cara1}>
                  <Image
                  src="/img/blue_box.jpg"
                  alt={t('title_00')}
                  width={200}
                  height={200}
                  quality={1}
                  loading="eager"
                  />
                </div>
                <div className={styles.cara2}>
                  <Image
                  src="/img/blue_box.jpg"
                  alt={t('title_00')}
                  width={200}
                  height={200}
                  quality={1}
                  loading="eager"
                  />
                </div>
                <div className={styles.cara3}>
                  <Image
                  src="/img/blue_box.jpg"
                  alt={t('title_00')}
                  width={200}
                  height={200}
                  quality={1}
                  loading="eager"
                  />
                </div>
                <div className={styles.cara4}>
                  <Image
                  src="/img/blue_box.jpg"
                  alt={t('title_00')}
                  width={200}
                  height={200}
                  quality={1}
                  loading="eager"
                  />
                </div>
                <div className={styles.cara5}>
                  <Image
                  src="/img/blue_box.jpg"
                  alt={t('title_00')}
                  width={200}
                  height={200}
                  quality={1}
                  loading="eager"
                  />
                </div>
                <div className={styles.cara6}>
                  <Image
                  src="/img/blue_box.jpg"
                  alt={t('title_00')}
                  width={200}
                  height={200}
                  quality={1}
                  loading="eager"
                  />
                </div>
              </div>
            </div>
          </a>
        </Link>
        </section>

          <section>
          <Link href={`/case-study/1`}>
            <a alt="Pendulum EP - Vinyl Record Label Design" rel="alternate" hreflang="en">
            <h2 className={styles.title}>{t('title_01')}</h2>
              <h3 className={styles.description}>{t('content_01')}</h3>
              <div className={styles.cubeWrapper}>
                <div className={styles.cube}>
                  <div className={styles.cara1}>
                    <Image
                    src="/img/Pendulum-3D-Box-Face-01.jpg"
                    alt={t('title_01')}
                    width={200}
                    height={200}
                    quality={1}
                    loading="eager"
                    />
                  </div>
                  <div className={styles.cara2}>
                    <Image
                    src="/img/Pendulum-3D-Box-Right-02.jpg"
                    alt={t('title_01')}
                    width={200}
                    height={200}
                    quality={1}
                    loading="eager"
                    />
                  </div>
                  <div className={styles.cara3}>
                    <Image
                    src="/img/Pendulum-3D-Box-Back-03.jpg"
                    alt={t('title_01')}
                    width={200}
                    height={200}
                    quality={1}
                    loading="eager"
                    />
                  </div>
                  <div className={styles.cara4}>
                    <Image
                    src="/img/Pendulum-3D-Box-Left-04.jpg"
                    alt={t('title_01')}
                    width={200}
                    height={200}
                    quality={1}
                    loading="eager"
                    />
                  </div>
                  <div className={styles.cara5}>
                    <Image
                    src="/img/Pendulum-3D-Box-Bottom-05.jpg"
                    alt={t('title_01')}
                    width={200}
                    height={200}
                    quality={1}
                    loading="eager"
                    />
                  </div>
                  <div className={styles.cara6}>
                    <Image
                    src="/img/Pendulum-3D-Box-Top-06.jpg"
                    alt={t('title_01')}
                    width={200}
                    height={200}
                    quality={1}
                    loading="eager"
                    />
                  </div>
                </div>
              </div>
            </a>
          </Link>
          </section>

          <section>
          <Link href={`/case-study/2`}>
            <a alt="Shopify Fragrance eCommerce - A Discovery In Scent" rel="alternate" hreflang="en">
              <h2 className={styles.title}>{t('title_02')}</h2>
              <h3 className={styles.description}>{t('content_02')}</h3>
              <div className={styles.cubeWrapper}>
                <div className={styles.cube}>
                  <div className={styles.cara1}>
                    <Image
            src="/img/ecommerce.png"
            alt={t('title_02')}
            width={200}
            height={200}
            quality={1}
            loading="eager"
            />
          </div>
          <div className={styles.cara2}>
          <Image
            src="/img/ecommerce.png"
            alt={t('title_02')}
            width={200}
            height={200}
            quality={1}
            loading="eager"
            />
          </div>
          <div className={styles.cara3}>
          <Image
            src="/img/ecommerce.png"
            alt={t('title_02')}
            width={200}
            height={200}
            quality={1}
            loading="eager"
            />
          </div>
          <div className={styles.cara4}>
          <Image
            src="/img/ecommerce.png"
            alt={t('title_02')}
            width={200}
            height={200}
            quality={1}
            loading="eager"
            />
          </div>
          <div className={styles.cara5}>
          <Image
            src="/img/ecommerce.png"
            alt={t('title_02')}
            width={200}
            height={200}
            quality={1}
            loading="eager"
            />
          </div>
          <div className={styles.cara6}>
          <Image
            src="/img/ecommerce.png"
            alt={t('title_02')}
            width={200}
            height={200}
            quality={1}
            loading="eager"
            />
          </div>
        </div>
          </div>
          </a>
        </Link>
          </section>

          <section>
          <Link href={`/case-study/3`}>
            <a alt="Custom Wordpress Theme - for Musicians and Bands" rel="alternate" hreflang="en">
              <h2 className={styles.title}>{t('title_03')}</h2>
              <h3 className={styles.description}>{t('content_03')}</h3>
              <div className={styles.cubeWrapper}>
                <div className={styles.cube}>
            <div className={styles.cara1}>
            <Image
              src="/img/music_3D_Top.png"
              alt={t('title_03')}
              width={200}
              height={200}
              quality={1}
              loading="eager"
              />
            </div>
            <div className={styles.cara2}>
              <Image
              src="/img/music_3D_Top.png"
              alt={t('title_03')}
              width={200}
              height={200}
              quality={1}
              loading="eager"
              />
            </div>
            <div className={styles.cara3}>
              <Image
              src="/img/music_3D_Top.png"
              alt={t('title_03')}
              width={200}
              height={200}
              quality={1}
              loading="eager"
              />
            </div>
            <div className={styles.cara4}>
              <Image
              src="/img/music_3D_Top.png"
              alt={t('title_03')}
              width={200}
              height={200}
              quality={1}
              loading="eager"
              />
            </div>
            <div className={styles.cara5}>
              <Image
              src="/img/music_3D_Top.png"
              alt={t('title_03')}
              width={200}
              height={200}
              quality={1}
              loading="eager"
              />
            </div>
            <div className={styles.cara6}>
              <Image
              src="/img/music_3D_Top.png"
              alt={t('title_03')}
              width={200}
              height={200}
              quality={1}
              loading="eager"
              />
            </div>
          </div>
              </div>
            </a>
          </Link>
          </section>
      </div>
    </motion.div>
    </div>
  </Layout>
}

export default caseStudy

import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Container from '../../components/Container'
import NavBar from '../../components/NavBar'
import RelatedCTA from '../../components/RelatedCTA'
import CaseStudiesWrap from '../../components/CaseStudiesWrap'
import styles from '../../styles/Report.module.css'
import ReactPlayer from 'react-player/vimeo'

const easing = [.6, -.05, .01, .99];

const fadeInUp = {
  initial:{
    y: 60,
    opacity: 0
  },
  animate:{
    y: 0,
    opacity: 1,
    transition:{
      duration: .6,
      ease: easing
    }
  }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function ProjectIndex() {
  const { t } = useTranslation('sideProject')
  return <>
  <NavBar />
  <div className={styles.backgroundColor}>
  <Container>
  <Head>
    <title>{t('title_01')} | Side Project</title>
    <meta name='twitter:url' content='https://juliomontas.com/side-project/hellocode-the-home-for-programming-languages/' />
    <meta property='og:url' content='https://juliomontas.com/side-project/hellocode-the-home-for-programming-languages/' />
    <meta property='og:image' content='https://juliomontas.com/img/side-project/hc/hc01.gif' />
    <meta name='twitter:image' content='https://juliomontas.com/img/side-project/hc/hc01.gif' />
    <meta property='og:title' content='Helloco.de The Home For Programming Languages | Julio Montás' />
    <meta name='twitter:title' content='Helloco.de The Home For Programming Languages | Julio Montás' />
    <meta name="description" content="List of programming languages that have been developed from 1950–1979, 1980–1999, and 2000 to the present" key="description"/>
    <meta property='og:description' content='List of programming languages that have been developed from 1950–1979, 1980–1999, and 2000 to the present' />
    <meta name='twitter:description' content='List of programming languages that have been developed from 1950–1979, 1980–1999, and 2000 to the present' />
    <link rel="canonical" href="https://juliomontas.com/side-project/hellocode-the-home-for-programming-languages/" />
    <link rel="alternate" href="https://juliomontas.com/side-project/hellocode-the-home-for-programming-languages/" hreflang="en-us" />
    <link rel="alternate" href="https://juliomontas.com/es-us/side-project/hellocode-the-home-for-programming-languages/" hreflang="es-us" />
  </Head>
  <motion.div exit={{y: -300, opacity: 0 }} initial='initial' animate='animate'>
  <motion.div variants={stagger}>
  <div className={styles.mainIndex}>
    <div className={styles.mainCenterCont}>
      <div className={styles.gridContainer}>
        <motion.div variants={fadeInUp}>
          <div className={styles.flipSwitch}>
            <div>
              <h1>{t('title_01')}</h1>
              <p>{t('content_01')}</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <div className={styles.flipSwitch}>
            <h2>Concept</h2>
            <p>{t('conceptContent_01')}</p>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <ReactPlayer 
            url='https://vimeo.com/806972854' 
            controls
            loop='true'
            playing='true'
            muted='true'
            width={1200}
            height={681}
          />
        </motion.div>

        <motion.div variants={fadeInUp}>
          <div>
            <h2>UI Design</h2>
            <Image
              src="/img/side-project/hc/CABulM1UwAAPf4a.png"
              alt="Mockup of python page"
              width={1421}
              height={1897}
              quality={100}
              layout="responsive"
              loading="eager"
            />
          </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
        <div>
        <p className={styles.textUnderImg}>{t('uiDesignContent_01a')}</p>
        <Swiper
        speed={400}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
            320: {
                slidesPerView: 1,
                spaceBetween: 15,
                width: 300
            },
            1200: {
                slidesPerView: 1,
                spaceBetween: 20,
                width: 800
            }
        }}
        >
            <SwiperSlide>
                <Image
                src="/img/side-project/hc/hc02.gif"
                alt="Mockup of python page"
                width={940}
                height={718}
                quality={100}
                layout="responsive"
                loading="lazy"
                />
                <p className={styles.textUnderImg}>{t('uiDesignContent_01b')}</p>
            </SwiperSlide>
            <SwiperSlide>
                <Image
                src="/img/side-project/hc/hc01.gif"
                alt="Mockup of python page"
                width={1422}
                height={768}
                quality={100}
                layout="responsive"
                loading="lazy"
                />
                <p className={styles.textUnderImg}>{t('uiDesignContent_01c')}</p>
            </SwiperSlide>
        </Swiper>
        </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <div className={styles.flipSwitch}>
          <h2>URL</h2>
            <div>
                <ul className={styles.secTextList}>
                <RelatedCTA
                  title="The New School BFA Thesis 2013"
                  url="https://bfacd.parsons.edu/2013/helloco-de"
                  content="https://bfacd.parsons.edu/2013/helloco-de"
                />
                <RelatedCTA
                  title="Helloco.de Twitter"
                  url="https://twitter.com/helloco_de"
                  content="https://twitter.com/helloco_de"
                />
                </ul>
            </div>
          </div>
        </motion.div>

        {/* <motion.div variants={fadeInUp}>
        <div className={styles.flipSwitch}>
          <h2>More Projects</h2>
          <ul>
            <RelatedCTA
              url="/side-project/surveillance-culture"
              title={t('title_02')}
              content={t('content_02')}
            />
            <RelatedCTA
              url="/side-project/width-take-over-the-screen"
              title={t('title_03')}
              content={t('content_03')}
            />
            <RelatedCTA
              url="/side-project/basic-color-fundamentals"
              title={t('title_05')}
              content={t('content_05')}
            />
          </ul>
        </div>
        </motion.div> */}

        <CaseStudiesWrap
          title="Case Studies"
        />

      </div>
    </div>
  </div>
  </motion.div>
  </motion.div>
  </Container>
  </div>
</>
}

export async function getServerSideProps(context) {
    return {
        props: {},
    }
}

export default ProjectIndex

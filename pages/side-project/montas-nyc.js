import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
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
    <title>{t('title_03')} | Side Project</title>
    <meta name='twitter:url' content='https://juliomontas.com/side-project/montas-nyc/' />
    <meta property='og:url' content='https://juliomontas.com/side-project/montas-nyc/' />
    <meta property='og:image' content='https://juliomontas.com/me.png' />
    <meta name='twitter:image' content='https://juliomontas.com/me.png' />
    <meta property='og:title' content='Montas.nyc - Side Project - Julio Montás' />
    <meta name='twitter:title' content='Montas.nyc - Side Project - Julio Montás' />
    <meta name="description" content="" key="description"/>
    <meta property='og:description' content='' />
    <meta name='twitter:description' content='' />
    <link rel="canonical" href="https://juliomontas.com/side-project/montas-nyc/" />
    <link rel="alternate" href="https://juliomontas.com/side-project/montas-nyc/" hreflang="en-us" />
    <link rel="alternate" href="https://juliomontas.com/es-us/side-project/montas-nyc/" hreflang="es-us" />
  </Head>
  <motion.div exit={{y: -300, opacity: 0 }} initial='initial' animate='animate'>
  <motion.div variants={stagger}>
  <div className={styles.mainIndex}>
    <div className={styles.mainCenterCont}>
      <div className={styles.gridContainer}>

                <motion.div variants={fadeInUp}>
                <div className={styles.flipSwitch}>
                    <div>
                        <h1>{t('title_07')}</h1>
                        <p>{t('content_07')}</p>
                    </div>
                </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                <div className={styles.flipSwitch}>
                    <h2>Concept</h2>
                    <p>{t('conceptContent_07')}</p>
                </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                <div>
                  <h2>UI Design</h2>
                  <Image
                    src="/img/side-project/Montas_A02.gif"
                    alt="Mockup of python page"
                    width={1280}
                    height={735}
                    quality={100}
                    layout="responsive"
                    loading="eager"
                  />
                </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                <div>
                  <h2>UI Design: Homepage</h2>
                  <Image
                    src="/img/side-project/montas_Home.png"
                    alt="Mockup of python page"
                    width={1280}
                    height={735}
                    quality={100}
                    layout="responsive"
                    loading="eager"
                  />
                </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                <div>
                  <h2>UI Design: Music Discovery</h2>
                  <Image
                    src="/img/side-project/montas_Mixes.png"
                    alt="Mockup of python page"
                    width={1280}
                    height={735}
                    quality={100}
                    layout="responsive"
                    loading="eager"
                  />
                </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                <div>
                  <h2>UI Design: About Me</h2>
                  <Image
                    src="/img/side-project/montas_About.png"
                    alt="Mockup of python page"
                    width={1280}
                    height={735}
                    quality={100}
                    layout="responsive"
                    loading="eager"
                  />
                </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                <div>
                  <h2>UI Design: Contact Me</h2>
                  <Image
                    src="/img/side-project/montas_Connect.png"
                    alt="Mockup of python page"
                    width={1280}
                    height={735}
                    quality={100}
                    layout="responsive"
                    loading="eager"
                  />
                </div>
                </motion.div>

                <motion.div variants={fadeInUp}>
                    <h2>Video from the actual website</h2>
                    <ReactPlayer 
                      url='https://vimeo.com/806986757' 
                      controls
                      loop='true'
                      playing='true'
                      muted='true'
                      width={1200}
                      height={681}
                    />
                </motion.div>

                <motion.div variants={fadeInUp}>
                <div className={styles.flipSwitch}>
                  <h2>URL</h2>
                  <ul>
                    <RelatedCTA
                      title="Montas.nyc"
                      url="https://montas.nyc/"
                      content="https://montas.nyc/"
                    />
                  </ul>
                </div>
                </motion.div>

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

export default ProjectIndex

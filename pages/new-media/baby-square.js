import Image from 'next/image'
import { motion } from "framer-motion"
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Container from '../../components/Container'
import NavBar from '../../components/NavBar'
import styles from '../../styles/Report.module.css'
import ReactPlayer from 'react-player/vimeo'
import NewMedia from '../../components/NewMedia'

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

function NewMediaIndex() {
    const { t } = useTranslation('newMedia')
    return <>
    <NavBar />
    <div className={styles.backgroundColor}>
        <Container>
            <Head>
                <title>{t('title_02')} - Julio Montas</title>
                <meta name='twitter:url' content='https://juliomontas.com/new-media/baby-square/' />
                <meta property='og:url' content='https://juliomontas.com/new-media/baby-square/' />
                <meta property='og:image' content='https://juliomontas.com/me.png' />
                <meta name='twitter:image' content='https://juliomontas.com/me.png' />
                <meta property='og:title' content='Baby Square - New Media' />
                <meta name='twitter:title' content='Baby Square - New Media' />
                <meta name="description" content="" key="description"/>
                <meta property='og:description' content='' />
                <meta name='twitter:description' content='' />
                <link rel="canonical" href="https://juliomontas.com/new-media/baby-square/" />
                <link rel="alternate" href="https://juliomontas.com/new-media/baby-square/" hreflang="en-us" />
                <link rel="alternate" href="https://juliomontas.com/es-us/new-media/baby-square/" hreflang="es-us" />
            </Head>
            <motion.div exit={{y: -300, opacity: 0 }} initial='initial' animate='animate'>
                <motion.div variants={stagger}>
                    <div className={styles.mainIndex}>
                        <div className={styles.mainCenterCont}>
                            <div className={styles.gridContainer}>

                              <motion.div variants={fadeInUp}>
                                <div className={styles.flipSwitch}>
                                  <div>
                                    <h1>{t('title_02')}</h1>
                                    <p>{t('content_02')}</p>
                                  </div>
                                </div>
                              </motion.div>
                              
                              <motion.div variants={fadeInUp}>
                                <div className={styles.flipSwitch}>
                                  <h2>&#128466; {t('overview')}</h2>
                                  <p>{t('overviewContent_02')}</p>
                                </div>
                              </motion.div>

                              <motion.div variants={fadeInUp}>
                                <ReactPlayer 
                                  url='https://vimeo.com/805396158' 
                                  controls
                                  loop='true'
                                  playing='true'
                                  muted='true'
                                  width={1200}
                                  height={676}
                                  // className='react-player'
                                  // width='100%'
                                  // height='100%'
                                />
                                <p>* Audio in muted</p>
                              </motion.div>

                              <motion.div variants={fadeInUp}>
                                <div>
                                  <h2>Visual</h2>
                                  <Image
                                    src="/img/new-media/IMG_9439.jpg"
                                    alt="Mockup of python page"
                                    width={3024}
                                    height={4032}
                                    quality={100}
                                    layout="responsive"
                                    loading="eager"
                                  />
                                  <p>Controller prototype using the open-source Arduino Uno microcontroller board</p>
                                </div>
                              </motion.div>

                              <motion.div variants={fadeInUp}>
                                <div className={styles.flipSwitch}>
                                  <h2>More New Media</h2>
                                </div>
                              </motion.div>

                            </div>
                          </div>
                     </div>

                     <NewMedia />

                     <motion.p 
                       variants={fadeInUp} 
                       style={{ 
                        marginTop: '6em',
                        marginBottom: '2em' 
                      }}>
                       © {new Date().getFullYear()} Julio Montás. All Rights Reserved.
                     </motion.p>

                 </motion.div>
              </motion.div>
          </Container>
      </div>
  </>
}

export default NewMediaIndex

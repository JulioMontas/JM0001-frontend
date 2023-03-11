import Image from 'next/image'
import { motion } from "framer-motion"
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Container from '../../components/Container'
import RelatedCTA from '../../components/RelatedCTA'
import NavBar from '../../components/NavBar'
import styles from '../../styles/Report.module.css'
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
                <title>{t('title_09')} - New Media from Julio Montás</title>
                <meta name='twitter:url' content='https://juliomontas.com/new-media/pixel-x-pixel/' />
                <meta property='og:url' content='https://juliomontas.com/new-media/pixel-x-pixel/' />
                <meta property='og:image' content='https://juliomontas.com/me.png' />
                <meta name='twitter:image' content='https://juliomontas.com/me.png' />
                <meta property='og:title' content='Pixel X Pixel - New Media - Julio Montás' />
                <meta name='twitter:title' content='Pixel X Pixel - New Media - Julio Montás' />
                <meta name="description" content="" key="description"/>
                <meta property='og:description' content='' />
                <meta name='twitter:description' content='' />
                <link rel="canonical" href="https://juliomontas.com/new-media/pixel-x-pixel/" />
                <link rel="alternate" href="https://juliomontas.com/new-media/pixel-x-pixel/" hreflang="en-us" />
                <link rel="alternate" href="https://juliomontas.com/es-us/new-media/pixel-x-pixel/" hreflang="es-us" />
            </Head>
            <motion.div exit={{y: -300, opacity: 0 }} initial='initial' animate='animate'>
                <motion.div variants={stagger}>
                    <div className={styles.mainIndex}>
                        <div className={styles.mainCenterCont}>
                            <div className={styles.gridContainer}>

                              <motion.div variants={fadeInUp}>
                                <div className={styles.flipSwitch}>
                                  <div>
                                    <h1>{t('title_09')}</h1>
                                    <p>{t('content_09')}</p>
                                  </div>
                                </div>
                              </motion.div>
                              
                              <motion.div variants={fadeInUp}>
                                <div className={styles.flipSwitch}>
                                  <h2>&#128466; {t('overview')}</h2>
                                  <p>{t('overviewContent_09')}</p>
                                </div>
                              </motion.div>

                              <motion.div variants={fadeInUp}>
                                <div>
                                  <h2>The first version's concept was to have just one still pixel on the screen</h2>
                                  <Image
                                    src="/img/new-media/pixelXPixel01.gif"
                                    alt="Mockup of python page"
                                    width={1024}
                                    height={501}
                                    quality={100}
                                    layout="responsive"
                                    loading="eager"
                                  />
                                </div>
                              </motion.div>

                              <motion.div variants={fadeInUp}>
                                <div>
                                  <h2>One click prompts an alarming reaction</h2>
                                  <Image
                                    src="/img/new-media/Pixel_X_Pixel_V02_Click.gif"
                                    alt="Mockup of python page"
                                    width={1440}
                                    height={805}
                                    quality={100}
                                    layout="responsive"
                                    loading="eager"
                                  />
                                </div>
                              </motion.div>

                              <motion.div variants={fadeInUp}>
                                <div>
                                  <h2>The mock-phishing website is meant to make users think twice before clicking any suspicious links</h2>
                                  <Image
                                    src="/img/new-media/Pixel_X_Pixel_V02_Menu.gif"
                                    alt="Mockup of python page"
                                    width={1440}
                                    height={805}
                                    quality={100}
                                    layout="responsive"
                                    loading="eager"
                                  />
                                </div>
                              </motion.div>
                              
                              <motion.div variants={fadeInUp}>
                                <div>
                                  <h2>Menu UI</h2>
                                  <Image
                                    src="/img/new-media/Pixel_X_Pixel_V02_Menu.gif"
                                    alt="Mockup of python page"
                                    width={1440}
                                    height={805}
                                    quality={100}
                                    layout="responsive"
                                    loading="eager"
                                  />
                                </div>
                              </motion.div>

                              <motion.div variants={fadeInUp}>
                                <div className={styles.flipSwitch}>
                                  <h2>URL</h2>
                                  <ul>
                                    <RelatedCTA
                                      title="Demo Version 01"
                                      url="https://juliomontas.github.io/One-Pixel-Website/"
                                      content="https://juliomontas.github.io/One-Pixel-Website/"
                                    />
                                  </ul>
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
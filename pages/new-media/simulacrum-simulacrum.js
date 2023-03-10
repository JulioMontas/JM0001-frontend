import { motion } from "framer-motion"
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Container from '../../components/Container'
import NavBar from '../../components/NavBar'
import styles from '../../styles/Report.module.css'
import ReactPlayer from 'react-player/vimeo'
import NewMedia from '../../components/NewMedia'
import RelatedCTA from '../../components/RelatedCTA'

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
                <title>{t('title_01')} - Julio Montas</title>
                <meta name='twitter:url' content='https://juliomontas.com/new-media/simulacrum-simulacrum/' />
                <meta property='og:url' content='https://juliomontas.com/new-media/simulacrum-simulacrum/' />
                <meta property='og:image' content='https://juliomontas.com/me.png' />
                <meta name='twitter:image' content='https://juliomontas.com/me.png' />
                <meta property='og:title' content='Simulacrum | Simulacrum - New Media' />
                <meta name='twitter:title' content='Simulacrum | Simulacrum - New Media' />
                <meta name="description" content="" key="description"/>
                <meta property='og:description' content='' />
                <meta name='twitter:description' content='' />
                <link rel="canonical" href="https://juliomontas.com/new-media/simulacrum-simulacrum/" />
                <link rel="alternate" href="https://juliomontas.com/new-media/simulacrum-simulacrum/" hreflang="en-us" />
                <link rel="alternate" href="https://juliomontas.com/es-us/new-media/simulacrum-simulacrum/" hreflang="es-us" />
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
                                  <h2>&#128466; {t('overview')}</h2>
                                  <p>{t('overviewContent_01')}</p>
                                </div>
                              </motion.div>

                              <motion.div variants={fadeInUp}>
                                <div className={styles.flipSwitch}>
                                  <h2>Programming language used</h2>
                                  <p>Processing a graphical library and integrated development environment (IDE).</p>
                                </div>
                              </motion.div>


                              <motion.div variants={fadeInUp}>
                                <ReactPlayer 
                                  url='https://player.vimeo.com/video/805627314' 
                                  controls
                                  loop='true'
                                  playing='true'
                                  muted='true'
                                  width={1200}
                                  height={686}
                                />
                                <p>* Audio in muted</p>
                              </motion.div>

                              <motion.div variants={fadeInUp}>
                                <ReactPlayer 
                                  url='https://player.vimeo.com/video/805627441' 
                                  controls
                                  loop='true'
                                  width={1200}
                                  height={675}
                                />
                              </motion.div>

                              <motion.div variants={fadeInUp}>
                                <ReactPlayer 
                                  url='https://player.vimeo.com/video/805627759' 
                                  controls
                                  loop='true'
                                  width={1200}
                                  height={675}
                                />
                              </motion.div>

                              <motion.div variants={fadeInUp}>
                                <p>"The media represents world that is more real than reality that we can experience. People lose the ability to distinguish between reality and fantasy. They also begin to engage with the fantasy without realizing what it really is. They seek happiness and fulfilment through the simulacra of reality, e.g. media and avoid the contact/interaction with the real world."</p>
                              </motion.div>

                              <motion.div variants={fadeInUp}>
                                <ReactPlayer 
                                  url='https://player.vimeo.com/video/805628270' 
                                  controls
                                  loop='true'
                                  width={1200}
                                  height={675}
                                />
                              </motion.div>

                              <motion.div variants={fadeInUp}>
                                <ReactPlayer 
                                  url='https://player.vimeo.com/video/805403779' 
                                  controls
                                  loop='true'
                                  width={1200}
                                  height={675}
                                />
                              </motion.div>

                              <motion.div variants={fadeInUp}>
                                <ReactPlayer 
                                  url='https://player.vimeo.com/video/805628320' 
                                  controls
                                  loop='true'
                                  width={1200}
                                  height={675}
                                />
                              </motion.div>

                              <motion.div variants={fadeInUp}>
                                <p>"We live in a world where there is more and more information, and less and less meaning.” - Simulacra and Simulation</p>
                              </motion.div>

                              <motion.div variants={fadeInUp}>
                                <ReactPlayer 
                                  url='https://player.vimeo.com/video/805619269' 
                                  controls
                                  loop='true'
                                  width={1200}
                                  height={750}
                                />
                              </motion.div>

                              <motion.div variants={fadeInUp}>
                                <ReactPlayer 
                                  url='https://player.vimeo.com/video/805406788' 
                                  controls
                                  loop='true'
                                  width={1200}
                                  height={750}
                                />
                              </motion.div>

                              <motion.div variants={fadeInUp}>
                                <ReactPlayer 
                                  url='https://player.vimeo.com/video/805628927' 
                                  controls
                                  loop='true'
                                  width={1200}
                                  height={675}
                                />
                              </motion.div>

                              <motion.div variants={fadeInUp}>
                                <ReactPlayer 
                                  url='https://player.vimeo.com/video/805398614' 
                                  controls
                                  loop='true'
                                  width={1200}
                                  height={675}
                                />
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

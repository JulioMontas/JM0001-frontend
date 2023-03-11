import Image from 'next/image'
import { motion } from "framer-motion"
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Container from '../../components/Container'
import NavBar from '../../components/NavBar'
import styles from '../../styles/Report.module.css'
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
                <title>{t('title_00')} - New Media - Julio Montás</title>
                <meta name='twitter:url' content='https://juliomontas.com/new-media/sleeping-place/' />
                <meta property='og:url' content='https://juliomontas.com/new-media/sleeping-place/' />
                <meta property='og:image' content='https://juliomontas.com/me.png' />
                <meta name='twitter:image' content='https://juliomontas.com/me.png' />
                <meta property='og:title' content='Sleeping Place - New Media - Julio Montás' />
                <meta name='twitter:title' content='Sleeping Plac - New Media - Julio Montás' />
                <meta name="description" content="" key="description"/>
                <meta property='og:description' content='' />
                <meta name='twitter:description' content='' />
                <link rel="canonical" href="https://juliomontas.com/new-media/sleeping-place/" />
                <link rel="alternate" href="https://juliomontas.com/new-media/sleeping-place/" hreflang="en-us" />
                <link rel="alternate" href="https://juliomontas.com/es-us/new-media/sleeping-place/" hreflang="es-us" />
            </Head>
            <motion.div exit={{y: -300, opacity: 0 }} initial='initial' animate='animate'>
                <motion.div variants={stagger}>
                    <div className={styles.mainIndex}>
                        <div className={styles.mainCenterCont}>
                            <div className={styles.gridContainer}>

                              <motion.div variants={fadeInUp}>
                                <div className={styles.flipSwitch}>
                                  <div>
                                    <h1>{t('title_00')}</h1>
                                    <p>{t('content_00')}</p>
                                  </div>
                                </div>
                              </motion.div>
                              
                              <motion.div variants={fadeInUp}>
                                <div className={styles.flipSwitch}>
                                  <h2>&#128466; {t('overview')}</h2>
                                  <p>{t('overviewContent_00')}</p>
                                </div>
                              </motion.div>

                              <motion.div variants={fadeInUp}>
                                <div className={styles.flipSwitch}>
                                  <h2>Research</h2>
                                  <p>Through the use of cutting-edge technology, I have created a space that allows individuals to interact with the memory of their loved ones in a way that is both meaningful and cathartic. Whether it's through exploring a beautifully rendered environment or engaging with interactive elements, this virtual world offers a unique opportunity for individuals to connect with the memories of those they have lost.</p>
                                </div>
                              </motion.div>


                              <motion.div variants={fadeInUp}>
                                <div>
                                  <h2>Visual: 2D view for navigation</h2>
                                  <Image
                                    src="/img/new-media/MayimIsland.png"
                                    alt="Mayim Island"
                                    width={4320}
                                    height={2736}
                                    quality={100}
                                    layout="responsive"
                                    loading="eager"
                                  />
                                </div>
                              </motion.div>

                              <motion.p variants={fadeInUp}>
                                The project is still under develoment. If you are interested in learning more about my work in this space or would like to explore the virtual world I have created, please do not hesitate to reach out. I am always excited to connect with others who are passionate about exploring the possibilities of new media art.
                              </motion.p>

                              <motion.div variants={fadeInUp}>
      <div className={styles.flipSwitch}>
          <h2>Website</h2>
          <ul>
          <RelatedCTA
            url="https://sleeping.place"
            title="Sleeping.Place"
            content="https://sleeping.place"
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

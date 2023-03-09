import { motion } from "framer-motion"
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Container from '../../components/Container'
import RelatedCTA from '../../components/RelatedCTA'
import NavBar from '../../components/NavBar'
import styles from '../../styles/Report.module.css'
import ReactPlayer from 'react-player/youtube'
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
                <title>{t('title_04')} - Julio Montas</title>
                <meta name='twitter:url' content='https://juliomontas.com/new-media/surveillance-culture/' />
                <meta property='og:url' content='https://juliomontas.com/new-media/surveillance-culture/' />
                <meta property='og:image' content='https://juliomontas.com/me.png' />
                <meta name='twitter:image' content='https://juliomontas.com/me.png' />
                <meta property='og:title' content='Surveillance Culture - New Media' />
                <meta name='twitter:title' content='Surveillance Culture - New Media' />
                <meta name="description" content="" key="description"/>
                <meta property='og:description' content='' />
                <meta name='twitter:description' content='' />
                <link rel="canonical" href="https://juliomontas.com/new-media/surveillance-culture/" />
                <link rel="alternate" href="https://juliomontas.com/new-media/surveillance-culture/" hreflang="en-us" />
                <link rel="alternate" href="https://juliomontas.com/es-us/new-media/surveillance-culture/" hreflang="es-us" />
            </Head>
            <motion.div exit={{y: -300, opacity: 0 }} initial='initial' animate='animate'>
                <motion.div variants={stagger}>
                    <div className={styles.mainIndex}>
                        <div className={styles.mainCenterCont}>
                            <div className={styles.gridContainer}>

                              <motion.div variants={fadeInUp}>
                                <div className={styles.flipSwitch}>
                                  <div>
                                    <h1>{t('title_04')}</h1>
                                    <p>{t('content_04')}</p>
                                  </div>
                                </div>
                              </motion.div>
                              
                              <motion.div variants={fadeInUp}>
                                <div className={styles.flipSwitch}>
                                  <h2>&#128466; {t('overview')}</h2>
                                  <p>{t('overviewContent_04')}</p>
                                </div>
                              </motion.div>

                              <motion.div variants={fadeInUp}>
      <div>
          <h2>The butterfly effect</h2>
          <Swiper
          speed={400}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
              320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                  width: 310
              },
              1200: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                  width: 960
              }
          }}
          >
              <SwiperSlide>
                  <Image
                  src="/img/side-project/surveillance/intro.jpg"
                  alt="Mockup of python page"
                  width={1080}
                  height={629}
                  quality={100}
                  layout="responsive"
                  loading="eager"
                  />
              </SwiperSlide>
              <SwiperSlide>
                  <Image
                  src="/img/side-project/surveillance/jessieNguyen-Moodboard.jpg"
                  alt="Mockup of python page"
                  width={1080}
                  height={629}
                  quality={100}
                  layout="responsive"
                  loading="eager"
                  />
              </SwiperSlide>
              <SwiperSlide>
                  <Image
                  src="/img/side-project/surveillance/jessieNguyen-socialProof.jpg"
                  alt="Mockup of python page"
                  width={1080}
                  height={629}
                  quality={100}
                  layout="responsive"
                  loading="lazy"
                  />
              </SwiperSlide>
              <SwiperSlide>
                  <Image
                  src="/img/side-project/surveillance/jessieNguyen-Ig.jpg"
                  alt="Mockup of python page"
                  width={1080}
                  height={629}
                  quality={100}
                  layout="responsive"
                  loading="lazy"
                  />
              </SwiperSlide>
          </Swiper>
      </div>
      </motion.div>

      <motion.div variants={fadeInUp}>
                                <ReactPlayer width='100%' height='700px' url='https://youtu.be/ZTbdu-VR59U' />
                              </motion.div>

      <motion.div variants={fadeInUp}>
      <div className={styles.flipSwitch}>
          <h2>Demographics</h2>
          <div>
          <Swiper
          speed={400}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
              320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                  width: 310
              },
              1200: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                  width: 380
              }
          }}
          >
              <SwiperSlide>
              <ul className={styles.secTextList}>
                  <li>Age: 21</li>
                  <li>Sex: Female</li>
                  <li>Name: Jessica Nguyen</li>
                  <li>Phone: 917.635.1614</li>
                  <li>Birthday: Jan 14, 1994 </li>
                  <li>Nationality: Vietnamese/Scottish (Eurasians)</li>
                  <li>Socioeconomic Level as a child: Middle class</li>
                  <li>Socioeconomic Level as an adult: Middle class</li>
                  <li>Hometown: Houston, Texas | Just outside of the houston but in the metro area Katy, Texas</li>
                  <li>Current Residence: New York City</li>
                  <li>Current School: Transferred to New York University Dental School (2015 - 2017)</li>
                  <li>Major: BS in dental hygiene</li>
                  <li>Undergraduate School: Virginia Commonwealth University (2013 - 2015)</li>
                  <li>Major: Dental Hygienist</li>
                  <li>Occupation: Dentists, Dental hygienist</li>
                  <li>Former Employer: AM New York, Part time</li>
                  <li>Prospective Income: $77,252.00</li>
                  <li>Talents/Skills/Interests: karaoke, yoga, photography, donuts </li>
                  <li>Siblings (describe relationship): None</li>
                  <li>Spouse (describe relationship): Single</li>
                  <li>Pets: Tiger (a little dog)</li>
                  <li>Significant Others (describe relationship): none currently</li>
                  <li>Relationship skills: </li>
                  <li>Foreign languages spoken: none</li>
                  <li>Father works in networking technology. Writes software.</li>
                  <li>Friend: Luca Chiereghin</li>
              </ul>
              </SwiperSlide>
              <SwiperSlide>
                  <p>Physical Characteristics</p>
              <ul className={styles.secTextList}>
                  <li>Height: 5’8 ft / 172 cm</li>
                  <li>Weight: 127</li>
                  <li>Race: Mixed race</li>
                  <li>Eye Color: Hazel </li>
                  <li>Hair Color: Dark brown</li>
                  <li>Glasses or contact lenses? None</li>
                  <li>Skin color: Light skin</li>
                  <li>Shape of Face: Square face</li>
                  <li>Distinguishing features: </li>
                  <li>How does he/she dress?:  Boho, flowy</li>
                  <li>Mannerisms:</li>
                  <li>Habits: (smoking, drinking etc.) occasional drinking, social drinking</li>
                  <li>Health:</li>
                  <li>Hobbies: yoga, light running, beginner kickboxing</li>
                  <li>Favorite Sayings:</li>
                  <li>Speech patterns:</li>
                  <li>Disabilities:</li>
                  <li>Style (Elegant, shabby etc.):</li>
                  <li>Greatest flaw:</li>
                  <li>Best quality:</li>
                  <li>Sport team favorites: Yankees, Chicago Blackhawks</li>
              </ul>
              </SwiperSlide>
              <SwiperSlide>
                  <p>Intellectual / Mental / Attributes and Attitudes</p>
              <ul className={styles.secTextList}>
                  <li>Educational Background: BS in biology, now getting an AAS in dental hygiene</li>
                  <li>Intelligence Level: high</li>
                  <li>Any Mental Illnesses?: prone to minor anxiety</li>
                  <li>Learning Experiences:</li>
                  <li>Character's short-term goals in life: become a dental hygienist </li>
                  <li>Character's long-term goals in life:</li>
                  <li>How does Character see himself/herself?</li>
                  <li>How does Character believe he/she is perceived by others?</li>
                  <li>How self-confident is the character?</li>
                  <li>Does the character seem ruled by emotion or logic or some combination thereof?</li>
                  <li>What would most embarrass this character?</li>
              </ul>
              </SwiperSlide>
              <SwiperSlide>
                  <p>Emotional Characteristics</p>
              <ul className={styles.secTextList}>
                  <li>Strengths/Weaknesses: Ice cream</li>
                  <li>Introvert or Extrovert?: Extrovert</li>
                  <li>How does the character deal with anger?: Isolate self from others, go to gym</li>
                  <li>With sadness?</li>
                  <li>With conflict?</li>
                  <li>With change?</li>
                  <li>With loss?</li>
                  <li>What does the character want out of life?</li>
                  <li>What would the character like to change in his/her life?</li>
                  <li>What motivates this character?</li>
                  <li>What frightens this character?</li>
                  <li>What makes this character happy?</li>
                  <li>Is the character judgmental of others?</li>
                  <li>Is the character generous or stingy?</li>
                  <li>Is the character generally polite or rude?</li>
              </ul>
              </SwiperSlide>
              <SwiperSlide>
                  <p>Spiritual Characteristics</p>
              <ul className={styles.secTextList}>
                  <li>Does the character believe in God? Yesish a bit buddha</li>
                  <li>What are the character's spiritual beliefs? </li>
                  <li>Is religion or spirituality a part of this character's life?</li>
                  <li>If so, what role does it play?</li>
              </ul>
              </SwiperSlide>
              </Swiper>
          </div>
      </div>
      </motion.div>

      <motion.div variants={fadeInUp}>
      <div>
      <h2>User Journey Social Proof</h2>
      <Swiper
          speed={400}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
              320: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                  width: 310
              },
              1200: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                  width: 960
              }
          }}
          >
              <SwiperSlide>
                  <Image
                  src="/img/side-project/surveillance/jessieNguyen-socialMedia.jpg"
                  alt="Mockup of python page"
                  width={1080}
                  height={629}
                  quality={100}
                  layout="responsive"
                  loading="lazy"
                  />
              </SwiperSlide>
              <SwiperSlide>
                  <Image
                  src="/img/side-project/surveillance/jessieNguyen-Journey.jpg"
                  alt="Mockup of python page"
                  width={1080}
                  height={629}
                  quality={100}
                  layout="responsive"
                  loading="lazy"
                  />
              </SwiperSlide>
          </Swiper>
      </div>
      </motion.div>


                             <motion.div variants={fadeInUp}>
                                <div className={styles.flipSwitch}>
                                  <h2>URL</h2>
                                  <ul>
                                    <RelatedCTA
                                      url="https://artahack.io/projects/surveillance-culture/"
                                      title="Art-A-Hack Alumni (Summer 2015)"
                                      content="https://artahack.io/projects/surveillance-culture/"
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

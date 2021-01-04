import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'

import Layout from '../../../components/Layout/Layout'
import styles from '../../../styles/Report.module.css'

function ProjectIndex() {
    const { t } = useTranslation('sideProject')
  return <Layout>
      <Head>
          <title>Side Project | {t('title_02')} | Llegó Julio</title>
          <meta name='twitter:url' content='https://llegojulio.com/side-project/surveillance' />
          <meta property='og:url' content='https://llegojulio.com/side-project/surveillance' />

          <meta property='og:image' content='https://llegojulio.com/img/side-project/surveillance/jessieNguyen-Moodboard.jpg' />
          <meta name='twitter:image' content='https://llegojulio.com/img/side-project/surveillance/jessieNguyen-Moodboard.jpg' />

          <meta property='og:title' content='Surveillance Culture - Modernity Identity and Security | Llegó Julio' />
          <meta name='twitter:title' content='Surveillance Culture - Modernity Identity and Security | Llegó Julio' />

          <meta name="description" content="A social experiment using the top social media channels to farm users sensitive data" key="description"/>
          <meta property='og:description' content='A social experiment using the top social media channels to farm users sensitive data' />
          <meta name='twitter:description' content='A social experiment using the top social media channels to farm users sensitive data' />

          <link rel="canonical" href="https://llegojulio.com/side-project/surveillance" />
          <link rel="alternate" href="https://llegojulio.com/en-us/side-project/surveillance/" hreflang="en-us" />
          <link rel="alternate" href="https://llegojulio.com/es-us/side-project/surveillance/" hreflang="es-us" />
          </Head>
    <motion.div 
    initial={{ y: 600, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -600, opacity: 0 }}>
        <div className={styles.mainIndex}>
            <div className={styles.mainCenterCont}>
                <div className={styles.flipSwitch}>
                    <div>
                        <h2>{t('title_02')}</h2>
                        <p>{t('content_02')}</p>
                    </div>
                    <div className={styles.secExit}>
                        <Link href="/side-project">
                            <a alt="Page Exit">
                                <span>Close page</span>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={styles.flipSwitch}>
                    <h3>{t('concept_02')}</h3>
                    <p>{t('conceptContent_02')}</p>
                </div>
                <div>
                    <h3>The butterfly effect</h3>
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
                            quality={20}
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
                            quality={30}
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
                            quality={50}
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
                            quality={50}
                            layout="responsive"
                            loading="lazy"
                            />
                        </SwiperSlide>
                    </Swiper>                    
                </div>
                
                <div className={styles.flipSwitch}>
                    <h3>{t('character_02')}</h3>
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
                        <p>Demographics</p>
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

                <div className={styles.flipSwitch}>
                    <h3>{t('userJourney_02')}</h3>
                    {/* <div>
                        <p>{t('userJourneyContent_02')}</p>
                    </div> */}
                </div>

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
                            quality={20}
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
                            quality={20}
                            layout="responsive"
                            loading="lazy"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* <div className={styles.flipSwitch}>
                    <h3>Social Engineering by asking questions</h3>
                    <div>
                        <p>List of Question</p>
                    </div>
                </div> */}
                
                <div className={styles.flipSwitch}>
                    <h3>URL</h3>
                    <a href="https://www.youtube.com/watch?v=ZTbdu-VR59U" target="_blank">Art-A-Hack 2015 - Final Presentations - Surveillance Culture - Youtube</a>
                </div>
            </div>
        </div>          
    </motion.div>
  </Layout>
}

export async function getServerSideProps(context) {
    return {
        props: {},
    }
}

export default ProjectIndex
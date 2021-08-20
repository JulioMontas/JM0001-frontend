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
          <title>Side Project | {t('title_02')} | Julio Montás</title>
          <meta name='twitter:url' content='https://juliomontas.com/side-project/surveillance/' />
          <meta property='og:url' content='https://juliomontas.com/side-project/surveillance/' />
          <meta property='og:image' content='https://juliomontas.com/img/side-project/surveillance/jessieNguyen-Moodboard.jpg' />
          <meta name='twitter:image' content='https://juliomontas.com/img/side-project/surveillance/jessieNguyen-Moodboard.jpg' />
          <meta property='og:title' content='Surveillance Culture - Modernity Identity and Security | Julio Montás' />
          <meta name='twitter:title' content='Surveillance Culture - Modernity Identity and Security | Julio Montás' />
          <meta name="description" content="A social experiment using the top social media channels to farm users sensitive data" key="description"/>
          <meta property='og:description' content='A social experiment using the top social media channels to farm users sensitive data' />
          <meta name='twitter:description' content='A social experiment using the top social media channels to farm users sensitive data' />
          <link rel="canonical" href="https://juliomontas.com/side-project/surveillance/" />
          <link rel="alternate" href="https://juliomontas.com/side-project/surveillance/" hreflang="en-us" />
          <link rel="alternate" href="https://juliomontas.com/es-us/side-project/surveillance/" hreflang="es-us" />
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
                                <span></span>
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
                    <ul className={styles.secTextList}>
                      <li><a href="https://www.youtube.com/watch?v=ZTbdu-VR59U" target="_blank">Art-A-Hack 2015 - Final Presentations - Surveillance Culture - Youtube</a></li>
                    </ul>
                </div>
                <div className={styles.flipSwitch}>
                    <h3>More Projects</h3>
                    <ul>
            <li className={styles.relatedLink}>
                <Link href="/side-project/hellocode">
                  <a alt={t('title_01')}>
                    <h4>{t('title_01')}</h4>
                    <span>
                      <small>{t('content_01')}</small>
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" id="Layer_1">
                        <g clip-path="url(#clip0)">
                          <path d="M12.3125 9.25H11.4375C11.3215 9.25 11.2102 9.29609 11.1281 9.37814C11.0461 9.46019 11 9.57147 11 9.6875V12.75H2.25V4H6.1875C6.30353 4 6.41481 3.95391 6.49686 3.87186C6.57891 3.78981 6.625 3.67853 6.625 3.5625V2.6875C6.625 2.57147 6.57891 2.46019 6.49686 2.37814C6.41481 2.29609 6.30353 2.25 6.1875 2.25H1.8125C1.4644 2.25 1.13056 2.38828 0.884422 2.63442C0.638281 2.88056 0.5 3.2144 0.5 3.5625L0.5 13.1875C0.5 13.5356 0.638281 13.8694 0.884422 14.1156C1.13056 14.3617 1.4644 14.5 1.8125 14.5H11.4375C11.7856 14.5 12.1194 14.3617 12.3656 14.1156C12.6117 13.8694 12.75 13.5356 12.75 13.1875V9.6875C12.75 9.57147 12.7039 9.46019 12.6219 9.37814C12.5398 9.29609 12.4285 9.25 12.3125 9.25ZM13.8438 0.5H10.3438C9.75941 0.5 9.46738 1.20848 9.87891 1.62109L10.8559 2.59809L4.19141 9.26012C4.13023 9.32108 4.08168 9.39353 4.04856 9.4733C4.01544 9.55307 3.99839 9.63859 3.99839 9.72496C3.99839 9.81133 4.01544 9.89685 4.04856 9.97662C4.08168 10.0564 4.13023 10.1288 4.19141 10.1898L4.81129 10.8086C4.87226 10.8698 4.9447 10.9183 5.02447 10.9514C5.10424 10.9846 5.18976 11.0016 5.27613 11.0016C5.3625 11.0016 5.44803 10.9846 5.52779 10.9514C5.60756 10.9183 5.68001 10.8698 5.74098 10.8086L12.4022 4.14547L13.3789 5.12109C13.7891 5.53125 14.5 5.24414 14.5 4.65625V1.15625C14.5 0.982202 14.4309 0.815282 14.3078 0.692211C14.1847 0.56914 14.0178 0.5 13.8438 0.5V0.5Z" fill="#F8E71C"/>
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="14" height="14" fill="white" transform="translate(0.5 0.5)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </a>
                </Link>
              </li>
              <li className={styles.relatedLink}>
                <Link href="/side-project/width">
                  <a alt={t('title_03')}>
                    <h4>{t('title_03')}</h4>
                    <span>
                      <small>{t('content_03')}</small>
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" id="Layer_1">
                        <g clip-path="url(#clip0)">
                          <path d="M12.3125 9.25H11.4375C11.3215 9.25 11.2102 9.29609 11.1281 9.37814C11.0461 9.46019 11 9.57147 11 9.6875V12.75H2.25V4H6.1875C6.30353 4 6.41481 3.95391 6.49686 3.87186C6.57891 3.78981 6.625 3.67853 6.625 3.5625V2.6875C6.625 2.57147 6.57891 2.46019 6.49686 2.37814C6.41481 2.29609 6.30353 2.25 6.1875 2.25H1.8125C1.4644 2.25 1.13056 2.38828 0.884422 2.63442C0.638281 2.88056 0.5 3.2144 0.5 3.5625L0.5 13.1875C0.5 13.5356 0.638281 13.8694 0.884422 14.1156C1.13056 14.3617 1.4644 14.5 1.8125 14.5H11.4375C11.7856 14.5 12.1194 14.3617 12.3656 14.1156C12.6117 13.8694 12.75 13.5356 12.75 13.1875V9.6875C12.75 9.57147 12.7039 9.46019 12.6219 9.37814C12.5398 9.29609 12.4285 9.25 12.3125 9.25ZM13.8438 0.5H10.3438C9.75941 0.5 9.46738 1.20848 9.87891 1.62109L10.8559 2.59809L4.19141 9.26012C4.13023 9.32108 4.08168 9.39353 4.04856 9.4733C4.01544 9.55307 3.99839 9.63859 3.99839 9.72496C3.99839 9.81133 4.01544 9.89685 4.04856 9.97662C4.08168 10.0564 4.13023 10.1288 4.19141 10.1898L4.81129 10.8086C4.87226 10.8698 4.9447 10.9183 5.02447 10.9514C5.10424 10.9846 5.18976 11.0016 5.27613 11.0016C5.3625 11.0016 5.44803 10.9846 5.52779 10.9514C5.60756 10.9183 5.68001 10.8698 5.74098 10.8086L12.4022 4.14547L13.3789 5.12109C13.7891 5.53125 14.5 5.24414 14.5 4.65625V1.15625C14.5 0.982202 14.4309 0.815282 14.3078 0.692211C14.1847 0.56914 14.0178 0.5 13.8438 0.5V0.5Z" fill="#F8E71C"/>
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="14" height="14" fill="white" transform="translate(0.5 0.5)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </a>
                </Link>
              </li>
              <li className={styles.relatedLink}>
                <Link href="/side-project/colors">
                  <a alt={t('title_05')}>
                    <h4>{t('title_05')}</h4>
                    <span>
                      <small>{t('content_05')}</small>
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" id="Layer_1">
                        <g clip-path="url(#clip0)">
                          <path d="M12.3125 9.25H11.4375C11.3215 9.25 11.2102 9.29609 11.1281 9.37814C11.0461 9.46019 11 9.57147 11 9.6875V12.75H2.25V4H6.1875C6.30353 4 6.41481 3.95391 6.49686 3.87186C6.57891 3.78981 6.625 3.67853 6.625 3.5625V2.6875C6.625 2.57147 6.57891 2.46019 6.49686 2.37814C6.41481 2.29609 6.30353 2.25 6.1875 2.25H1.8125C1.4644 2.25 1.13056 2.38828 0.884422 2.63442C0.638281 2.88056 0.5 3.2144 0.5 3.5625L0.5 13.1875C0.5 13.5356 0.638281 13.8694 0.884422 14.1156C1.13056 14.3617 1.4644 14.5 1.8125 14.5H11.4375C11.7856 14.5 12.1194 14.3617 12.3656 14.1156C12.6117 13.8694 12.75 13.5356 12.75 13.1875V9.6875C12.75 9.57147 12.7039 9.46019 12.6219 9.37814C12.5398 9.29609 12.4285 9.25 12.3125 9.25ZM13.8438 0.5H10.3438C9.75941 0.5 9.46738 1.20848 9.87891 1.62109L10.8559 2.59809L4.19141 9.26012C4.13023 9.32108 4.08168 9.39353 4.04856 9.4733C4.01544 9.55307 3.99839 9.63859 3.99839 9.72496C3.99839 9.81133 4.01544 9.89685 4.04856 9.97662C4.08168 10.0564 4.13023 10.1288 4.19141 10.1898L4.81129 10.8086C4.87226 10.8698 4.9447 10.9183 5.02447 10.9514C5.10424 10.9846 5.18976 11.0016 5.27613 11.0016C5.3625 11.0016 5.44803 10.9846 5.52779 10.9514C5.60756 10.9183 5.68001 10.8698 5.74098 10.8086L12.4022 4.14547L13.3789 5.12109C13.7891 5.53125 14.5 5.24414 14.5 4.65625V1.15625C14.5 0.982202 14.4309 0.815282 14.3078 0.692211C14.1847 0.56914 14.0178 0.5 13.8438 0.5V0.5Z" fill="#F8E71C"/>
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="14" height="14" fill="white" transform="translate(0.5 0.5)"/>
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </a>
                </Link>
              </li>
            </ul>
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

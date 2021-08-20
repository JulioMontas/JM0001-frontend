import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import ReactPlayer from "react-player"
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Layout from '../../../components/Layout/Layout'
import styles from '../../../styles/Report.module.css'

function CaseStudyIndex() {
  const { t } = useTranslation('caseStudy')
  return <Layout>
    <Head>
      <title>Adorama - eCommerce | Julio Montás</title>
      <meta name='twitter:url' content='https://juliomontas.com/case-study/0/' />
      <meta property='og:url' content='https://juliomontas.com/case-study/0/' />
      <meta property='og:image' content='https://juliomontas.com/img/pendulum/pendulum_instagram.jpg' />
      <meta name='twitter:image' content='https://juliomontas.com/img/pendulum/pendulum_instagram.jpg' />
      <meta property='og:title' content='Adorama - eCommerce | Julio Montás' />
      <meta name='twitter:title' content='Adorama - eCommerce | Julio Montás' />
      <meta name="description" content="Adorama - eCommerce" key="description"/>
      <meta property='og:description' content='Adorama - eCommerce' />
      <meta name='twitter:description' content='Adorama - eCommerce' />
      <link rel="canonical" href="https://juliomontas.com/case-study/0/" />
      <link rel="alternate" href="https://juliomontas.com/case-study/0/" hreflang="en-us" />
      <link rel="alternate" href="https://juliomontas.com/es-us/case-study/0/" hreflang="es-us" />
      </Head>
      <motion.div
      initial={{ y: 600, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -600, opacity: 0 }}>
        <div className={styles.mainIndex}>
          <div className={styles.mainCenterCont}>
            <div className={styles.flipSwitch}>
              <h2>Adorama - eCommerce</h2>
              <div className={styles.secExit}>
                <Link href="/case-study">
                  <a alt="Page Exit">
                    <span></span>
                  </a>
                </Link>
              </div>
            </div>

            <div className={styles.flipSwitch}>
              <h3>&#128466; {t('overview')}</h3>
              <p>{t('overviewContent_00')}</p>
            </div>
            <div>
                <Image
                  src="/img/case-study/00/Inventory_management.jpg"
                  alt="Inventory management"
                  width={1917}
                  height={1056}
                  quality={100}
                  layout="responsive"
                  loading="lazy"
                />
            </div>

            <div className={styles.flipSwitch}>
              <h3>&#128640; Background</h3>
              <p>{t('backgroundContent_00')}
                <ul className={styles.secTextList}>
                  <li>{t('backgroundContent_00_a')}</li>
                  <li>{t('backgroundContent_00_b')}</li>
                </ul>
              </p>
            </div>

            <h3>Brand promotional educational microsite</h3>
            <div className={styles.dosFotos}>
             <section>
               <Image
                 src="/img/case-study/00/raw_mobile.jpg"
                 alt="Mobile view of raw mockup"
                 width={320}
                 height={3003}
                 quality={100}
                 layout="responsive"
                 loading="lazy"
                />
              </section>
              <section>
                <Image
                  src="/img/case-study/00/raw_desktop.jpg"
                  alt="Desktop view of raw mockup"
                  width={1870}
                  height={3871}
                  quality={100}
                  layout="responsive"
                  loading="lazy"
                 />
              </section>
            </div>

            <div className={styles.flipSwitch}>
              <h3>&#128640; Customer Satisfaction</h3>
              <p>{t('customerSatisfaction_00')}
                <ul className={styles.secTextList}>
                  <li>{t('customerSatisfaction_00_a')}</li>
                  <li>{t('customerSatisfaction_00_b')}</li>
                  <li>{t('customerSatisfaction_00_c')}</li>
                  <li>{t('customerSatisfaction_00_d')}</li>
                  <li>{t('customerSatisfaction_00_e')}</li>
                  <li>{t('customerSatisfaction_00_f')}</li>
                  <li>{t('customerSatisfaction_00_g')}</li>
                </ul>
              </p>
            </div>

            <div className={styles.blurtImages}>
                <Image
                  src="/img/case-study/00/flow.png"
                  alt="flowchart"
                  width={1600}
                  height={1360}
                  quality={100}
                  layout="responsive"
                  loading="lazy"
                 />
              </div>

              <div className={styles.flipSwitch}>
                <h3>&#128466; Products</h3>
                <ul className={styles.secTextList}>
                  <li><b>Adorama.com</b> {t('productList_00_a')}</li>
                  <li><b>SunnySports.com</b> {t('productList_00_b')}</li>
                  <li><b>AdoramaRentals.com</b> {t('productList_00_c')}</li>
                  <li><b>LeisurePro.com</b> {t('productList_00_d')}</li>
                </ul>
              </div>

              <div className={styles.flipSwitch}>
                <h3>More Case Study</h3>
                <ul>
                  <li className={styles.relatedLink}>
                    <Link href="/case-study/1">
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
                    <Link href="/case-study/2">
                      <a alt={t('title_02')}>
                        <h4>{t('title_02')}</h4>
                        <span>
                          <small>{t('content_02')}</small>
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
                    <Link href="/case-study/3">
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
                </ul>
              </div>

          </div>
        </div>
      </motion.div>
  </Layout>
}

export default CaseStudyIndex

import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import Head from 'next/head'

import Layout from '../../../components/Layout/Layout'
import styles from '../../../styles/Report.module.css'

function ProjectIndex() {
  return <Layout>
      <Head>
          <title>Meliorem: Cultivate Your Passion | Llegó Julio</title>
          <meta name='twitter:url' content='https://llegojulio.com/project/meliorem' />
          <meta property='og:url' content='https://llegojulio.com/project/meliorem' />

          <meta property='og:image' content='https://llegojulio.com/img/project/meliorem/meliorem-02.png' />
          <meta name='twitter:image' content='https://llegojulio.com/img/project/meliorem/meliorem-02.png' />

          <meta property='og:title' content='Meliorem: Cultivate Your Passion | Llegó Julio' />
          <meta name='twitter:title' content='Meliorem: Cultivate Your Passion | Llegó Julio' />

          <meta name="description" content="Reward self task manager to stimulate your existence" key="description"/>
          <meta property='og:description' content='Reward self task manager to stimulate your existence' />
          <meta name='twitter:description' content='Reward self task manager to stimulate your existence' />

          <link rel="canonical" href="https://llegojulio.com/project/meliorem" />
          <link rel="alternate" href="https://llegojulio.com/project/meliorem" hrefLang="en-us" />
      </Head>
    <motion.div 
    initial={{ y: 600, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -600, opacity: 0 }}>
        <div className={styles.mainIndex}>
            <div className={styles.mainCenterCont}>
                <div className={styles.flipSwitch}>
                    <div>
                        <h2>Meliorem Cultivating Your Passion to Level Up</h2>
                        <p>Productivity App, Dopamine Stimulator, 2016</p>
                    </div>
                    <div className={styles.secExit}>
                        <Link href="/project">
                            <a><span>Close page</span></a>
                        </Link>
                    </div>
                </div>
                <div className={styles.flipSwitch}>
                    <h3>Concept</h3>
                    <p>Reward self task manager to stimulate your existence</p>
                </div>
                <div>
                    <h3>UI Design</h3>
                    <Image
                    src="/img/project/meliorem/projectManagementTracker-Mockup00A.jpg"
                    alt="Mockup of python page"
                    width={1440}
                    height={1267}
                    quality={50}
                    layout="responsive"
                    loading="eager"
                    />
                    <p>First Concept UI</p>
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
                            spaceBetween: 10,
                            width: 700
                        }
                    }}
                    >
                        <SwiperSlide>
                            <Image
                            src="/img/project/meliorem/meliorem-01.png"
                            alt="Mockup of python page"
                            width={1080}
                            height={1080}
                            quality={20}
                            layout="responsive"
                            loading="lazy"
                            />
                            <p>Mobile: Login</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                            src="/img/project/meliorem/meliorem-02.png"
                            alt="Mockup of python page"
                            width={1080}
                            height={1080}
                            quality={50}
                            layout="responsive"
                            loading="lazy"
                            />
                             <p>Mobile: Task Dashboard</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                            src="/img/project/meliorem/meliorem-03.png"
                            alt="Mockup of python page"
                            width={1080}
                            height={1080}
                            quality={50}
                            layout="responsive"
                            loading="lazy"
                            />
                             <p>Mobile: List of Task</p>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>          
    </motion.div>
  </Layout>
}

export default ProjectIndex
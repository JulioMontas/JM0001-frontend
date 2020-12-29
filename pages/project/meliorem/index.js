import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
import Head from 'next/head'

import Layout from '../../../components/Layout/Layout'
import styles from '../../../styles/CaseStudy.module.css'

function ProjectIndex() {
  return <Layout>
      <Head>
          <title>MELIOREM Reward task to stimulate your existence | App Project</title>
          <meta name="author" content="Julio Montas"/>
          <meta name="keywords" content="App Project, CSS, JavaScript"/>
          <meta name="description" content="La la la la la"/>
      </Head>
    <motion.div 
    initial={{ y: 600, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -600, opacity: 0 }}>
        <div className={styles.mainIndex}>
            <div className={styles.mainCenterCont}>
                <div className={styles.flipSwitch}>
                    <div>
                        <h1>MELIOREM Cultivate Your Passion</h1>
                        <p>Productivity App, Dopamine Stimulator, 2016</p>
                    </div>
                    <div className={styles.secExit}>
                        <Link href="/project">
                            <a><span>Close page</span></a>
                        </Link>
                    </div>
                </div>
                <div className={styles.flipSwitch}>
                    <h2>&#128173; Concept</h2>
                    <p>Reward self task manager to stimulate your existence</p>
                </div>
                <div>
                    <h2>&#127968; UI Design</h2>
                    <Image
                    src="/img/project/meliorem/projectManagementTracker-Mockup00A.jpg"
                    alt="Mockup of python page"
                    width={1440}
                    height={1267}
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
                            />
                            <p>Mobile: Login</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                            src="/img/project/meliorem/meliorem-02.png"
                            alt="Mockup of python page"
                            width={1080}
                            height={1080}
                            />
                             <p>Mobile: Task Dashboard</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                            src="/img/project/meliorem/meliorem-03.png"
                            alt="Mockup of python page"
                            width={1080}
                            height={1080}
                            />
                             <p>Mobile: List of Task</p>
                        </SwiperSlide>
                    </Swiper>
                </div>
                {/* <div className={styles.flipSwitch}>
                    <h2>&#128173; Demo</h2>
                    <a href="https://width.herokuapp.com">Click Here!</a>
                </div> */}
            </div>
        </div>          
    </motion.div>
  </Layout>
}

export default ProjectIndex
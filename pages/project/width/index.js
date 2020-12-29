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
          <title>Width Take Over the Screen | Llegó Julio</title>
          <meta name='twitter:url' content='https://llegojulio.com/project/width' />
          <meta property='og:url' content='https://llegojulio.com/project/width' />

          <meta property='og:image' content='https://llegojulio.com/img/project/width/width_BothPlayer_1080.gif' />
          <meta name='twitter:image' content='https://llegojulio.com/img/project/width/width_BothPlayer_1080.gif' />

          <meta property='og:title' content='Width Take Over the Screen | Llegó Julio' />
          <meta name='twitter:title' content='Width Take Over the Screen | Llegó Julio' />

          <meta name="description" content="A two-player game in which you must defeat your opponents by clicking to take over the screen" key="description"/>
          <meta property='og:description' content='A two-player game in which you must defeat your opponents by clicking to take over the screen' />
          <meta name='twitter:description' content='A two-player game in which you must defeat your opponents by clicking to take over the screen' />

          <link rel="canonical" href="https://llegojulio.com/project/width" />
          <link rel="alternate" href="https://llegojulio.com/project/width" hrefLang="en-us" />
      </Head>
    <motion.div 
    initial={{ y: 600, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -600, opacity: 0 }}>
        <div className={styles.mainIndex}>
            <div className={styles.mainCenterCont}>
                <div className={styles.flipSwitch}>
                    <div>
                        <h1>Width Take Over The Screen</h1>
                        <p>Web Game, Vanilla JavaScript, 2016</p>
                    </div>
                    <div className={styles.secExit}>
                        <Link href="/project">
                            <a><span>Close page</span></a>
                        </Link>
                    </div>
                </div>
                <div className={styles.flipSwitch}>
                    <h2>Concept</h2>
                    <p>A two-player game in which you must defeat your opponents by clicking to take over the screen.</p>
                </div>
                <div>
                    <h2>&#127968; UI Design</h2>          
                    <Image
                    src="/img/project/width/width_Sketch_Iphone.png"
                    alt="Mockup of python page"
                    width={1280}
                    height={735}
                    />
                    <p>iPhone Sketch</p>
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
                            width: 800
                        }
                    }}
                    >
                        <SwiperSlide>
                            <Image
                            src="/img/project/width/width_Wireframe_01_1280.png"
                            alt="Mockup of python page"
                            width={1280}
                            height={800}
                            />
                            <p>Mockup: Level One</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                            src="/img/project/width/width_Wireframe_02_1280.png"
                            alt="Mockup of python page"
                            width={1280}
                            height={800}
                            />
                            <p>Level Three</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                            src="/img/project/width/width_Wireframe_03_1280.png"
                            alt="Mockup of python page"
                            width={1280}
                            height={800}
                            />
                            <p>Level Six</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                            src="/img/project/width/width_Wireframe_04_1280.png"
                            alt="Mockup of python page"
                            width={1280}
                            height={800}
                            />
                            <p>Level Twelve</p>
                        </SwiperSlide>
                    </Swiper>
                    <Image
                    src="/img/project/width/width_BothPlayer_1080.gif"
                    alt="Mockup of python page"
                    width={1080}
                    height={629}
                    />
                    <p>Gameplay</p>
                </div>
                <div className={styles.flipSwitch}>
                    <h2>URL</h2>
                    <a href="https://width.herokuapp.com" target="_blank">Prototype</a>
                </div>
            </div>
        </div>          
    </motion.div>
  </Layout>
}

export default ProjectIndex
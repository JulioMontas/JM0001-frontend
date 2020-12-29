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
          <title>COLORS Learn The Basic | Full Stack Designer</title>
          <meta name="author" content="Julio Montas"/>
          <meta name="description" content="Toddler App | Figure out a device for toddler to learn the basic of colors pronunciation and visual recognition memory" key="description"/>
          <meta property='og:title' content='Julio Montas | COLORS Learn The Basic' />
          <meta property='og:description' content='Toddler App | Figure out a device for toddler to learn the basic of colors pronunciation and visual recognition memory' />
          <meta property='og:image' content='https://llegojulio.com/img/project/colors/slide_03.png' />


          <meta name='twitter:title' content='Julio Montas | COLORS Learn The Basic' />
          <meta name='twitter:description' content='Toddler App | Figure out a device for toddler to learn the basic of colors pronunciation and visual recognition memory' />
          <meta name='twitter:image' content='https://llegojulio.com/img/project/colors/slide_03.png' />
      </Head>
    <motion.div 
    initial={{ y: 600, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -600, opacity: 0 }}>
        <div className={styles.mainIndex}>
            <div className={styles.mainCenterCont}>
                <div className={styles.flipSwitch}>
                    <div>
                        <h1>COLORS Learn the Basic</h1>
                        <p>Toddler App, Education, 2016</p>
                    </div>
                    <div className={styles.secExit}>
                        <Link href="/project">
                            <a><span>Close page</span></a>
                        </Link>
                    </div>
                </div>
                <div className={styles.flipSwitch}>
                    <h2>&#128173; App Concept</h2>
                    <p>Figure out a device for toddler to learn the basic of colors pronunciation and visual recognition memory</p>
                </div>
                <div>
                    <h2>&#127968; UI Design</h2>
                    <Image
                    src="/img/project/colors/slide_03.png"
                    alt="Mockup of python page"
                    width={1080}
                    height={1080}
                    />
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
                            width: 950
                        }
                    }}
                    >
                        <SwiperSlide>
                            <Image
                            src="/img/project/colors/slide_04.png"
                            alt="Mockup of python page"
                            width={1080}
                            height={1080}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                            src="/img/project/colors/slide_05.png"
                            alt="Mockup of python page"
                            width={1080}
                            height={1080}
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
                {/* <div className={styles.flipSwitch}>
                    <h2>&#128173; Demo</h2>
                    <div>
                        <ul>
                            <li><a href="https://width.herokuapp.com">Website</a></li>
                            <li><a href="https://width.herokuapp.com">WebAR</a></li>
                            <li><a href="https://width.herokuapp.com">WebVR</a></li>
                        </ul>    
                    </div>
                </div> */}
            </div>
        </div>          
    </motion.div>
  </Layout>
}

export default ProjectIndex
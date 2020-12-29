import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import Head from 'next/head'

import Layout from '../../../components/Layout/Layout'
import styles from '../../../styles/CaseStudy.module.css'

function ProjectIndex() {
  return <Layout>
      <Head>
          <title>Basic Color Fundamentals - Simple Fun App for Toddlers | Llegó Julio</title>          
          <meta name='twitter:url' content='https://llegojulio.com/project/colors' />
          <meta property='og:url' content='https://llegojulio.com/project/colors' />

          <meta property='og:image' content='https://llegojulio.com/img/project/colors/slide_03.png' />
          <meta name='twitter:image' content='https://llegojulio.com/img/project/colors/slide_03.png' />

          <meta property='og:title' content='Basic Color Fundamentals - Simple Fun App for Toddlers | Llegó Julio' />
          <meta name='twitter:title' content='Basic Color Fundamentals - Simple Fun App for Toddlers | Llegó Julio' />

          <meta name="description" content="Figure out a device for toddler to learn the basic of colors pronunciation and visual recognition memory" key="description"/>
          <meta property='og:description' content='Figure out a device for toddler to learn the basic of colors pronunciation and visual recognition memory' />
          <meta name='twitter:description' content='Figure out a device for toddler to learn the basic of colors pronunciation and visual recognition memory' />

          <link rel="canonical" href="https://llegojulio.com/project/colors" />
          <link rel="alternate" href="https://llegojulio.com/project/colors" hreflang="en-us" />
      </Head>
    <motion.div 
    initial={{ y: 600, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -600, opacity: 0 }}>
        <div className={styles.mainIndex}>
            <div className={styles.mainCenterCont}>
                <div className={styles.flipSwitch}>
                    <div>
                        <h1>Basic Color Fundamentals - Simple Fun App for Toddlers</h1>
                        <p>Teaching kids, Education, 2016</p>
                    </div>
                    <div className={styles.secExit}>
                        <Link href="/project">
                            <a><span>the new generations of students for eLearning</span></a>
                        </Link>
                    </div>
                </div>
                <div className={styles.flipSwitch}>
                    <h2>&#128173; The new generations of students for eLearning</h2>
                    <p>Teaching toddler how to learn the basic of colors pronunciation and visual recognition memory</p>
                </div>
                <div>
                    <h2>&#127968; Mobile App Concept designs</h2>
                    <Image
                    src="/img/project/colors/slide_03.png"
                    alt="Choose a color to learn"
                    width={1080}
                    height={1080}
                    quality={20}
                    layout="responsive"
                    loading="eager"
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
                            alt="Mockup design of the green color"
                            width={1080}
                            height={1080}
                            quality={20}
                            layout="responsive"
                            loading="lazy"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                            src="/img/project/colors/slide_05.png"
                            alt="Mockup design of the blue color"
                            width={1080}
                            height={1080}
                            quality={20}
                            layout="responsive"
                            loading="lazy"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>          
    </motion.div>
  </Layout>
}

export default ProjectIndex
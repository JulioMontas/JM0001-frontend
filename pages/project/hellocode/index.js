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
          <title>HELLOCO.DE The Home For Programming Languages | App Project</title>
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
                        <h1>HELLOCO.DE The Home for Programming Languages</h1>
                        <p>Collective Memory, Education, 2012</p>
                    </div>
                    <div className={styles.secExit}>
                        <Link href="/project">
                            <a><span>Close page</span></a>
                        </Link>
                    </div>
                </div>
                <div className={styles.flipSwitch}>
                    <h2>&#128173; Concept</h2>
                    <p>List of programming languages that have been developed from 1950–1979, 1980–1999, and 2000 to the present.</p>
                </div>
                <div>
                    <h2>&#127968; UI Design</h2>
                    <Image
                    src="/img/project/hc/CABulM1UwAAPf4a.png"
                    alt="Mockup of python page"
                    width={1421}
                    height={1897}
                    />
                    <p>Language Page</p>
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
                            spaceBetween: 20,
                            width: 800
                        }
                    }}
                    >
                        <SwiperSlide>
                            <Image
                            src="/img/project/hc/hc02.gif"
                            alt="Mockup of python page"
                            width={940}
                            height={718}
                            />
                            <p>List of programming languages</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                            src="/img/project/hc/hc01.gif"
                            alt="Mockup of python page"
                            width={1422}
                            height={768}
                            />
                            <p>Landing page: The background was animated using Processing.js to show how past languages are distance but still connected</p>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className={styles.flipSwitch}>
                    <h2>&#128173; URL</h2>
                    <div>
                        <ul>
                            <li><a href="https://bfacd.parsons.edu/2013/helloco-de">The New School BFA Thesis 2013</a></li>
                            <li><a href="https://twitter.com/msdev/status/485951332105195520">Microsoft Developer Tweet</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>          
    </motion.div>
  </Layout>
}

export default ProjectIndex
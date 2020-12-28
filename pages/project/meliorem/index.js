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
          <title>WIDTH Protect Your Side to Take Over the Screen.</title>
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
                        <h1>Meliorem: Reward task to stimulate your existence</h1>
                        <p>Web App, JavaScript, 2021</p>
                    </div>
                    <div className={styles.secExit}>
                        <Link href="/project">
                            <a><span>Close page</span></a>
                        </Link>
                    </div>
                </div>
                <div className={styles.flipSwitch}>
                    <h2>&#128173; Concept</h2>
                    <p>Text Text Text Text Text</p>
                </div>
                <div>
                    <h2>&#127968; Design Visual</h2>
                    <p>Landing Page</p>
                    <Image
                    src="/img/project/meliorem/"
                    alt="Mockup of python page"
                    width={1080}
                    height={629}
                    />                    
                </div>
                <div className={styles.flipSwitch}>
                    <h2>&#128173; Demo</h2>
                    <a href="https://width.herokuapp.com">Click Here!</a>
                </div>
            </div>
        </div>          
    </motion.div>
  </Layout>
}

export default ProjectIndex
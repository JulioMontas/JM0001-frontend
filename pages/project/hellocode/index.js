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
          <title>Web Project | HelloCo.de: The Home For Programming Languages</title>
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
                        <h1>HelloCo.de: The Home for Programming Languages</h1>
                        <p>2012-2014, Collective Memory, Education</p>
                    </div>
                    <div className={styles.secExit}>
                        <Link href="/project">
                            <a><span>Close page</span></a>
                        </Link>
                    </div>
                </div>
                <div className={styles.flipSwitch}>
                    <h2>&#128173; Concept</h2>
                    <p>Helloco.de is an archive of the expansive list of programming languages that have been developed from 1950–1979, 1980– 1999, and 2000 to the present. It is meant for users to be able to explore the relationship between past and present programming languages and how they are all connected with one another.</p>
                </div>
                <div>
                    <h2>&#127968; Design Visual</h2>
                    <p>Landing Page</p>
                    <Image
                    src="/img/project/hc/hc01.gif"
                    alt="Mockup of python page"
                    width={1422}
                    height={768}
                    />
                    <p>Language Page</p>
                    <Image
                    src="/img/project/hc/CABulM1UwAAPf4a.png"
                    alt="Mockup of python page"
                    width={1421}
                    height={1897}
                    />
                    <p>Listing Component</p>
                    <Image
                    src="/img/project/hc/hc02.gif"
                    alt="Mockup of python page"
                    width={940}
                    height={718}
                    />
                </div>
                <div className={styles.flipSwitch}>
                    <h2>&#128173; Text</h2>
                    <p>Text</p>
                </div>
            </div>
        </div>          
    </motion.div>
  </Layout>
}

export default ProjectIndex
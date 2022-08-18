import Head from 'next/head'
import Link from 'next/link'
import { motion } from "framer-motion"
import styles from '../styles/Report.module.css'
import useTranslation from 'next-translate/useTranslation'
import NavBar from '../components/NavBar'
import Container from '../components/Container'

const easing = [.6, -.05, .01, .99];

const fadeInUp = {
  initial:{
    y: 60,
    opacity: 0
  },
  animate:{
    y: 0,
    opacity: 1,
    transition:{
      duration: .6,
      ease: easing
    }
  }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function MePage({ data }) {
  return (
    <>
      <Head>
      <title>Julio Montas - About Me</title>
      <meta name='twitter:url' content='https://juliomontas.com/about-me' />
      <meta property='og:url' content='https://juliomontas.com/about-me' />
      <meta property='og:image' content='https://juliomontas.com/me.png' />
      <meta name='twitter:image' content='https://juliomontas.com/me.png' />
      <meta property='og:title' content='Julio montas - About Me' />
      <meta name='twitter d:title' content='Julio montas - About Me' />
      <meta name="description" content="Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC." key="description"/>
      <meta property='og:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
      <meta name='twitter:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
      <link rel="canonical" href="https://juliomontas.com/about-me" />
      <link rel="alternate" href="https://juliomontas.com/about-me" hreflang="en-us" />
      <link rel="alternate" href="https://juliomontas.com/es-us/about-me" hreflang="es-us" />
      </Head>
      <NavBar />
      <div className={styles.backgroundColor}>
        <Container>
          <motion.div exit={{y: -300, opacity: 0 }} initial='initial' animate='animate'>
            <motion.div variants={stagger}>
              <div className={styles.mainIndex}>
                <div className={styles.mainCenterCont}>
                  <div className={styles.gridContainer}>

                    <motion.div variants={fadeInUp} style={{marginTop:"2em"}}>
                      <div className={styles.flipSwitch}>
                        <div>
                          <h1>About Me</h1>
                          <p>UX/UI Designer • Product Designer • Creative Technologist</p>
                        </div>
                      </div>
                    </motion.div>


                    <motion.div variants={fadeInUp}>
                      <div className={styles.flipSwitch}>
                        <h2>History</h2>
                        <div>
                          <p style={{marginBottom:"1.5em"}}>I’m a multi-talented experience designer that can also write lines of code in CSS, HTML, JavasScript and <s>PHP</s>. Originally from the Dominican Republic now based in New York City. I’ve created over a dozen website and app designed to streamline sales and marketing activities for startup, luxury fashion and beauty brands.</p>
                          <p style={{marginBottom:"1.5em"}}>My design style is minimal, timeless and clean approach that look to combine functionality with elegance. To focus 💯 on the user experience navigation and speciation. Using modern design methodology and tools to later push to the cloud using the necessary development stack.</p>
                          <p style={{marginBottom:"1.5em"}}>My favorite art movement are Swedish and Suprematism, if I’m not looking at a new media gallery I’m probably DJing Minimal House / Dub Techno / Afro House.</p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                      <div className={styles.flipSwitch}>
                        <h2>Education</h2>
                        <ul className={styles.secTextList}>
                          <li><p><b>AAS -</b> CHAVÓN La Escuela de Diseño</p></li>
                          <li><p><b>BFA -</b> The New School (50% scholarships)</p></li>
                        </ul>
                      </div>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                      <div className={styles.flipSwitch}>
                        <h2>Certification</h2>
                        <ul className={styles.secTextList}>
                          <li><p><b>JavaScript Full Stack -</b> General Assembly NYC (3 months bootcamp)</p></li>
                          <li><p><b>AR/VR Engineer -</b> CUNY Lehman College</p></li>
                        </ul>
                      </div>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                      <div className={styles.flipSwitch}>
                        <h2>New media art</h2>
                        <ul className={styles.secTextList}>
                          <li><p><b>ART-A-HACK Summer 2015 -</b> Surveillance Culture</p></li>
                        </ul>
                      </div>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                      <div className={styles.flipSwitch}>
                        <h2>Design tools</h2>
                        <ul className={styles.secTextList}>
                          <li><p>InVision</p></li>
                          <li><p>Figma or Sketch</p></li>
                          <li><p>Google Analytics + Hotjar</p></li>
                        </ul>
                      </div>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                      <div className={styles.flipSwitch}>
                        <h2>Development Stack</h2>
                        <ul className={styles.secTextList}>
                          <li><p>CSS3 + HTML5</p></li>
                          <li><p>GraphQL</p></li>
                          <li><p>Github</p></li>
                          <li><p>Agile</p></li>
                          <li><p>JavaScript using Next.js or Gatsby.js</p></li>
                        </ul>
                      </div>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                      <div className={styles.flipSwitch}>
                        <h2>&#128466; Language</h2>
                        <ul className={styles.secTextList}>
                          <li><p>Spanish</p></li>
                          <li><p>English</p></li>
                        </ul>
                      </div>
                    </motion.div>

                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </>
  );
}

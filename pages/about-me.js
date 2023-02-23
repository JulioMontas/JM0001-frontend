import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion"
import styles from '../styles/Report.module.css'
import useTranslation from 'next-translate/useTranslation'
import NavBar from '../components/NavBar'
import Container from '../components/Container'
import ReactPlayer from 'react-player/youtube'
import LinkCTA from '../components/LinkCTA'
import TechStack from '../components/TechStack'

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
                        <h2>Selfie</h2>
                        <Image
                          src="/me-02.jpg"
                          alt="Desktop view of raw mockup"
                          width={720}
                          height={890}
                          quality={100}
                          layout="responsive"
                          loading="lazy"
                         />
                      </div>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                      <div className={styles.flipSwitch}>
                        <h2>History</h2>
                        <div>
                          <p style={{marginBottom:"1.5em"}}>
                            I’m a multi-talented visual designer that also code in CSS, HTML, JavaScript (React). I’ve created over a dozen website and apps designed to streamline sales and marketing activities for startup, luxury fashion and beauty brands.
                          </p>
                          <p style={{marginBottom:"1.5em"}}>
                            My design style is minimal, timeless and clean approach that look to combine abstraction with functionalism. To focus on the user experience navigation and speciation. Using modern design methodology and tools while using the necessary development stack.
                          </p>
                          <p style={{marginBottom:"1.5em"}}>
                            My favorite design style are Swiss design and Suprematism / Constructivism (Russian art), When I'm not designing or coding, I'm visiting some art gallery or DJing minimal style music.
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                      <div className={styles.flipSwitch}>
                        <h2>Form</h2>
                        <div>
                          <a href={`https://forms.gle/jY13zQ6CcLoBfeMM9`} target="_blank">Contact me</a> or <a href="https://calendly.com/vrplay/julio-montas-website-or-app?" target="_blank">book a consultation</a>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                      <div className={styles.flipSwitch}>
                        <h2>Visual Design tools</h2>
                        <ul className={styles.secTextList}>
                          <li><p>InVision</p></li>
                          <li><p>Figma or Sketch</p></li>
                          <li><p>Google Analytics + Hotjar</p></li>
                          {/* <li>
                            <Link href={`https://dribbble.com/juliomontas`}>
                              <a>Dribbble</a>
                            </Link>
                          </li> */}
                        </ul>
                      </div>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                      <div className={styles.flipSwitch}>
                        <h2>Development Stack</h2>
                        <ul className={styles.secTextList}>
                          <li><p>CSS3 + HTML5</p></li>
                          <li><p>JavaScript (ReactJS)</p></li>
                          <li><p>Framer Motion</p></li>
                          <li><p>GraphQL</p></li>
                          {/* <li>
                            <Link href={`https://github.com/JulioMontas`}>
                              <a>Github</a>
                            </Link>
                          </li> */}
                        </ul>
                      </div>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                      <div className={styles.flipSwitch}>
                        <h2>New media art</h2>
                        <ul className={styles.secTextList}>
                          <li>
                            <p>
                              <b>ART-A-HACK Summer 2015 -</b> Surveillance Culture
                            </p>
                            <ReactPlayer width='410px' url='https://youtu.be/ZTbdu-VR59U' />
                          </li>
                        </ul>
                      </div>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                      <div className={styles.flipSwitch}>
                        <h2>Certification / Develoment</h2>
                        <ul className={styles.secTextList}>
                          <li><p><b>JavaScript Full Stack</b></p> <p>General Assembly NYC (3 months bootcamp)</p></li>
                          <li><p><b>Augmented Reality (AR) & Virtual Reality (VR) Engineer</b></p> <p>CUNY Lehman College</p></li>
                        </ul>
                      </div>
                    </motion.div>

                    <motion.div variants={fadeInUp}>
                      <div className={styles.flipSwitch}>
                        <h2>Education / Fine Arts</h2>
                        <ul className={styles.secTextList}>
                          <li><p><b>AAS -</b> CHAVÓN La Escuela de Diseño</p> <p>Communication Design</p></li>
                          <li><p><b>BFA -</b> The New School (50% scholarships)</p> <p>Communication Design</p></li>
                        </ul>
                      </div>
                    </motion.div>

                    <TechStack />
                    
                    <motion.div>
                      <h2>Social Links</h2>
                      <div className="LinkList">
            {/*
            <LinkCTA
              theme="card-false"
              title="Hello Code"
              summary="Archive of programming languages that have been developed from past to present to improve how software architects choose their stack."
              url="/side-project/hellocode-the-home-for-programming-languages"
            />
            */}
            <LinkCTA
              theme="card-true"
              title="SoundCloud"
              summary="Playing Minimal House / Techno"
              url="https://soundcloud.com/juliomontas"
              alt="Dj playing music"
              png="png/dj-playing-music.png"
            />
            {/*
            <LinkCTA
              theme="card-false"
              title="Meliorem"
              summary="Reward self task manager to stimulate your existence"
              url="side-project/meliorem-cultivating-your-passion-to-level-up"
            />
            */}
            <LinkCTA
              theme="card-true"
              title="Unsplas"
              summary="Open source photography"
              url="https://unsplash.com/@juliomontas"
              alt="camera"
              png="png/camera.png"
            />
            {/*
            <LinkCTA
              theme="card-false"
              title="Surveillance Culture"
              summary="A social experiment using the top social media channels to farm users sensitive data"
              url="side-project/surveillance-culture"
            />
            */}
            <LinkCTA
              theme="card-true"
              title="Github"
              summary="Code portfolio in JavaScript and other programming languages"
              url="https://github.com/JulioMontas"
              alt="Creating new facility using VR technology"
              png="png/creating-new-facility-using-vr-technology.png"
            />
            {/*
            <LinkCTA
              theme="card-false"
              title="Width - Take Over the Screen"
              summary="A two-player game in which you must defeat your opponents by clicking to take over the screen."
              url="side-project/width-take-over-the-screen"
            />
            */}
            <LinkCTA
              theme="card-true"
              title="Dribbble"
              summary="UI Design Portfolio"
              url="https://dribbble.com/juliomontas"
              alt="House plant for decoration"
              png="png/house-plant-for-decoration.png"
            />
            {/*
            <LinkCTA
              theme="card-false"
              title="COLOR"
              summary="Teaching toddler how to learn the basic of colors pronunciation and visual recognition memory."
              url="side-project/basic-color-fundamentals"
            />
            */}
            <LinkCTA
              theme="card-true"
              title="CodePen"
              summary="Front-end Code Snippet"
              url="https://codepen.io/JulioMontas/"
              alt="Blockchain Platform in Virtual Reality"
              png="png/blockchain-platform-in-virtual-reality.png"
            />
            {/*
            <LinkCTA
              theme="card-false"
              title="COLOR"
              summary="Teaching toddler how to learn the basic of colors pronunciation and visual recognition memory."
              url="side-project/basic-color-fundamentals"
            />
            */}
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

import Container from '../components/Container'
import styles from './TechStack.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'

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

const svg = {
  google:"svg/icon/google-analytics.svg",
  github:"svg/icon/github.svg",
  datocms:"svg/icon/datocms.svg",
  wordpress:"svg/icon/wordpress.svg",
  sketch:"svg/icon/sketch.svg",
  figma:"svg/icon/figma.svg",
  docker:"svg/icon/docker.svg",
  css:"svg/icon/css.svg",
  linux:"svg/icon/linux.svg",
  react:"svg/icon/react.svg",
  html5:"svg/icon/html5.svg",
  nextjs:"svg/icon/nextjs.svg",
  jira:"svg/icon/jira.svg",
  javascript:"svg/icon/javascript.svg",
  terminal:"svg/icon/terminal.svg",
  shopify:"svg/icon/shopify.svg",
  apple:"svg/icon/apple.svg",
  webxr:"svg/icon/webxr.svg",
  gatsby:"svg/icon/gatsby.svg",
  nodejs:"svg/icon/nodejs.svg",
  p5js:"svg/icon/p5js.svg",
  invision:"svg/icon/invision.svg",
  sketch:"svg/icon/sketch.svg",
  pwa:"svg/icon/Progressive_Web_Apps_Logo.svg",
  mongodb:"svg/icon/mongodb.svg",
  raspberryPi:"svg/icon/raspberry_pi_logo.svg",
}

const TechStack = (props) => {
  return(
    <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
      <h3 className={styles.title}>
        My JAMstack
      </h3>
      <motion.div variants={stagger} className={styles.main}>

      <motion.div variants={fadeInUp} className="card">
        <div className={styles.icon}>
          <div className={styles.svg}>
          <img
            src={svg.figma}
            alt="Figma logo"
          />
          </div>
          <p className={styles.text}>
            Figma
          </p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="card">
        <div className={styles.icon}>
          <div className={styles.svg}>
          <img
            src={svg.nextjs}
            alt="NextJS logo"
          />
          </div>
          <p className={styles.text}>
            NextJS
          </p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="card">
        <div className={styles.icon}>
          <div className={styles.svg}>
          <img
            src={svg.gatsby}
            alt="Gatsby logo"
          />
          </div>
          <p className={styles.text}>
            Gatsby
          </p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="card">
        <div className={styles.icon}>
          <div className={styles.svg}>
          <img
            src={svg.datocms}
            alt="Data CMS logo"
          />
          </div>
          <p className={styles.text}>
            Data CMS
          </p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="card">
        <div className={styles.icon}>
          <div className={styles.svg}>
          <img
            src={svg.shopify}
            alt="Shopify logo"
          />
          </div>
          <p className={styles.text}>
            Shopify
          </p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="card">
        <div className={styles.icon}>
          <div className={styles.svg}>
          <img
            src={svg.webxr}
            alt="WebXR logo"
          />
          </div>
          <p className={styles.text}>
            WebXR
          </p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="card">
        <div className={styles.icon}>
          <div className={styles.svg}>
          <img
            src={svg.pwa}
            alt="PWA logo"
          />
          </div>
          <p className={styles.text}>
            PWA
          </p>
        </div>
      </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default TechStack

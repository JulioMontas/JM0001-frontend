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
        My Tech Stack
      </h3>
      <motion.div variants={stagger} className={styles.main}>

      <motion.div variants={fadeInUp} className="card">
        <div className={styles.icon}>
          <div className={styles.svg}>
          <img
            src={svg.sketch}
            alt="Sketch logo"
          />
          </div>
          <p className={styles.text}>
            Sketch
          </p>
        </div>
      </motion.div>

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
            src={svg.invision}
            alt="InVision logo"
          />
          </div>
          <p className={styles.text}>
            InVision
          </p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="card">
        <div className={styles.icon}>
          <div className={styles.svg}>
          <img
            src={svg.html5}
            alt="HTML5 logo"
          />
          </div>
          <p className={styles.text}>
            HTML5
          </p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="card">
        <div className={styles.icon}>
          <div className={styles.svg}>
          <img
            src={svg.css}
            alt="CSS3 logo"
          />
          </div>
          <p className={styles.text}>
            CSS3
          </p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="card">
        <div className={styles.icon}>
          <div className={styles.svg}>
          <img
            src={svg.javascript}
            alt="JavaScript logo"
          />
          </div>
          <p className={styles.text}>
            JavaScript
          </p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="card">
        <div className={styles.icon}>
          <div className={styles.svg}>
          <img
            src={svg.react}
            alt="ReactJS logo"
          />
          </div>
          <p className={styles.text}>
            ReactJS
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
            src={svg.github}
            alt="Github logo"
          />
          </div>
          <p className={styles.text}>
            Github
          </p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="card">
        <div className={styles.icon}>
          <div className={styles.svg}>
          <img
            src={svg.docker}
            alt="Docker logo"
          />
          </div>
          <p className={styles.text}>
            Docker
          </p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="card">
        <div className={styles.icon}>
          <div className={styles.svg}>
          <img
            src={svg.jira}
            alt="Jira logo"
          />
          </div>
          <p className={styles.text}>
            Jira
          </p>
        </div>
      </motion.div>

      <motion.div variants={fadeInUp} className="card">
        <div className={styles.icon}>
          <div className={styles.svg}>
            <img
              src={svg.google}
              alt="Google Analytics logo"
            />
          </div>
          <p className={styles.text}>
            Google Analytics
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
            src={svg.mongodb}
            alt="PWA logo"
          />
          </div>
          <p className={styles.text}>
            MongoDB
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
            src={svg.p5js}
            alt="P5js logo"
          />
          </div>
          <p className={styles.text}>
            P5js
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

      <motion.div variants={fadeInUp} className="card">
        <div className={styles.icon}>
          <div className={styles.svg}>
          <img
            src={svg.raspberryPi}
            alt="Raspberry Pi logo"
          />
          </div>
          <p className={styles.text}>
            Raspberry Pi
          </p>
        </div>
      </motion.div>

      </motion.div>
    </motion.div>
  );
};

export default TechStack

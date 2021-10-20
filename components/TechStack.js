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
  google:"svg/google-analytics.svg",
  github:"svg/github.svg",
  datocms:"svg/datocms.svg",
  wordpress:"svg/wordpress.svg",
  sketch:"svg/sketch.svg",
  figma:"svg/figma.svg",
  docker:"svg/docker.svg",
  css:"svg/css.svg",
  linux:"svg/linux.svg",
  react:"svg/react.svg",
  html5:"svg/html5.svg",
  nextjs:"svg/nextjs.svg",
  jira:"svg/jira.svg",
  javascript:"svg/javascript.svg",
  terminal:"svg/terminal.svg",
  shopify:"svg/shopify.svg",
  apple:"svg/apple.svg",
  webxr:"svg/webxr.svg",
  gatsby:"svg/gatsby.svg",
  nodejs:"svg/nodejs.svg",
  p5js:"svg/p5js.svg",
  invision:"svg/invision.svg",
  sketch:"svg/sketch.svg",
}

const TechStack = (props) => {
  return(
    <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
      <motion.div variants={stagger} className={styles.main}>

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
            src={svg.wordpress}
            alt="WordPress logo"
          />
          </div>
          <p className={styles.text}>
            WordPress
          </p>
        </div>
      </motion.div>

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
            src={svg.linux}
            alt="Linux logo"
          />
          </div>
          <p className={styles.text}>
            Linux
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
            src={svg.terminal}
            alt="Terminal logo"
          />
          </div>
          <p className={styles.text}>
            Terminal
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
            src={svg.apple}
            alt="Apple logo"
          />
          </div>
          <p className={styles.text}>
            Apple
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
            src={svg.gatsby}
            alt="Gatsby"
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
            src={svg.nodejs}
            alt="NodeJS logo"
          />
          </div>
          <p className={styles.text}>
            NodeJS
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
            src={svg.sketch}
            alt="Sketch logo"
          />
          </div>
          <p className={styles.text}>
            Sketch
          </p>
        </div>
      </motion.div>


      </motion.div>
    </motion.div>
  );
};

export default TechStack

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

const data = [
  {
    svg:"svg/icon/figma.svg",
    alt:"Figma logo",
    title:"Figma"
  },
  {
    svg:"svg/icon/datocms.svg",
    alt:"datocms logo",
    title:"DatoCMS"
  },
  {
    svg:"svg/icon/nextjs.svg",
    alt:"nextjs logo",
    title:"NextJS"
  },
  {
    svg:"svg/icon/css.svg",
    alt:"css logo",
    title:"CSS"
  },
  {
    svg:"svg/icon/html5.svg",
    alt:"html5 logo",
    title:"html5"
  },
  {
    svg:"svg/icon/javascript.svg",
    alt:"javascript logo",
    title:"javaScript"
  },
  {
    svg:"svg/icon/shopify.svg",
    alt:"shopify logo",
    title:"shopify"
  },
  {
    svg:"svg/icon/webxr.svg",
    alt:"webxr logo",
    title:"webxr"
  },
  {
    svg:"svg/icon/gatsby.svg",
    alt:"gatsby logo",
    title:"gatsby"
  },
  {
    svg:"svg/icon/Progressive_Web_Apps_Logo.svg",
    alt:"pwa logo",
    title:"PWA"
  },
]

const TechStack = (props) => {
  return(
    <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
      <h2 className={styles.title}>
        My Freelance Tech stack For fast and secure sites
      </h2>
      <motion.div variants={stagger} className={styles.main}>

      {data.map(data => (
        <motion.div variants={fadeInUp} className="card">
          <div className={styles.icon}>
            <div className={styles.svg}>
            <img
              src={data.svg}
              alt={data.alt}
            />
            </div>
            <h3 className={styles.text}>
              {data.title}
            </h3>
          </div>
        </motion.div>
      ))}

      </motion.div>
    </motion.div>
  );
};

export default TechStack

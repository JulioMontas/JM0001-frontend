import styles from './HeroSection.module.css'
import Container from '../components/Container'
import Image from 'next/image'
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
  github:"svg/icon/s-github.svg",
  dribbble:"svg/icon/s-dribbble.svg",
  instagram:"svg/icon/s-instagram.svg",
  residentAdvisor:"svg/icon/s-residentadvisor.svg",
}

const HeroSection = (props) => {
  return(
    <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
      <motion.div variants={stagger} className={styles.main}>

        <motion.div variants={fadeInUp} className='card'>
        <section className={styles.uno}>
          <Image
            src="/me.png"
            alt="self portrait wearing sunglasses indoors"
            width={200}
            height={200}
          />
          <h2 className={styles.title}>
            {props.title}
          </h2>
        </section>
        </motion.div>

        <motion.div variants={fadeInUp} className='card'>
        <section className={styles.dos}>
          <p className={styles.description}>
            {props.description}
          </p>
          <ul className={styles.socialLinks}>
            <li>
              <a href="https://github.com/JulioMontas" target="_blank">
                <img
                  src={svg.github}
                  alt="Github logo"
                />
              </a>
            </li>
            <li>
              <a href="https://dribbble.com/juliomontas" target="_blank">
                <img
                  src={svg.dribbble}
                  alt="dribbble logo"
                />
              </a>
            </li>
            <li>
              <a href="https://ra.co/dj/montas" target="_blank">
                <img
                  src={svg.residentAdvisor}
                  alt="Github logo"
                />
              </a>
            </li>
          </ul>
        </section>
        </motion.div>

      </motion.div>
    </motion.div>
  )
}

export default HeroSection;

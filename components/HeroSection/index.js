import styles from './HeroSection.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

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
            width={300}
            height={300}
          />
        </section>
        </motion.div>

        <motion.div variants={fadeInUp} className='card'>
        <section className={styles.dos}>
          <div className={styles.description}>
            <h1 className={styles.title}>
              {props.title}
            </h1>
            <p>Experience with early-stage startup, luxury fashion and beauty brands. Providing an all-inclusive design and development service tailored specifically to meet your needs.</p>
            <p>Helping entrepreneur and small business grow using design thinking strategy.  Alumni from The New School and Chavón La Escuela de Diseño.</p>
          </div>
        </section>
        </motion.div>

      </motion.div>
    </motion.div>
  )
}

export default HeroSection;

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

const FoooterSection = (props) => {
  return(
    <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
      <motion.div variants={stagger} className={styles.main}>

        <motion.div variants={fadeInUp} className='card'>
          Hello
        </motion.div>

        <motion.div variants={fadeInUp} className='card'>
          Hello, Again
        </motion.div>

      </motion.div>
    </motion.div>
  )
}
export default FoooterSection;

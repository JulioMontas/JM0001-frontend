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

const HeroSection = (props) => {
  return(
    <Container>
    <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
      <motion.div variants={stagger} className={styles.main}>

        <motion.div variants={fadeInUp} className='card'>
        <section>
          <Image
            src="/me.png"
            alt="self portrait wearing sunglasses indoors"
            width={200}
            height={200}
          />
          <h2>{props.title}</h2>
        </section>
        </motion.div>

        <motion.div variants={fadeInUp} className='card'>
        <section>
          <p>{props.description}</p>
        </section>
        </motion.div>

        </motion.div>
      </motion.div>
    </Container>
  )
}

export default HeroSection;

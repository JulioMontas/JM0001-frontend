import styles from './ThirdCol.module.css'
import Container from '../components/Container'
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

const ThirdCol = (props) => {
  const data = {
    firstSVG: props.firstSVG,
    secondSVG: props.secondSVG
  }
  return(
    <Container>
    <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
      <motion.div variants={stagger} className={styles.main}>

        <h2 className={styles.title}>
          {props.title}
        </h2>

        <motion.div variants={fadeInUp} className='card'>
        <img
          className={styles.firstCol}
          src={data.firstSVG}
          alt=""
        />
        </motion.div>

        <motion.div variants={fadeInUp} className='card'>
        <div className={styles.secondCol}>
          <ul>
            <li>
              <p><b>{props.firstListTitle}</b> {props.firstList}</p>
            </li>
            <li>
              <p><b>{props.secondListTitle}</b> {props.secondList}</p>
            </li>
            <li>
              <p><b>{props.lastListTitle}</b> {props.lastList}</p>
            </li>
          </ul>
        </div>
        </motion.div>

        <motion.div variants={fadeInUp} className='card'>
        <img
          className={styles.lastCol}
          src={data.secondSVG}
          alt=""
        />
        </motion.div>

        </motion.div>
      </motion.div>
    </Container>
  );
}

export default ThirdCol;

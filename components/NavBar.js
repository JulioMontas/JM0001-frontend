import styles from './NavBar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
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

const NavBar = (props) => {
  let router = useRouter()
  return(
    <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
      <motion.div variants={stagger} className={styles.header}>

      <motion.div variants={fadeInUp} className='card'>
        <Link href="/">
          <a alt="Julio Montás" rel="alternate" hreflang="en">
            <h1 className={styles.title}>Julio montas</h1>
          </a>
        </Link>
      </motion.div>

      </motion.div>
    </motion.div>
  )
};

export default NavBar;

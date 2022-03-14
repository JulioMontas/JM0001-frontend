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
            <p>Designing and developing an entire project from scratch can be overwhelming. That's why our company is your one stop shop for all your design and development needs.</p>
            <p>From the early design concept stage to final project execution, we will work with you every step of the way to ensure success on your website, eCommerce store, CMS or Mobile App Prototype</p>
            <p>
              <Link href={`/contact-us`}>
                <a>Contact us</a>
              </Link> for a free consultation!
            </p>
          </div>
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
                  alt="Dribbble logo"
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/juliomontas/" target="_blank">
                <img
                  src={svg.instagram}
                  alt="Instagram logo"
                />
              </a>
            </li>
            <li>
              <a href="https://ra.co/dj/montas" target="_blank">
                <img
                  src={svg.residentAdvisor}
                  alt="Resident Advisor logo"
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

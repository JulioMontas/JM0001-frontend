import styles from './NavBar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Container from '../components/Container'

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
    <Container>
    <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate' className='NavBar'>
      <motion.div variants={stagger}>

      <motion.div variants={fadeInUp}>
      <div className={styles.header}>
        <Link href="/">
          <a alt="homepage button">
            Home
          </a>
        </Link>

        <Link href="/">
          <a alt="homepage button">
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.2216 5.18852L3.50028 11.9683V19.2856C3.50028 19.4751 3.56173 19.6568 3.67112 19.7908C3.78051 19.9247 3.92887 20 4.08356 20L8.16877 19.9871C8.32296 19.9861 8.47058 19.9104 8.57933 19.7766C8.68809 19.6427 8.74914 19.4615 8.74914 19.2727V14.9994C8.74914 14.81 8.8106 14.6283 8.91998 14.4943C9.02937 14.3603 9.17773 14.2851 9.33243 14.2851H11.6656C11.8203 14.2851 11.9686 14.3603 12.078 14.4943C12.1874 14.6283 12.2489 14.81 12.2489 14.9994V19.2696C12.2486 19.3636 12.2635 19.4567 12.2927 19.5436C12.322 19.6306 12.3649 19.7096 12.4191 19.7761C12.4733 19.8427 12.5376 19.8955 12.6085 19.9316C12.6794 19.9676 12.7554 19.9862 12.8322 19.9862L16.9159 20C17.0706 20 17.219 19.9247 17.3284 19.7908C17.4377 19.6568 17.4992 19.4751 17.4992 19.2856V11.9634L10.7794 5.18852C10.7004 5.11054 10.6019 5.06801 10.5005 5.06801C10.399 5.06801 10.3006 5.11054 10.2216 5.18852V5.18852ZM20.8385 9.79663L17.7908 6.71995V0.535774C17.7908 0.393678 17.7448 0.257402 17.6627 0.156925C17.5807 0.0564476 17.4694 0 17.3534 0H15.3119C15.1958 0 15.0846 0.0564476 15.0025 0.156925C14.9205 0.257402 14.8744 0.393678 14.8744 0.535774V3.77765L11.6105 0.488894C11.2973 0.173224 10.9043 0.000631028 10.4986 0.000631028C10.093 0.000631028 9.69997 0.173224 9.38675 0.488894L0.158763 9.79663C0.114465 9.84147 0.0778157 9.89656 0.0509086 9.95876C0.0240015 10.021 0.00736429 10.089 0.00194751 10.1591C-0.00346927 10.2292 0.00244057 10.2999 0.0193394 10.3671C0.0362382 10.4344 0.0637947 10.497 0.100435 10.5512L1.03005 11.9353C1.06659 11.9897 1.11153 12.0347 1.16231 12.0678C1.21309 12.101 1.2687 12.1215 1.32596 12.1282C1.38322 12.135 1.441 12.1279 1.49601 12.1072C1.55102 12.0866 1.60216 12.0529 1.64651 12.008L10.2216 3.35796C10.3006 3.27998 10.399 3.23745 10.5005 3.23745C10.6019 3.23745 10.7004 3.27998 10.7794 3.35796L19.3548 12.008C19.3991 12.0529 19.4501 12.0867 19.5051 12.1074C19.56 12.1281 19.6177 12.1353 19.6749 12.1287C19.7321 12.122 19.7877 12.1016 19.8385 12.0687C19.8893 12.0357 19.9343 11.9909 19.9709 11.9366L20.9005 10.5525C20.9371 10.498 20.9645 10.4351 20.9812 10.3675C20.9979 10.3 21.0036 10.229 20.9978 10.1588C20.9921 10.0886 20.975 10.0204 20.9477 9.95824C20.9203 9.89609 20.8832 9.84117 20.8385 9.79663V9.79663Z" fill="#FFFC00"/>
          </svg>
          </a>
        </Link>

      </div>
      </motion.div>

      </motion.div>
    </motion.div>
    </Container>
  )
};

export const getStaticProps = async () => ({
  props: {
    namespacesRequired: ['common'],
  }
})

export default NavBar;

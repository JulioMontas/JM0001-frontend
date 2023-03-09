import { motion } from "framer-motion"
import Head from 'next/head'
import Container from '../../components/Container'
import NavBar from '../../components/NavBar'
import NewMedia from '../../components/NewMedia'
import Styles from '../../styles/NewMedia.module.css'

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

function NewMediaPage({ posts }) {
  return <Container>
  <NavBar />
  <Head>
    <title>New Media - Julio Montás</title>
    <meta name='twitter:url' content='https://juliomontas.com/new-media/' />
    <meta property='og:url' content='https://juliomontas.com/new-media/' />
    <meta property='og:image' content='https://juliomontas.com/me.png' />
    <meta name='twitter:image' content='https://juliomontas.com/me.png' />
    <meta property='og:title' content='New Media - Julio Montas' />
    <meta name='twitter:title' content='New Media - Julio Montas' />
    <meta name="description" content="" key="description"/>
    <meta property='og:description' content='' />
    <meta name='twitter:description' content='' />
    <link rel="canonical" href="https://juliomontas.com/new-media/" />
    <link rel="alternate" href="https://juliomontas.com/new-media/" hreflang="en-us" />
    <link rel="alternate" href="https://juliomontas.com/es-us/new-media/" hreflang="es-us" />
  </Head>
    <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
      <motion.div  variants={stagger}>

        <div className={Styles.newMediaIndex}>
          <NewMedia
            title="New Media"
          />
          <div>
            <p>
              © {new Date().getFullYear()} Julio Montás. All Rights Reserved.
            </p>
          </div>
        </div>

      </motion.div>
    </motion.div>
  </Container>
}

export default NewMediaPage

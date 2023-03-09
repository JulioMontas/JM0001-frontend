import { motion } from "framer-motion"
import Head from 'next/head'
import Container from '../../components/Container'
import NavBar from '../../components/NavBar'
import CaseStudiesWrap from '../../components/CaseStudiesWrap'
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

function caseStudy({ posts }) {
  return <Container>
  <NavBar />
  <Head>
    <title>Case Study - Julio Montás</title>
    <meta name='twitter:url' content='https://juliomontas.com/case-study/' />
    <meta property='og:url' content='https://juliomontas.com/case-study/' />
    <meta property='og:image' content='https://juliomontas.com/me.png' />
    <meta name='twitter:image' content='https://juliomontas.com/me.png' />
    <meta property='og:title' content='Case Study | UI Developer • Interaction Designer' />
    <meta name='twitter:title' content='Case Study | UI Developer • Interaction Designer' />
    <meta name="description" content="Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC." key="description"/>
    <meta property='og:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
    <meta name='twitter:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
    <link rel="canonical" href="https://juliomontas.com/case-study/" />
    <link rel="alternate" href="https://juliomontas.com/case-study/" hreflang="en-us" />
    <link rel="alternate" href="https://juliomontas.com/es-us/case-study/" hreflang="es-us" />
  </Head>
    <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
      <motion.div  variants={stagger}>
        
        <div className={Styles.newMediaIndex}>
          <CaseStudiesWrap
            title="Case Studies"
          />
        </div>

      </motion.div>
    </motion.div>
  </Container>
}

export default caseStudy

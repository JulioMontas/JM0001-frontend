import { motion } from "framer-motion"
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Container from '../../components/Container'
import NavBar from '../../components/NavBar'

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

function Services({ posts }) {
  const { t } = useTranslation('caseStudy')
  return <Container>
  <NavBar />
  <Head>
    <title>Services - UI Developer • Interaction Designer | Julio Montas</title>
    <meta name='twitter:url' content='https://juliomontas.com/services/' />
    <meta property='og:url' content='https://juliomontas.com/services/' />
    <meta property='og:image' content='https://juliomontas.com/me.png' />
    <meta name='twitter:image' content='https://juliomontas.com/me.png' />
    <meta property='og:title' content='Services | UI Developer • Interaction Designer' />
    <meta name='twitter:title' content='Services | UI Developer • Interaction Designer' />
    <meta name="description" content="Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC." key="description"/>
    <meta property='og:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
    <meta name='twitter:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
    <link rel="canonical" href="https://juliomontas.com/services/" />
    <link rel="alternate" href="https://juliomontas.com/services/" hreflang="en-us" />
    <link rel="alternate" href="https://juliomontas.com/es-us/services/" hreflang="es-us" />
  </Head>
    <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
      <motion.div  variants={stagger}>

        <div>
          Services
        </div>
        
      </motion.div>
    </motion.div>
  </Container>
}

export default Services

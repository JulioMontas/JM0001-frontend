import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import Head from 'next/head'
import Container from '../../components/Container'
import CaseStudiesWrap from '../../components/CaseStudiesWrap'
import ContactForm from '../../components/ContactForm'
import NavBar from '../../components/NavBar'
import styles from '../../styles/CaseStudy.module.css'

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

function shopPage({ posts }) {
  return <Container>
  <NavBar />
  <Head>
    <title>Shop - UI Developer • Interaction Designer | Julio Montas</title>
    <meta name='twitter:url' content='https://juliomontas.com/shop/' />
    <meta property='og:url' content='https://juliomontas.com/shop/' />
    <meta property='og:image' content='https://juliomontas.com/me.png' />
    <meta name='twitter:image' content='https://juliomontas.com/me.png' />
    <meta property='og:title' content='Shop | UI Developer • Interaction Designer' />
    <meta name='twitter:title' content='Shop | UI Developer • Interaction Designer' />
    <meta name="description" content="Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC." key="description"/>
    <meta property='og:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
    <meta name='twitter:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
    <link rel="canonical" href="https://juliomontas.com/shop/" />
    <link rel="alternate" href="https://juliomontas.com/shop/" hreflang="en-us" />
    <link rel="alternate" href="https://juliomontas.com/es-us/shop/" hreflang="es-us" />
  </Head>
    <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
      <motion.div  variants={stagger}>
        <div style={{
          padding:'8em 0 0 0',
        }}>

          <h1>Shop Page</h1>

          <div>
            <button
              className="snipcart-add-item"
              data-item-id="1"
              data-item-name="Serverless CMS for Attorney SEO Website "
              data-item-price="150.00"
              data-item-url="/shop"
              data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
              data-item-image="/img/meliorem.png"
              data-item-file-guid="e9731a18-6e0c-4ffa-aa9a-30e4e5b28e1c"
              data-item-categories="develoment">
              Add to cart
            </button>
          </div>

        </div>
      </motion.div>
    </motion.div>
  </Container>
}

export default shopPage

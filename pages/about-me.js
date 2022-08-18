import Head from 'next/head'
import Link from 'next/link'
import { motion } from "framer-motion"
import stylesHome from '../styles/Homepage.module.css'
import useTranslation from 'next-translate/useTranslation'
import NavBar from '../components/NavBar'
import LinkList from '../components/LinkList'
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

export default function MePage({ data }) {
  return (
    <>
      <Head>
      <title>Julio Montas - About Me</title>
      <meta name='twitter:url' content='https://juliomontas.com/about-me' />
      <meta property='og:url' content='https://juliomontas.com/about-me' />
      <meta property='og:image' content='https://juliomontas.com/me.png' />
      <meta name='twitter:image' content='https://juliomontas.com/me.png' />
      <meta property='og:title' content='Julio montas - About Me' />
      <meta name='twitter d:title' content='Julio montas - About Me' />
      <meta name="description" content="Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC." key="description"/>
      <meta property='og:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
      <meta name='twitter:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
      <link rel="canonical" href="https://juliomontas.com/about-me" />
      <link rel="alternate" href="https://juliomontas.com/about-me" hreflang="en-us" />
      <link rel="alternate" href="https://juliomontas.com/es-us/about-me" hreflang="es-us" />
      </Head>
      <NavBar />
      <div className="backgroundColor">
        <Container>
        </Container>
      </div>
    </>
  );
}

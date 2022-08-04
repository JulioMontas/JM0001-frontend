import Link from 'next/link'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import Head from 'next/head'
import Container from '../../components/Container'
import CaseStudiesWrap from '../../components/CaseStudiesWrap'
import ContactForm from '../../components/ContactForm'
import NavBar from '../../components/NavBar'
import styles from './shop.module.css'
import { request } from "../../lib/datocms"
import { Image } from "react-datocms";

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

const HOMEPAGE_QUERY = `
query allProducts($limit: IntType) {
  allProducts(first: $limit) {
    id
    slug
    name
    price
    description(markdown: false)
    heroImage {
      responsiveImage(imgixParams: {fit: crop, w: "375", h: "280", auto: format}) {
        srcSet
        webpSrcSet
        sizes
        src
        width
        height
        aspectRatio
        alt
        title
        base64
        bgColor
      }
    }
  }
}`;
export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 }
  });
  return {
    props: { data }
  };
}

export default function Shop({ data }) {
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

          <div className={styles.fourColumn}>
            {data.allProducts.map(data => (
              <li key={data.id}>

              <Link href={`/shop/${encodeURIComponent(data.slug)}`}>
              <a>
                <div>
                <Image data={data.heroImage.responsiveImage} />
                </div>
                <h2>{data.name} | ${data.price}</h2>
                <p>{data.description}</p>
                </a>
              </Link>

                <button
                  className="snipcart-add-item"
                  data-item-id={data.id}
                  data-item-name={data.name}
                  data-item-price={data.price}
                  data-item-url={'/shop/' + data.slug}
                  data-item-description={data.description}
                  data-item-image={data.heroImage.url}
                  data-item-file-guid={data.guid}
                  data-item-categories="develoment">
                  Add to cart
                </button>
              </li>
            ))}
          </div>

        </div>
      </motion.div>
    </motion.div>
  </Container>
}

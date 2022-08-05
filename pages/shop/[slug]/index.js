// Product Detail Page (PDP)
// https://www.dynamicyield.com/glossary/product-detail-page/
// https://www.gorgias.com/blog/ecommerce-launch-checklist

import { request } from "../../../lib/datocms"
import { StructuredText, Image } from 'react-datocms';
import { useRouter } from 'next/router'
import { motion } from "framer-motion"
import Link from 'next/link'
import Head from 'next/head'
import Container from '../../../components/Container'
import NavBar from '../../../components/NavBar'
import styles from './slug.module.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

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

export async function getStaticPaths() {
  const data = await request({ query: `{ allProducts { slug } }` });

  return {
    paths: data.allProducts.map((post) => `/shop/${post.slug}`),
    fallback: false,
  };
}

const ALTICLE_QUERY = `
query MyQuery($slug: String) {
  product(filter: {slug: {eq: $slug}}) {
    id
    slug
    name
    price
    guid
    description(markdown: false)
    _publishedAt
    productDescription {
      value
    }
    category {
      id
      name
      slug
    }
    heroImage {
      responsiveImage(imgixParams: {fit: crop, w: "1200", h: "900", auto: format}) {
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
    gallery {
      responsiveImage(imgixParams: {fit: crop, w: "800", h: "400", auto: format}) {
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
    extraInfo(markdown: false)
  }
}
`;

export const getStaticProps = async ({ params }) => {
  const post = await request({
    query: ALTICLE_QUERY,
    variables: { slug: params.slug,},
  });
  return {
    props: {
      postData: post.product,
    },
  };
};

export default function ShopPost(props) {
  const { postData } = props;
  return <Container>
  <NavBar />
  <Head>
    <title>Shop | {postData.name}</title>
    <meta name='twitter:url' content={"https://juliomontas.com/shop/" + postData.slug} />
    <meta property='og:url' content={"https://juliomontas.com/shop/" + postData.slug} />
    <meta property='og:image' content='https://juliomontas.com/me.png' />
    <meta name='twitter:image' content='https://juliomontas.com/me.png' />
    <meta property='og:title' content={"Shop | " + postData.slug} />
    <meta name='twitter:title' content={"Shop | " + postData.slug} />
    <meta name="description" content={postData.description} key="description"/>
    <meta property='og:description' content={postData.description} />
    <meta name='twitter:description' content={postData.description} />
    <link rel="canonical" href={"https://juliomontas.com/shop/" + postData.slug} />
    <link rel="alternate" href={"https://juliomontas.com/shop/" + postData.slug} hreflang="en-us" />
    <link rel="alternate" href={"https://juliomontas.com/es-us/shop/" + postData.slug} hreflang="es-us" />
  </Head>
    <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
      <motion.div  variants={stagger}>
        <div style={{
          padding:'8em 0 0 0',
        }}>

        <motion.div variants={fadeInUp} className={styles.breadcrumbs}>
          <Link href="/Shop/"><a>Shop</a></Link> > <b style={{color:"rgba(255, 255, 255, 0.50)"}}>{postData.name}</b>
        </motion.div>

        <div className={styles.twoColumn}>
          <motion.div variants={fadeInUp}>
          <span className={styles.price}>${postData.price}</span>
            <Swiper
              style={{
                "--swiper-navigation-color": "#FFFC00",
                "--swiper-pagination-color": "#FFFC00",
              }}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              pagination={{ clickable: true }}
              speed={400}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                  width: 300
                },
                1200: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                  width: 1200
                }
              }}
              >
              {postData.gallery.map(data => (
                <SwiperSlide>
                  <Image data={data.responsiveImage} />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h1 className={styles.title}>{postData.name}</h1>
            <p className={styles.description}>{postData.description}</p>

            {/*  <StructuredText data={postData.productDescription} />  */}

            <button
              className="snipcart-add-item"
              data-item-id={postData.id}
              data-item-name={postData.name}
              data-item-price={postData.price}
              data-item-url={'https://juliomontas.com/shop/' + postData.slug}
              data-item-description={postData.description}
              data-item-image={postData.heroImage.url}
              data-item-file-guid={postData.guid}
              data-item-categories="develoment"
            >
              Add to cart
            </button>
          </motion.div>
        </div>

        <motion.div variants={fadeInUp} className={styles.extraInfo}>
        <div>
          <p
          style={{
            textAlign:"center",
          }}
          >
            Architecture Website - UI Design - Develoment
          </p>
          <hr style={{color:"#ffffff70", margin:"1em 0 1.5em"}}/>
          <Image data={postData.heroImage.responsiveImage} />
          <p>{postData.extraInfo}</p>
        </div>
        </motion.div>

        {/*
        <StructuredText data={postData.productDescription} />
        <pre>{JSON.stringify(postData, null, 2)}</pre>
        */}

        </div>
      </motion.div>
    </motion.div>
  </Container>
}

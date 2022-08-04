import { request } from "../../../lib/datocms"
import { Image } from "react-datocms"
import { useRouter } from 'next/router'
import { motion } from "framer-motion"
import Link from 'next/link'
import Head from 'next/head'
import Container from '../../../components/Container'
import NavBar from '../../../components/NavBar'
import styles from './slug.module.css'

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

        <div className={styles.twoColumn}>
          <div>
            <Image data={postData.heroImage.responsiveImage} />
          </div>
          <div>
            <h1>{postData.name}</h1>
            <span>${postData.price}.00</span>
            <p>{postData.description}</p>

            <button
              className="snipcart-add-item"
              data-item-id={postData.id}
              data-item-name={postData.name}
              data-item-price={postData.price}
              data-item-url={'/shop/' + postData.slug}
              data-item-description={postData.description}
              data-item-image={postData.heroImage.url}
              data-item-file-guid={postData.guid}
              data-item-categories="develoment">
              Add to cart
            </button>
          </div>
        </div>



        </div>
      </motion.div>
    </motion.div>
  </Container>
}

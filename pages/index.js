import Head from 'next/head'
import Link from 'next/link'
import stylesHome from '../styles/Homepage.module.css'
import useTranslation from 'next-translate/useTranslation'
import { Image } from "react-datocms"
import { request } from "../lib/datocms"
import HeroSection from '../components/HeroSection'
import CaseStudiesWrap from '../components/CaseStudiesWrap'
import SideProjectWrap from '../components/SideProjectWrap'
import TechStack from '../components/TechStack'
import Container from '../components/Container'
import ContactForm from '../components/ContactForm'

const HOMEPAGE_QUERY = `query MyQuery {
  allArticles {
    createdAt
    updatedAt
    id
    slug
    title
    summary(markdown: false)

    tag {
      title
    }
    coverImage {
      responsiveImage(imgixParams: { fit: crop, w: 300, h: 300, auto: format }) {
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
      }
    }
  }
}`;

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 5 }
  });
  return {
    props: {data}
  };
}

export default function Homepage({ data }) {
  return (
    <>
    <Head>
      <title>Julio Montas - UI Developer • Full Stack Designer</title>
      <meta name='twitter:url' content='https://juliomontas.com/' />
      <meta property='og:url' content='https://juliomontas.com/' />
      <meta property='og:image' content='https://juliomontas.com/me.png' />
      <meta name='twitter:image' content='https://juliomontas.com/me.png' />
      <meta property='og:title' content='Julio montas - UI Developer • Full Stack Designer' />
      <meta name='twitter d:title' content='Julio montas - UI Developer • Full Stack Designer' />
      <meta name="description" content="Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC." key="description"/>
      <meta property='og:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
      <meta name='twitter:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
      <link rel="canonical" href="https://juliomontas.com/" />
      <link rel="alternate" href="https://juliomontas.com/" hreflang="en-us" />
      <link rel="alternate" href="https://juliomontas.com/es-us/" hreflang="es-us" />
    </Head>
      <div className={stylesHome.main}>
      <Container>
        <HeroSection
          title="e-Commerce design and development"
        />
        <div className={stylesHome.spacePadding}>
          <CaseStudiesWrap
            title="Case Studies"
          />
        </div>
        <div className={stylesHome.spacePadding}>
          <TechStack />
        </div>
        <div className={stylesHome.spacePadding}>
          <SideProjectWrap
            title="Side Projects"
          />
        </div>
        <div className={stylesHome.spacePadding}>
          <ContactForm
            title="Contact Form"
          />
        </div>

        <div className={stylesHome.spacePadding}>
          <ul className={stylesHome.blogSec}>
            <h2>
              Blog ( Under Construction )
            </h2>
            {data.allArticles.map(data => (
              <li key={data.id}>
                <Link href={`/blog/${encodeURIComponent(data.slug)}`}>
                  <a>
                    <h2 className={stylesHome.blogSec__title}>{data.title}</h2>
                    <ul className={stylesHome.blogSec__tag}>
                      {data.tag.map(data => (
                        <li key={data.id}>
                        {data.title}
                        </li>
                      ))}
                    </ul>
                    <p className={stylesHome.blogSec__summary}>{data.summary}</p>
                  </a>
                 </Link>
              </li>
            ))}
          </ul>
        </div>

      </Container>
      </div>
    </>
  );
}

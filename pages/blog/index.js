import { request } from "../../lib/datocms"
import Head from 'next/head'
import { Image } from "react-datocms"
import Link from 'next/link'
import Container from '../../components/Container'

const HOMEPAGE_QUERY = `query MyQuery {
  allArticles {
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

export default function Blog({ data }) {
  return <Container>
  <Head>
    <title>Blog - UI Developer • Full Stack Designer | Julio Montás</title>
    <meta name='twitter:url' content='https://juliomontas.com/blog/' />
    <meta property='og:url' content='https://juliomontas.com/blog/' />
    <meta property='og:image' content='https://juliomontas.com/me.png' />
    <meta name='twitter:image' content='https://juliomontas.com/me.png' />
    <meta property='og:title' content='Blog - UI Developer • Full Stack Designer | Julio Montás' />
    <meta name='twitter:title' content='Blog - UI Developer • Full Stack Designer | Julio Montás' />
    <meta name="description" content="Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC." key="description"/>
    <meta property='og:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
    <meta name='twitter:description' content='Building Custom Website, eCommerce, CMS and Mobile App Prototype. Experience with Startup, Private Companies and Creative Agency. NYC.' />
    <link rel="canonical" href="https://juliomontas.com/blog/" />
    <link rel="alternate" href="https://juliomontas.com/blog/" hreflang="en-us" />
    <link rel="alternate" href="https://juliomontas.com/es-us/blog/" hreflang="es-us" />
  </Head>
    {data.allArticles.map(blogPost => (
      <li key={blogPost.id}>
        <Link href={`/blog/${encodeURIComponent(blogPost.slug)}`}>
          <a>
            <h2>{blogPost.title}</h2>
            <Image data={blogPost.coverImage.responsiveImage} />
          </a>
         </Link>
      </li>
    ))}
  </Container>
}

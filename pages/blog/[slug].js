import { useRouter } from 'next/router'
import { StructuredText } from "react-datocms"
import { Image } from "react-datocms"
import Head from 'next/head'
import Container from '../../components/Container'
import CaseStudiesWrap from '../../components/CaseStudiesWrap'
import SideProjectWrap from '../../components/SideProjectWrap'
import ContactForm from '../../components/ContactForm'
import { request } from "../../lib/datocms"
import styles from '../../styles/Report.module.css'

const PATHS_QUERY = `query MyQuery {
  allArticles {
    slug
  }
}`;

export const getStaticPaths = async () => {
  const slugQuery = await request({
    query: PATHS_QUERY,
  });

  let paths = [];
  slugQuery.allArticles.map((p) => paths.push(`/blog/${p.slug}`));

  return {
    paths,
    fallback: false,
  };
};

const ALTICLE_QUERY = `
  query MyQuery($slug: String) {
    article(filter: {slug: {eq: $slug}}) {
      id
      _publishedAt
      slug
      title
      summary
      tag {
        title
      }
      coverImage {
        responsiveImage {
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
      content {
        value
      }
    }
  }
`;

export const getStaticProps = async ({ params }) => {
  const post = await request({
    query: ALTICLE_QUERY,
    variables: { slug: params.slug}
  });
  return {
    props: {
      postData: post.article,
    },
  };
};

export default function BlogPost(props) {
  const { postData } = props;
  return <div className={styles.backgroundColor}>
  <div className={styles.blog__}>
    <Image data={postData.coverImage.responsiveImage} />
    <div className={styles.blog__text}>
      <div>
        <h1>{postData.title}</h1>
        <p>{postData.summary}</p>
      </div>
    </div>
  </div>
  <Container>
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
  <div className={styles.mainIndex}>
    <div className={styles.mainCenterCont}>
      <div className={styles.gridContainer}>

      <article>
        <StructuredText data={postData.content} />
      </article>

      <ContactForm
        title="Contact Form"
      />

      <CaseStudiesWrap
        title="Case Studies"
      />

      <SideProjectWrap
        title="Side Projects"
      />

    </div>
  </div>
 </div>
  </Container>
  </div>
}

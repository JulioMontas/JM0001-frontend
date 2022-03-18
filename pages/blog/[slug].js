import { useRouter } from 'next/router'
import { StructuredText } from "react-datocms"
import { Image } from "react-datocms"
import Link from 'next/link'
import Head from 'next/head'
import Container from '../../components/Container'
import CaseStudiesWrap from '../../components/CaseStudiesWrap'
import SideProjectWrap from '../../components/SideProjectWrap'
import ContactForm from '../../components/ContactForm'
import NavBar from '../../components/NavBar'
import { request } from "../../lib/datocms"
import styles from '../../styles/Report.module.css'
import styled from "styled-components";

const ArticleContainer = styled.article`
  width: 800px;
  h2 {
    font-size: 1.4rem;
  }
  h3 {
    font-size: 1.2rem;
  }
  p {
    margin-bottom: 1.5em;
    &:last-child{
      margin-bottom: 0;
    }
  }
  hr {
    margin: 30px 0;
  }
  pre code {
    background-color: rgba(0,0,0,1);
    border: 1px solid rgba(255,255,255,0.2);
    display: block;
    padding: 20px;
  }
`;
const TagsList = styled.ul`
  display:flex;
  gap: 10px;
  a {
    padding: 0.1em 2em;
    border: 1px solid yellow;
    border-radius: 5px;
    opacity: 0.6;
    transition: all 1s ease;
    :hover{
      opacity: 1;
    }
  }
`

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
  <Container>
  <Head>
    <title>{postData.title} - UI Developer • Full Stack Designer | Julio Montás</title>
    <meta name='twitter:url' content='https://juliomontas.com/blog/' />
    <meta property='og:url' content='https://juliomontas.com/blog/' />
    <meta property='og:image' content='https://juliomontas.com/me.png' />
    <meta name='twitter:image' content='https://juliomontas.com/me.png' />
    <meta property='og:title' content={postData.title} />
    <meta name='twitter:title' content={postData.title} />
    <meta name="description" content={postData.summary} key="description"/>
    <meta property='og:description' content={postData.summary} />
    <meta name='twitter:description' content={postData.summary} />
    <link rel="canonical" href={'https://juliomontas.com/blog/' + postData.title} />
    <link rel="alternate" href={'https://juliomontas.com/blog/' + postData.title} hreflang="en-us" />
    <link rel="alternate" href={'https://juliomontas.com/es-us/blog/' + postData.title} hreflang="es-us" />
  </Head>
  <NavBar />
  <div className={styles.mainIndex}>
    <div className={styles.mainCenterCont}>
      <div className={styles.gridContainer}>

      <div>
        <h1 style={{fontSize:`6.9rem`}}>{postData.title}</h1>
        <TagsList>
          {postData.tag.map(data => (
            <li>
              <Link href={'/blog/tags/' + data.title}>
                <a alt={data.title}>
                  <span>{data.title}</span>
                </a>
              </Link>
            </li>
          ))}
        </TagsList>
        <p style={{marginBottom:`0.8em`,marginTop:`0.8em`}}>Posted by Julio Montas on {postData._publishedAt}</p>
      </div>

      <ArticleContainer>
        <StructuredText data={postData.content} />
      </ArticleContainer>

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

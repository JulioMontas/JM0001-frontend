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

const Hone = styled.h1`
  font-size:2rem;
  margin: 1em 0 0;
  @media screen and (min-width: 57em) {
    font-size:6.9rem;
    margin: 0;
  }
`
const ArticleContainer = styled.article`
  width: 100%;
  h2 {
    font-size: 1.4rem;
    line-height: 25px;
  }
  h3 {
    font-size: 1.2rem;
  }
  p {
    font-size: 1.1em;
    line-height: 25px;
    margin-bottom: 1.8em;
    &:last-child{
      margin-bottom: 0;
    }
  }
  hr {
    margin: 30px 0;
  }
  pre code {
    width: 100%;
    background-color: rgba(0,0,0,1);
    border: 1px solid rgba(255,255,255,0.2);
    display: block;
    padding: 1em 0 1em 0.3em;
    @media screen and (min-width: 57em) {
          display:relative;
      padding: 1.3em 0 1em 10px;
    }
  }
  @media screen and (min-width: 57em) {
    width: 800px;
    margin: 3em auto 5em;
  }
`;

const FlexSec = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 57em) {
    justify-content: space-between;
    align-items: baseline;
  }
`
const TagsList = styled.ul`
  margin-top: 10px;
  display:flex;
  justify-content: left;
  flex-wrap: wrap;
  gap: 10px;
  a {
    font-size: 0.9em;
    padding: 0.3em 2em;
    border: 1px solid yellow;
    border-radius: 10% 20% 20% 70% / 90% 40% 80% 50%;
    opacity: 0.6;
    transition: all 1s ease;
    :hover{
      opacity: 1;
    }
  }
  @media screen and (min-width: 57em) {
    justify-content: right;
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
        slug
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
    <title>{postData.title} - UI Developer • Full Stack Designer | Julio Montas</title>
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
  <div className={styles.mainIndex}>
    <div className={styles.mainCenterCont}>
      <div className={styles.gridContainer}>

      <div>
        <Hone>{postData.title}</Hone>

        <FlexSec>
          <p>Posted by Julio Montas on {postData._publishedAt}</p>
          <TagsList>
            {postData.tag.map(data => (
              <li>
                <Link href={'/blog/tags/' + data.slug}>
                  <a alt={data.title}>
                    <span>{data.title}</span>
                  </a>
                </Link>
              </li>
            ))}
          </TagsList>
        </FlexSec>

      </div>

      <ArticleContainer>
        <StructuredText data={postData.content} />
      </ArticleContainer>

      <CaseStudiesWrap
        title="Case Studies"
      />
      <SideProjectWrap
        title="Side Projects"
      />
      <ContactForm
        title="Contact Form"
      />
    </div>
  </div>
 </div>
  </Container>
  </div>
}

import Head from "next/head";
import Layout from "../../components/layout";
import { request } from "../../lib/datocms";

export async function getStaticPaths() {
  const data = await request({ query: `{ allPosts { slug } }` });

  return {
    paths: data.allPosts.map((post) => `/work/${post.slug}`),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const graphqlRequest = {
    query: `
    query MyQuery {
      site: allCaseStudies(locale: en, fallbackLocales: en) {
        id
        slug
        title
        allTheData {
          content {
            value
            blocks {
              ... on ColorBlkRecord {
                id
                hexColor {
                  hex
                }
              }
              ... on GalleryBlkRecord {
                id
                gallery {
                  responsiveImage {
                    alt
                    bgColor
                    title
                    src
                    srcSet
                    base64
                  }
                }
              }
              ... on ImageBlkRecord {
                id
                image {
                  responsiveImage {
                    alt
                    bgColor
                    title
                    src
                    srcSet
                    base64
                  }
                }
              }
            }
          }
        }
      }
    }
    `,
    preview,
    variables: {
      slug: params.slug,
    },
  };

  return {
    props: {
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
      preview,
    },
  };
}

export default function Post({ subscription, preview }) {
  const {
    data: { site, post, morePosts },
  } = useQuerySubscription(subscription);

  return (
    <Layout>
      <Container>
        <Header />
        <article>

        </article>
      </Container>
    </Layout>
  );
}

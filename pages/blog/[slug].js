import { useRouter } from 'next/router'
import { StructuredText } from "react-datocms"
import { Image } from "react-datocms"
import Container from '../../components/Container'
import { request } from "../../lib/datocms"

export default function BlogPost(props) {
  const { postData } = props;
  return <Container>
   <h2>{postData.title}</h2>
   <Image data={postData.coverImage.responsiveImage} />
   <p>{postData.summary}</p>
   <article>
     <StructuredText data={postData.content} />
   </article>
  </Container>
}

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

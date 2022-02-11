import { request } from "../../lib/datocms"
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

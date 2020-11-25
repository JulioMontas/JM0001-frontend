import Link from 'next/link'
import { motion } from "framer-motion"
import Layout from '../../components/Layout/Layout'
import styles from '../../styles/CaseStudy.module.css'

function Blog({ post }) {
    return <Layout>
      <motion.div 
       initial={{ y: 600, opacity: 0 }}
       animate={{ y: 0, opacity: 1 }}
       exit={{ y: -600, opacity: 0 }}>
        <Link href="/case-study">
          <a>Back</a>
        </Link>
      <div className={styles.container}>
        <div>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </div>
        <div>
          <h2>Overview</h2>
          <p>{post.overview}</p>
        </div>
        <div>
          <h2>Moodboard </h2>
          {/* <li key={post.id}>
            {post.moodboard[0].image[0].url}
          </li> */}
        </div>
        <div>
          <h2>Background</h2>
          <p>{post.background}</p>
        </div>
        <div>
          <h2>Font Family</h2>
          <p>{post.fontDesigner}</p>
          {/* <img src={"http://localhost:1337" + post.fontSvg[0].svg[0].url} alt="Kiwi standing on oval"></img> */}
        </div>
        <div>
          <h2>Color Palette</h2>
          <span style={{color: "#E4E2E0"}}>Color</span>
          {/* <p>{post.palette[0].colorHex}</p> */}
        </div>
      </div>
      </motion.div>
    </Layout>
  }
  
  export async function getServerSideProps({ params }) {
  
    const res = await fetch(`http://localhost:1337/case-studies/${params.id}`)
    const post = await res.json()

    if (!post) {
      return {
        redirect: {
          destination: '/case-study',
          permanent: false,
        },
      }
    }
    
    return { props: { post } }
  }
    
  export default Blog
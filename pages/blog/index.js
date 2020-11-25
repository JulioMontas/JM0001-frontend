// import fetch from 'node-fetch'
// import Link from 'next/link'
// import { motion } from "framer-motion"
// import Layout from '../../components/Layout/Layout'
// import styles from '../../styles/Blog.module.css'


// function Blog({ posts }) {
//   return <Layout>
//     <motion.div 
//     initial={{ x: 300, opacity: 0 }}
//     animate={{ x: 0, opacity: 1 }}
//     exit={{ x: -300, opacity: 0 }}>
//     <div className={styles.main}>
//         {posts.map((post) => (
//           <div key={post.id}>
//             <img src={"http://localhost:1337" + post.image.url} />
//             <p className={styles.blgDate}>{post.published_at}</p>
//             <Link href={`/blog/${encodeURIComponent(post.id)}`}>
//               <a className={styles.blgTitle}>{post.title}</a>
//             </Link>
//             <p className={styles.blgSummery}>{post.content}</p>
//           </div>
//         ))}
//     </div>
//     </motion.div>
//   </Layout>
// }

// export async function getStaticProps() {
  
//   const res = await fetch('http://localhost:1337/blogs')
//   const posts = await res.json()

//   return {
//     props: {
//       posts
//     }
//   }
// }

// export default Blog

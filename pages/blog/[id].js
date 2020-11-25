// import Link from 'next/link'
// import { motion } from "framer-motion"
// import Layout from '../../components/Layout/Layout'
// import styles from '../../styles/Blog.module.css'

// function Blog({ post }) {
//   return <Layout>
//     <motion.div 
//        initial={{ y: 600, opacity: 0 }}
//        animate={{ y: 0, opacity: 1 }}
//        exit={{ y: -600, opacity: 0 }}>
//     <div className={styles.container}>
//       <Link href="/blog">
//         <a>Back</a>
//       </Link>
//       <h1>{post.title}</h1>
//       <p>{post.description}</p>
//     </div>
//     </motion.div>
//   </Layout>
// }

// export async function getServerSideProps({ params }) {

//   const res = await fetch(`http://localhost:1337/blogs/${params.id}`)
//   const post = await res.json()
  
//   return { props: { post } }
// }
  
// export default Blog

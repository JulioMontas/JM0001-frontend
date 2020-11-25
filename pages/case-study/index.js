import fetch from 'node-fetch'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion"
import Layout from '../../components/Layout/Layout'
import styles from '../../styles/CaseStudy.module.css'

function CaseStudy({ posts }) {
  return <Layout>
    <motion.div 
       initial={{ x: 600, opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       exit={{ x: -600, opacity: 0 }}>
          <Swiper
      speed={400}
      // pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{ 
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
          width: 300
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 10,
          width: 1000
        }
      }}
    >
        <div className={styles.main}>
          {posts.map((post) => (
             <SwiperSlide>
               {({isActive}) => (
               <div key={post.id}>
                 <div className={styles.cube}>
                   <div className={styles.cara1}><img src={post.id} alt={post.id} /></div>
                   <div className={styles.cara2}><img src={post.id} alt={post.id} /></div>
                   <div className={styles.cara3}><img src={post.id} alt={post.id} /></div>
                   <div className={styles.cara4}><img src={post.id} alt={post.id} /></div>
                   <div className={styles.cara5}><img src={post.id} alt={post.id} /></div>
                   <div className={styles.cara6}><img src={post.id} alt={post.title} /></div>
                  </div>
                  <Link href={`/case-study/${encodeURIComponent(post.id)}`}>
                    <a><h2>{post.title}</h2></a>
                  </Link>
                  <p>{post.description}</p>
              </div>
              )}
             </SwiperSlide>
          ))}
        </div>
        </Swiper>
      </motion.div>
  </Layout>
}

export async function getStaticProps() {

  const res = await fetch('http://localhost:1337/case-studies')
  const posts = await res.json()

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      posts,
    },
  }
}

export default CaseStudy
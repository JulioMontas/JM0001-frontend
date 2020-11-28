import Link from 'next/link'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';

import Layout from '../../components/Layout/Layout'
import styles from '../../styles/CaseStudy.module.css'

function BlogIndex() {
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
          spaceBetween: 0,
          width: 300
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 50,
          width: 1200
        }
      }}
    >
        <SwiperSlide>
          <div>
              <h2>Under Construction</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </motion.div>
  </Layout>
}

export default BlogIndex
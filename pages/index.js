import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';

import Layout from '../components/Layout/Layout'
import styles from '../styles/Home.module.css'

function HomePage() {
  return <Layout>
    <motion.div 
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -300, opacity: 0 }}>
    <div className={styles.main}>
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
      <SwiperSlide>
      <div>
          <Image
            src="/me.png"
            alt="Picture of the author"
            width={232}
            height={232}
          />
          <h1>Product Designer <span>with</span> Coding Ability</h1>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div>
        <p>Interested in the evolution of technology in our daily lives and how it’s affecting our behavior. Currently working as a <b>UI/UX Designer</b> with some <b>Front-end Development</b> based in NYC, experience with startup, private companies and creative agency.<br/><br/> Alumnus from <b>Altos de Chavón</b>, <a><b>Parsons</b> / <b>The New School</b></a> and <b>General Assembly</b> coding bootcamp.<br/> <br/>  In my free time, I like to explore the other side of the internet and mixed minimal house / techno, bachata and dembow for others to relax and dance.</p>
      </div>
      </SwiperSlide>
    </Swiper>
    </div>
    </motion.div>
  </Layout>
}
export default HomePage
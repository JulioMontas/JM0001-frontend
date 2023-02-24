import Image from 'next/image'
// import styles from './NewMedia.module.css'
import styles from './CaseStudiesWrap.module.css'
import Container from '../components/Container'
import ThreeDimCube from '../components/ThreeDimCube'
import { motion } from 'framer-motion'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

const easing = [.6, -.05, .01, .99];

const fadeInUp = {
  initial:{
    y: 60,
    opacity: 0
  },
  animate:{
    y: 0,
    opacity: 1,
    transition:{
      duration: .6,
      ease: easing
    }
  }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const data = [
  {
    id:'00',
    title: "Surveillance Culture",
    content: "Misinformation, Data Collection",
    slug: "squarespace-ecommerce-theme-development",
    cover: "TRMA0A-box.png"
  },
  {
    id:'01',
    title: "Webflow Custom Theme For SaaS Marketing Company",
    content: "Freelance, 2022",
    slug: "webflow-theme-saas-marketing",
    cover: "TRMA0A-box.png"
  },
]

const NewMedia = (props) => {
  return(
    <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
      <motion.div variants={stagger} className={styles.main}>
        <h2 className={styles.title}>
          {props.title}
        </h2>
        <div className={styles.boxes}>
        <Swiper
        style={{
          "--swiper-navigation-color": "#FFFC00",
          "--swiper-pagination-color": "#FFFC00",
        }}
         modules={[Navigation, Pagination, Scrollbar, A11y]}
        pagination={{ clickable: true }}
        speed={400}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
            width: 300
          },
          1200: {
            slidesPerView: 11,
            spaceBetween: 0,
            width: 1200
          }
        }}
        >
        {data.map(data => (
          <SwiperSlide key={data.id}>
            <motion.div variants={fadeInUp} className='card'>
              <ThreeDimCube
                slug={data.slug}
                title={data.title}
                content={data.content}
                cover={data.cover}
              />
            </motion.div>
          </SwiperSlide>
        ))}
        </Swiper>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default NewMedia;

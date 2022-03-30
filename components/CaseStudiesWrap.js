import Image from 'next/image'
import styles from './CaseStudiesWrap.module.css'
import Container from '../components/Container'
import ThreeDimCube from '../components/ThreeDimCube'
import { motion } from 'framer-motion'
import Link from 'next/link'
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
    title: "Law Firm Headless CMS",
    content: "Product Designer & Developer, 2021",
    slug: "law-firm-headless-cms",
    cover: "orange_box.png"
  },
  {
    title: "Adorama  eCommerce",
    content: "UI/UX Designer & Front-end Dev, 2019",
    slug: "adorama-ecommerce",
    cover: "blue_box.jpg"
  },
  {
    title: "Vinyl Label Design",
    content: "Art Direction, Print Design, 2019",
    slug: "vinyl-label-design",
    cover: "Pendulum-3D-Box-Back-03.jpg"
  },
  {
    title: "Custom Shopify Fragrance eCommerce",
    content: "UI/UX Designer & Front-end Dev, 2018",
    slug: "custom-shopify-fragrance-ecommerce",
    cover: "ecommerce.png"
  },
  {
    title: "Custom Wordpress Theme For Musician",
    content: "UI/UX Designer & Front-end Dev, 2017",
    slug: "custom-wordpress-artist-theme",
    cover: "music_3D_Top.png"
  },
  {
    title: "Nike: Retail iPad App",
    content: "Agency / UX/UI Designer, 2014",
    slug: "nike-retail-ipad-app",
    cover: "Nike_3D_003.jpg"
  },
  {
    title: "Kate Spade: Shoppable Web Video UI",
    content: "Agency / UX/UI Designer, 2014",
    slug: "kate-spade-shoppable-web-video-ui",
    cover: "KateSpade_3D_01.gif"
  },
  {
    title: "Lancome: Visionnaire Video UI",
    content: "Agency / UX/UI Designer, 2013",
    slug: "lancome-visionnaire-video-ui",
    cover: "Lancome_3D_005.jpg"
  },
  {
    title: "Sebastian Faena: Fashion Photographer miscrosite",
    content: "UX/UI Designer & Develoment, 2013",
    slug: "sebastian-faena-fashion-photographer-miscrosite",
    cover: "SebastianFaena_3D_01.gif"
  }
]

const CaseStudiesWrap = (props) => {
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
            slidesPerView: 4,
            spaceBetween: 10,
            width: 1200
          }
        }}
        >
        {data.map(data => (
          <SwiperSlide>
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

export default CaseStudiesWrap;

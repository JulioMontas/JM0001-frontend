import styles from './CaseStudiesWrap.module.css'
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
    title: "Squarespace e-Commerce Theme and Development",
    content: "Freelance, 2022",
    slug: "squarespace-ecommerce-theme-development",
    cover: "eresYou_box.png"
  },
  {
    id:'01',
    title: "Webflow Custom Theme For SaaS Marketing Company",
    content: "Freelance, 2022",
    slug: "webflow-theme-saas-marketing",
    cover: "TRMA0A-box.png"
  },
  {
    id:'02',
    title: "Law Firm Headless CMS",
    content: "Freelance, 2021",
    slug: "law-firm-headless-cms",
    cover: "orange_box.png"
  },
  {
    id:'03',
    title: "Adorama  eCommerce",
    content: "Private Company, 2019",
    slug: "adorama-ecommerce",
    cover: "blue_box.jpg"
  },
  {
    id:'04',
    title: "Vinyl Label Design",
    content: "Freelance, 2019",
    slug: "vinyl-label-design",
    cover: "Pendulum-3D-Box-Back-03.jpg"
  },
  {
    id:'05',
    title: "Custom Shopify Fragrance eCommerce",
    content: "Freelance, 2018",
    slug: "custom-shopify-fragrance-ecommerce",
    cover: "ecommerce.png"
  },
  {
    id:'06',
    title: "Custom Wordpress Theme For Musician",
    content: "Freelance, 2017",
    slug: "custom-wordpress-artist-theme",
    cover: "music_3D_Top.png"
  },
  {
    id:'07',
    title: "Nike: Retail iPad App",
    content: "Agency, 2014",
    slug: "nike-retail-ipad-app",
    cover: "Nike_3D_003.jpg"
  },
  {
    id:'08',
    title: "Kate Spade: Shoppable Web Video UI",
    content: "Agency, 2014",
    slug: "kate-spade-shoppable-web-video-ui",
    cover: "KateSpade_3D_01.gif"
  },
  {
    id:'09',
    title: "Lancome: Visionnaire Video UI",
    content: "Agency, 2013",
    slug: "lancome-visionnaire-video-ui",
    cover: "Lancome_3D_005.jpg"
  },
  {
    id:'10',
    title: "Sebastian Faena: Fashion Photographer miscrosite",
    content: "Freelance, 2013",
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

export default CaseStudiesWrap;

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
    title: "Sleeping.Place",
    content: "WebVR, 2023",
    slug: "sleeping-place",
    cover: "sleepingPlace_3D.png"
  },
  {
    id:'01',
    title: "Simulacrum | Simulacrum",
    content: "Visual App, 2019",
    slug: "simulacrum-simulacrum",
    cover: "simulacrum_3D.jpg"
  },
  {
    id:'03',
    title: "Baby Square",
    content: "Visual App, 2019",
    slug: "baby-square",
    cover: "babySquare_3D.png"
  },
  {
    id:'04',
    title: "We Can't Breathe NYC",
    content: "Web Art, 2015",
    slug: "we-cant-breathe-nyc",
    cover: ""
  },
  {
    id:'05',
    title: "Surveillance Culture",
    content: "Data Collection, 2015",
    slug: "surveillance-culture",
    cover: "RecyclingCode_3D_01.gif"
  },
  {
    id:'09',
    title: "Catch Superman",
    content: "Web Art, 2014",
    slug: "catch-superman",
    cover: "CatchSuperman_3D_01.gif"
  },
  {
    id:'10',
    title: "Pixel X Pixel",
    content: "Web Art, 2014",
    slug: "pixel-x-pixel",
    cover: "PixelXPixel_3D_01.gif"
  },
  {
    id:'06',
    title: "CURRENTS: TRANSLATIONS",
    content: "Print, 2013",
    slug: "currents-translations",
    cover: "RecyclingCode_3D_02.gif"
  },
  {
    id:'07',
    title: "Emotional Meltdown",
    content: "Print, 2013",
    slug: "emotional-meltdown",
    cover: "SlitScan_3D_05.jpg"
  },
  {
    id:'08',
    title: "White Canvas",
    content: "Visual App, 2013",
    slug: "white-canvas",
    cover: "whiteCanvas-3D.png"
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
                slug={`/new-media/` + data.slug}
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

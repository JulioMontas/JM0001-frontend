import Image from 'next/image'
import styles from './SideProjectWrap.module.css'
import Container from '../components/Container'
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

const data = {
  title_01: "HelloCo.de",
  content_01: "Collective Memory, Education",
  title_02: "Surveillance Culture",
  content_02: "Misinformation, Data Collection",
  title_03: "Width - Take Over the Screen",
  content_03: "JavaScript Web Game",
  title_04: "Meliorem - Cultivating Your Passion to Level Up",
  content_04: "Productivity App, Dopamine Stimulator",
  title_05: "Basic Color Fundamentals",
  content_05: "eLearning, New Memories",
}

const SideProjectWrap = (props) => {
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
            spaceBetween: 50,
            width: 1200
          }
        }}
        >
           <SwiperSlide>
            <motion.div variants={fadeInUp} className='card'>
            <section>
            <Link href={`/side-project/hellocode`}>
              <a alt={data.title_01} rel="alternate" hreflang="en">
                <h3 className={styles.title}>{data.title_01}</h3>
                <h4 className={styles.description}>{data.content_01}</h4>
                <span className={styles.fotos}>
                  <Image
                    src="/img/side-project/hc/hc02.gif"
                    alt={data.title_01}
                    width={1422}
                    height={688}
                   />
                </span>
              </a>
            </Link>
            </section>
            </motion.div>
            </SwiperSlide>

            <SwiperSlide>
            <motion.div variants={fadeInUp} className='card'>
            <section>
              <Link href={`/side-project/surveillance`}>
                <a alt={data.title_02} rel="alternate" hreflang="en">
                  <h3 className={styles.title}>{data.title_02}</h3>
                  <h4 className={styles.description}>{data.content_02}</h4>
                  <span className={styles.fotos}>
                    <Image
                    src="/img/side-project/surveillance/jessieNguyen-socialProof.jpg"
                    alt={data.title_02}
                    width={640}
                    height={640}
                    quality={1}
                    loading="eager"
                    />
                  </span>
                </a>
              </Link>
            </section>
            </motion.div>
            </SwiperSlide>

            <SwiperSlide>
            <motion.div variants={fadeInUp} className='card'>
            <section>
              <Link href={`/side-project/width`}>
                <a alt={data.title_03} rel="alternate" hreflang="en">
                  <h3 className={styles.title}>{data.title_03}</h3>
                  <h4 className={styles.description}>{data.content_03}</h4>
                  <span className={styles.fotos}>
                    <Image
                    src="/img/side-project/width/width_Landing_Page.png"
                    alt={data.title_03}
                    width={360}
                    height={210}
                    quality={25}
                    loading="eager"
                    />
                  </span>
                </a>
              </Link>
            </section>
            </motion.div>
            </SwiperSlide>

            <SwiperSlide>
            <motion.div variants={fadeInUp} className='card'>
            <section>
              <Link href={`/side-project/colors`}>
                <a alt={data.title_05} rel="alternate" hreflang="en">
                  <h3 className={styles.title}>{data.title_05}</h3>
                  <h4 className={styles.description}>{data.content_05}</h4>
                  <span className={styles.fotos}>
                    <Image
                    src="/img/colorView_01.jpg"
                    alt={data.title_05}
                    width={200}
                    height={200}
                    quality={15}
                    loading="eager"
                    />
                  </span>
                </a>
              </Link>
            </section>
            </motion.div>
            </SwiperSlide>
          </Swiper>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default SideProjectWrap;

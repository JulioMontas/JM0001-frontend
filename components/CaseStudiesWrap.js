import Image from 'next/image'
import styles from './CaseStudiesWrap.module.css'
import Container from '../components/Container'
import { motion } from 'framer-motion'
import Link from 'next/link'
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
  title_01: "Wordpress Artist Theme",
  content_01: "UI/UX Designer & Front-end Dev, 2017",

  title_02: "Shopify Fragrance eCommerce",
  content_02: "UI/UX Designer & Front-end Dev, 2018",

  title_03: "Vinyl Label Design",
  content_03: "Art Direction, Print Design, 2019",
}

const CaseStudiesWrap = (props) => {

  return(
      <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
        <motion.div variants={stagger} className={styles.main}>
        <h2 className={styles.title}>
          {props.title}
        </h2>
        <div className={styles.boxes}>
        <Swiper
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
              <Link href={`/case-study/wordpress-artist-theme`}>
                <a alt="" rel="alternate" hreflang="en">
                  <h3 className={styles.title}>{data.title_01}</h3>
                  <h4 className={styles.description}>{data.content_01}</h4>
                  <div className={styles.cubeWrapper}>
                  <div className={styles.cube}>
                  <div className={styles.cara1}>
                  <Image
                    src="/img/music_3D_Top.png"
                    alt="wordpress front cover"
                    width={200}
                    height={200}
                    quality={1}
                    loading="eager"
                    />
                  </div>
                  <div className={styles.cara2}>
                    <Image
                    src="/img/music_3D_Top.png"
                    alt="wordpress right cover"
                    width={200}
                    height={200}
                    quality={1}
                    loading="eager"
                    />
                  </div>
                  <div className={styles.cara3}>
                    <Image
                    src="/img/music_3D_Top.png"
                    alt="wordpress left cover"
                    width={200}
                    height={200}
                    quality={1}
                    loading="eager"
                    />
                  </div>
                  <div className={styles.cara4}>
                    <Image
                    src="/img/music_3D_Top.png"
                    alt="wordpress side cover"
                    width={200}
                    height={200}
                    quality={1}
                    loading="eager"
                    />
                  </div>
                  <div className={styles.cara5}>
                    <Image
                    src="/img/music_3D_Top.png"
                    alt="wordpress top cover"
                    width={200}
                    height={200}
                    quality={1}
                    loading="eager"
                    />
                  </div>
                  <div className={styles.cara6}>
                    <Image
                    src="/img/music_3D_Top.png"
                    alt="wordpress bottom cover"
                    width={200}
                    height={200}
                    quality={1}
                    loading="eager"
                    />
                  </div>
                  </div>
                  </div>
                </a>
              </Link>
            </section>
            </motion.div>
            </SwiperSlide>


            <SwiperSlide>
            <motion.div variants={fadeInUp} className='card'>
            <section>
              <Link href={`/case-study/shopify-fragrance-ecommerce`}>
                <a alt={data.title_02} rel="alternate" hreflang="en">
                  <h3 className={styles.title}>{data.title_02}</h3>
                  <h4 className={styles.description}>{data.content_02}</h4>
                  <div className={styles.cubeWrapper}>
                      <div className={styles.cube}>
                        <div className={styles.cara1}>
                          <Image
                            src="/img/ecommerce.png"
                            alt="fragrance front cover"
                            width={200}
                            height={200}
                            quality={1}
                            loading="eager"
                            />
                          </div>
                          <div className={styles.cara2}>
                          <Image
                            src="/img/ecommerce.png"
                            alt="fragrance right cover"
                            width={200}
                            height={200}
                            quality={1}
                            loading="eager"
                            />
                          </div>
                          <div className={styles.cara3}>
                          <Image
                            src="/img/ecommerce.png"
                            alt="fragrance left cover"
                            width={200}
                            height={200}
                            quality={1}
                            loading="eager"
                            />
                          </div>
                          <div className={styles.cara4}>
                          <Image
                            src="/img/ecommerce.png"
                            alt="fragrance side cover"
                            width={200}
                            height={200}
                            quality={1}
                            loading="eager"
                            />
                          </div>
                          <div className={styles.cara5}>
                          <Image
                            src="/img/ecommerce.png"
                            alt="fragrance top cover"
                            width={200}
                            height={200}
                            quality={1}
                            loading="eager"
                            />
                          </div>
                          <div className={styles.cara6}>
                          <Image
                            src="/img/ecommerce.png"
                            alt="fragrance bottom cover"
                            width={200}
                            height={200}
                            quality={1}
                            loading="eager"
                            />
                          </div>
                      </div>
                  </div>
                </a>
              </Link>
            </section>
            </motion.div>
            </SwiperSlide>


            <SwiperSlide>
            <motion.div variants={fadeInUp} className='card'>
            <section>
              <Link href={`/case-study/vinyl-label-design`}>
                <a alt={data.title_03} rel="alternate" hreflang="en">
                  <h3 className={styles.title}>{data.title_03}</h3>
                  <h4 className={styles.description}>{data.content_03}</h4>
                  <div className={styles.cubeWrapper}>
                    <div className={styles.cube}>
                      <div className={styles.cara1}>
                        <Image
                        src="/img/Pendulum-3D-Box-Bottom-05.jpg"
                        alt="vinyl front cover"
                        width={200}
                        height={200}
                        quality={1}
                        loading="eager"
                        />
                      </div>
                      <div className={styles.cara2}>
                        <Image
                        src="/img/Pendulum-3D-Box-Bottom-05.jpg"
                        alt="vinyl left cover"
                        width={200}
                        height={200}
                        quality={1}
                        loading="eager"
                        />
                      </div>
                      <div className={styles.cara3}>
                        <Image
                        src="/img/Pendulum-3D-Box-Bottom-05.jpg"
                        alt="vinyl right cover"
                        width={200}
                        height={200}
                        quality={1}
                        loading="eager"
                        />
                      </div>
                      <div className={styles.cara4}>
                        <Image
                        src="/img/Pendulum-3D-Box-Bottom-05.jpg"
                        alt="vinyl side cover"
                        width={200}
                        height={200}
                        quality={1}
                        loading="eager"
                        />
                      </div>
                      <div className={styles.cara5}>
                        <Image
                        src="/img/Pendulum-3D-Box-Bottom-05.jpg"
                        alt="vinyl top cover"
                        width={200}
                        height={200}
                        quality={1}
                        loading="eager"
                        />
                      </div>
                      <div className={styles.cara6}>
                        <Image
                        src="/img/Pendulum-3D-Box-Bottom-05.jpg"
                        alt="vinyl bottom cover"
                        width={200}
                        height={200}
                        quality={1}
                        loading="eager"
                        />
                      </div>
                    </div>
                  </div>
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

export default CaseStudiesWrap;

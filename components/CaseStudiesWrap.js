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
  title_00: "Sebastian Faena: Fashion Photographer Website",
  content_00: "UX/UI Designer & Develoment, 2013",
  slug_00: "sebastian-faena-fashion-photographer-website",

  title_01: "Lancome: Visionnaire Video UI",
  content_01: "Agency / UX/UI Designer, 2013",
  slug_01: "lancome-visionnaire-video-ui",

  title_02: "Kate Spade: Shoppable Web Video UI",
  content_02: "Agency / UX/UI Designer, 2014",
  slug_02: "kate-spade-shoppable-web-video-ui",

  title_03: "Wordpress Theme For Musician",
  content_03: "UI/UX Designer & Front-end Dev, 2017",
  slug_03: "wordpress-artist-theme",

  title_04: "Vinyl Label Design",
  content_04: "Art Direction, Print Design, 2019",
  slug_04: "vinyl-label-design",

  title_05: "Shopify Fragrance eCommerce",
  content_05: "UI/UX Designer & Front-end Dev, 2018",
  slug_05: "shopify-fragrance-ecommerce",

  title_06: "Law Firm Headless CMS",
  content_06: "Product Designer & Developer, 2021",
  slug_06: "law-firm-headless-cms",
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
                  <h3 className={styles.title}>{data.title_03}</h3>
                  <h4 className={styles.description}>{data.content_03}</h4>
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
                  <h3 className={styles.title}>{data.title_05}</h3>
                  <h4 className={styles.description}>{data.content_05}</h4>
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
                  <h3 className={styles.title}>{data.title_04}</h3>
                  <h4 className={styles.description}>{data.content_04}</h4>
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

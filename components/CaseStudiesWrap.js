import Image from 'next/image'
import styles from './CaseStudiesWrap.module.css'
import Container from '../components/Container'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import useTranslation from 'next-translate/useTranslation'

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

const CaseStudiesWrap = (props) => {
  const { t } = useTranslation('caseStudy')
  return(
    <Container>
      <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
        <motion.div variants={stagger} className={styles.main}>
        <h2 className={styles.title}>
          {props.title}
        </h2>
        <div className={styles.boxes}>
        <Swiper
        speed={400}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
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
            <Link href={`/case-study/0`}>
              <a alt={t('title_00')} rel="alternate" hreflang="en">
                <h3 className={styles.title}>{t('title_00')}</h3>
                <h4 className={styles.description}>{t('content_00')}</h4>
                <div className={styles.cubeWrapper}>
                  <div className={styles.cube}>
                    <div className={styles.cara1}>
                      <Image
                        src="/img/blue_box.jpg"
                        alt={t('title_00')}
                        width={200}
                        height={200}
                        quality={1}
                        loading="eager"
                      />
                    </div>
                    <div className={styles.cara2}>
                        <Image
                        src="/img/blue_box.jpg"
                        alt={t('title_00')}
                        width={200}
                        height={200}
                        quality={1}
                        loading="eager"
                        />
                    </div>
                    <div className={styles.cara3}>
                        <Image
                        src="/img/blue_box.jpg"
                        alt={t('title_00')}
                        width={200}
                        height={200}
                        quality={1}
                        loading="eager"
                        />
                    </div>
                    <div className={styles.cara4}>
                        <Image
                        src="/img/blue_box.jpg"
                        alt={t('title_00')}
                        width={200}
                        height={200}
                        quality={1}
                        loading="eager"
                        />
                    </div>
                    <div className={styles.cara5}>
                        <Image
                        src="/img/blue_box.jpg"
                        alt={t('title_00')}
                        width={200}
                        height={200}
                        quality={1}
                        loading="eager"
                        />
                    </div>
                    <div className={styles.cara6}>
                        <Image
                        src="/img/blue_box.jpg"
                        alt={t('title_00')}
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
              <Link href={`/case-study/1`}>
                <a alt="Pendulum EP - Vinyl Record Label Design" rel="alternate" hreflang="en">
                  <h3 className={styles.title}>{t('title_01')}</h3>
                  <h4 className={styles.description}>{t('content_01')}</h4>
                  <div className={styles.cubeWrapper}>
                    <div className={styles.cube}>
                      <div className={styles.cara1}>
                        <Image
                        src="/img/Pendulum-3D-Box-Bottom-05.jpg"
                        alt={t('title_01')}
                        width={200}
                        height={200}
                        quality={1}
                        loading="eager"
                        />
                      </div>
                      <div className={styles.cara2}>
                        <Image
                        src="/img/Pendulum-3D-Box-Bottom-05.jpg"
                        alt={t('title_01')}
                        width={200}
                        height={200}
                        quality={1}
                        loading="eager"
                        />
                      </div>
                      <div className={styles.cara3}>
                        <Image
                        src="/img/Pendulum-3D-Box-Bottom-05.jpg"
                        alt={t('title_01')}
                        width={200}
                        height={200}
                        quality={1}
                        loading="eager"
                        />
                      </div>
                      <div className={styles.cara4}>
                        <Image
                        src="/img/Pendulum-3D-Box-Bottom-05.jpg"
                        alt={t('title_01')}
                        width={200}
                        height={200}
                        quality={1}
                        loading="eager"
                        />
                      </div>
                      <div className={styles.cara5}>
                        <Image
                        src="/img/Pendulum-3D-Box-Bottom-05.jpg"
                        alt={t('title_01')}
                        width={200}
                        height={200}
                        quality={1}
                        loading="eager"
                        />
                      </div>
                      <div className={styles.cara6}>
                        <Image
                        src="/img/Pendulum-3D-Box-Bottom-05.jpg"
                        alt={t('title_01')}
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
              <Link href={`/case-study/2`}>
                <a alt="Shopify Fragrance eCommerce - A Discovery In Scent" rel="alternate" hreflang="en">
                  <h3 className={styles.title}>{t('title_02')}</h3>
                  <h4 className={styles.description}>{t('content_02')}</h4>
                  <div className={styles.cubeWrapper}>
                      <div className={styles.cube}>
                        <div className={styles.cara1}>
                          <Image
                            src="/img/ecommerce.png"
                            alt={t('title_02')}
                            width={200}
                            height={200}
                            quality={1}
                            loading="eager"
                            />
                          </div>
                          <div className={styles.cara2}>
                          <Image
                            src="/img/ecommerce.png"
                            alt={t('title_02')}
                            width={200}
                            height={200}
                            quality={1}
                            loading="eager"
                            />
                          </div>
                          <div className={styles.cara3}>
                          <Image
                            src="/img/ecommerce.png"
                            alt={t('title_02')}
                            width={200}
                            height={200}
                            quality={1}
                            loading="eager"
                            />
                          </div>
                          <div className={styles.cara4}>
                          <Image
                            src="/img/ecommerce.png"
                            alt={t('title_02')}
                            width={200}
                            height={200}
                            quality={1}
                            loading="eager"
                            />
                          </div>
                          <div className={styles.cara5}>
                          <Image
                            src="/img/ecommerce.png"
                            alt={t('title_02')}
                            width={200}
                            height={200}
                            quality={1}
                            loading="eager"
                            />
                          </div>
                          <div className={styles.cara6}>
                          <Image
                            src="/img/ecommerce.png"
                            alt={t('title_02')}
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
              <Link href={`/case-study/3`}>
                <a alt="Custom Wordpress Theme - for Musicians and Bands" rel="alternate" hreflang="en">
                  <h3 className={styles.title}>{t('title_03')}</h3>
                  <h4 className={styles.description}>{t('content_03')}</h4>
                  <div className={styles.cubeWrapper}>
                  <div className={styles.cube}>
                  <div className={styles.cara1}>
                  <Image
                    src="/img/music_3D_Top.png"
                    alt={t('title_03')}
                    width={200}
                    height={200}
                    quality={1}
                    loading="eager"
                    />
                  </div>
                  <div className={styles.cara2}>
                    <Image
                    src="/img/music_3D_Top.png"
                    alt={t('title_03')}
                    width={200}
                    height={200}
                    quality={1}
                    loading="eager"
                    />
                  </div>
                  <div className={styles.cara3}>
                    <Image
                    src="/img/music_3D_Top.png"
                    alt={t('title_03')}
                    width={200}
                    height={200}
                    quality={1}
                    loading="eager"
                    />
                  </div>
                  <div className={styles.cara4}>
                    <Image
                    src="/img/music_3D_Top.png"
                    alt={t('title_03')}
                    width={200}
                    height={200}
                    quality={1}
                    loading="eager"
                    />
                  </div>
                  <div className={styles.cara5}>
                    <Image
                    src="/img/music_3D_Top.png"
                    alt={t('title_03')}
                    width={200}
                    height={200}
                    quality={1}
                    loading="eager"
                    />
                  </div>
                  <div className={styles.cara6}>
                    <Image
                    src="/img/music_3D_Top.png"
                    alt={t('title_03')}
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
    </Container>
  );
}

export default CaseStudiesWrap;

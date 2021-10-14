import Image from 'next/image'
import styles from './SideProjectWrap.module.css'
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

const SideProjectWrap = (props) => {
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
            <Link href={`/side-project/hellocode`}>
              <a alt={t('title_00')} rel="alternate" hreflang="en">
                <h3 className={styles.title}>{t('title_00')}</h3>
                <h4 className={styles.description}>{t('content_00')}</h4>
                <span>
                  <Image
                    src="/img/side-project/hc/hc02.gif"
                    alt={t('title_01')}
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
                <a alt="Pendulum EP - Vinyl Record Label Design" rel="alternate" hreflang="en">
                  <h3 className={styles.title}>{t('title_01')}</h3>
                  <h4 className={styles.description}>{t('content_01')}</h4>
                  <span>
                    <Image
                    src="/img/side-project/surveillance/jessieNguyen-socialProof.jpg"
                    alt={t('title_02')}
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
                <a alt="Shopify Fragrance eCommerce - A Discovery In Scent" rel="alternate" hreflang="en">
                  <h3 className={styles.title}>{t('title_02')}</h3>
                  <h4 className={styles.description}>{t('content_02')}</h4>
                  <span>
                    <Image
                    src="/img/side-project/width/width_Landing_Page.png"
                    alt={t('title_03')}
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
                <a alt="Custom Wordpress Theme - for Musicians and Bands" rel="alternate" hreflang="en">
                  <h3 className={styles.title}>{t('title_03')}</h3>
                  <h4 className={styles.description}>{t('content_03')}</h4>
                  <span>
                    <Image
                    src="/img/colorView_01.jpg"
                    alt={t('title_05')}
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
    </Container>
  );
}

export default SideProjectWrap;

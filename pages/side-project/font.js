import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Container from '../../components/Container'
import NavBar from '../../components/NavBar'
import RelatedCTA from '../../components/RelatedCTA'
import CaseStudiesWrap from '../../components/CaseStudiesWrap'
import styles from '../../styles/Report.module.css'

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

function ProjectIndex() {
  const { t } = useTranslation('sideProject')
  return <>
  <NavBar />
  <div className={styles.backgroundColor}>
  <Container>
  <Head>
    <title>{t('title_06')} | Side Project</title>
    <meta name='twitter:url' content='https://juliomontas.com/side-project/font/' />
    <meta property='og:url' content='https://juliomontas.com/side-project/font/' />
    <meta property='og:image' content='https://juliomontas.com/img/side-project/hc/hc01.gif' />
    <meta name='twitter:image' content='https://juliomontas.com/img/side-project/hc/hc01.gif' />
    <meta property='og:title' content='Font | Julio Montas' />
    <meta name='twitter:title' content='Font | Julio Montas' />
    <meta name="description" content="List of programming languages that have been developed from 1950–1979, 1980–1999, and 2000 to the present" key="description"/>
    <meta property='og:description' content='List of programming languages that have been developed from 1950–1979, 1980–1999, and 2000 to the present' />
    <meta name='twitter:description' content='List of programming languages that have been developed from 1950–1979, 1980–1999, and 2000 to the present' />
    <link rel="canonical" href="https://juliomontas.com/side-project/font/" />
    <link rel="alternate" href="https://juliomontas.com/side-project/font/" hreflang="en-us" />
    <link rel="alternate" href="https://juliomontas.com/es-us/side-project/font/" hreflang="es-us" />
  </Head>
  <motion.div exit={{y: -300, opacity: 0 }} initial='initial' animate='animate'>
  <motion.div variants={stagger}>
  <div className={styles.mainIndex}>
    <div className={styles.mainCenterCont}>
      <div className={styles.gridContainer}>
        <motion.div variants={fadeInUp}>
          <div className={styles.flipSwitch}>
            <div>
              <h1>{t('title_06')}</h1>
              <p>{t('content_06')}</p>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
        <div className={styles.flipSwitch}>
            <h2>Concept</h2>
            <p>FontLap Studio 5, Design a slab serif with light and strong stroke. A mix of a sans serif geometric + serif modern look, to get a elegance design yet with a strong male touch</p>
        </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
        <div>
        <p className={styles.textUnderImg}>Upper Case</p>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          speed={400}
          autoplay={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            320: {
                slidesPerView: 1,
                spaceBetween: 15,
                width: 300
            },
            1200: {
                slidesPerView: 1,
                spaceBetween: 0,
                width: 780
            }
          }}
        >
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-upperCase-A.png"
                alt="Mockup of python page"
                width={641}
                height={512}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-upperCase-B.png"
                alt="Mockup of python page"
                width={641}
                height={512}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-upperCase-C.png"
                alt="Mockup of python page"
                width={641}
                height={512}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-upperCase-D.png"
                alt="Mockup of python page"
                width={641}
                height={512}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-upperCase-E.png"
                alt="Mockup of python page"
                width={641}
                height={512}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-upperCase-G.png"
                alt="Mockup of python page"
                width={641}
                height={512}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-upperCase-F.png"
                alt="Mockup of python page"
                width={641}
                height={512}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-upperCase-H.png"
                alt="Mockup of python page"
                width={641}
                height={512}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-upperCase-I.png"
                alt="Mockup of python page"
                width={641}
                height={512}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-upperCase-K.png"
                alt="Mockup of python page"
                width={641}
                height={512}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-upperCase-L.png"
                alt="Mockup of python page"
                width={641}
                height={512}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-upperCase-M.png"
                alt="Mockup of python page"
                width={641}
                height={512}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-upperCase-N.png"
                alt="Mockup of python page"
                width={641}
                height={512}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-upperCase-O.png"
                alt="Mockup of python page"
                width={641}
                height={512}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-upperCase-P.png"
                alt="Mockup of python page"
                width={641}
                height={512}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-upperCase-Q.png"
                alt="Mockup of python page"
                width={641}
                height={512}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-upperCase-R.png"
                alt="Mockup of python page"
                width={641}
                height={512}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-upperCase-S.png"
                alt="Mockup of python page"
                width={641}
                height={512}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-upperCase-T.png"
                alt="Mockup of python page"
                width={641}
                height={512}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-upperCase-U.png"
                alt="Mockup of python page"
                width={641}
                height={512}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-upperCase-V.png"
                alt="Mockup of python page"
                width={641}
                height={512}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-upperCase-W.png"
                alt="Mockup of python page"
                width={641}
                height={512}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-upperCase-X.png"
                alt="Mockup of python page"
                width={641}
                height={512}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-upperCase-Y.png"
                alt="Mockup of python page"
                width={641}
                height={512}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-upperCase-Z.png"
                alt="Mockup of python page"
                width={641}
                height={512}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
        </Swiper>
        </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
        <div>
        <p className={styles.textUnderImg}>Lower Case</p>
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
                slidesPerView: 1,
                spaceBetween: 0,
                width: 780
            }
          }}
        >
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-lowerCase-a.png"
                alt="Mockup of python page"
                width={680}
                height={622}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-lowerCase-b.png"
                alt="Mockup of python page"
                width={680}
                height={622}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-lowerCase-c.png"
                alt="Mockup of python page"
                width={680}
                height={622}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-lowerCase-d.png"
                alt="Mockup of python page"
                width={680}
                height={622}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-lowerCase-e.png"
                alt="Mockup of python page"
                width={680}
                height={622}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-lowerCase-g.png"
                alt="Mockup of python page"
                width={680}
                height={622}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-lowerCase-f.png"
                alt="Mockup of python page"
                width={680}
                height={622}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-lowerCase-h.png"
                alt="Mockup of python page"
                width={680}
                height={622}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-lowerCase-i.png"
                alt="Mockup of python page"
                width={680}
                height={622}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-lowerCase-k.png"
                alt="Mockup of python page"
                width={680}
                height={622}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-lowerCase-l.png"
                alt="Mockup of python page"
                width={680}
                height={622}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-lowerCase-m.png"
                alt="Mockup of python page"
                width={680}
                height={622}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-lowerCase-n.png"
                alt="Mockup of python page"
                width={680}
                height={622}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-lowerCase-o.png"
                alt="Mockup of python page"
                width={680}
                height={622}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-lowerCase-p.png"
                alt="Mockup of python page"
                width={680}
                height={622}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-lowerCase-q.png"
                alt="Mockup of python page"
                width={680}
                height={622}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-lowerCase-r.png"
                alt="Mockup of python page"
                width={680}
                height={622}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-lowerCase-s.png"
                alt="Mockup of python page"
                width={680}
                height={622}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-lowerCase-t.png"
                alt="Mockup of python page"
                width={680}
                height={622}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-lowerCase-u.png"
                alt="Mockup of python page"
                width={680}
                height={622}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-lowerCase-v.png"
                alt="Mockup of python page"
                width={680}
                height={622}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-lowerCase-w.png"
                alt="Mockup of python page"
                width={680}
                height={622}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-lowerCase-x.png"
                alt="Mockup of python page"
                width={680}
                height={622}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-lowerCase-y.png"
                alt="Mockup of python page"
                width={680}
                height={622}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-lowerCase-z.png"
                alt="Mockup of python page"
                width={680}
                height={622}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
        </Swiper>
        </div>
        </motion.div>






        <motion.div variants={fadeInUp}>
        <div>
        <p className={styles.textUnderImg}>Number</p>
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
                slidesPerView: 1,
                spaceBetween: 0,
                width: 780
            }
          }}
        >
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-number-0.png"
                alt="Mockup of python page"
                width={680}
                height={489}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-number-1.png"
                alt="Mockup of python page"
                width={680}
                height={489}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-number-2.png"
                alt="Mockup of python page"
                width={680}
                height={489}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-number-3.png"
                alt="Mockup of python page"
                width={680}
                height={489}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-number-4.png"
                alt="Mockup of python page"
                width={680}
                height={489}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-number-5.png"
                alt="Mockup of python page"
                width={680}
                height={489}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-number-6.png"
                alt="Mockup of python page"
                width={680}
                height={489}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-number-7.png"
                alt="Mockup of python page"
                width={680}
                height={489}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-number-8.png"
                alt="Mockup of python page"
                width={680}
                height={489}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/img/side-project/font/slabLine-number-9.png"
                alt="Mockup of python page"
                width={680}
                height={489}
                quality={100}
                loading="eager"
              />
            </SwiperSlide>
        </Swiper>
        </div>
        </motion.div>

















        <motion.div variants={fadeInUp}>
          <div className={styles.flipSwitch}>
            <h2>URL</h2>
            <RelatedCTA
              url=""
              title="Download"
              content="Text"
            />
          </div>
        </motion.div>

        <motion.div variants={fadeInUp}>
        <div className={styles.flipSwitch}>
          <h2>More Projects</h2>
          <ul>
            <RelatedCTA
              url="/side-project/surveillance-culture"
              title={t('title_02')}
              content={t('content_02')}
            />
            <RelatedCTA
              url="/side-project/width-take-over-the-screen"
              title={t('title_03')}
              content={t('content_03')}
            />
            <RelatedCTA
              url="/side-project/basic-color-fundamentals"
              title={t('title_05')}
              content={t('content_05')}
            />
          </ul>
        </div>
        </motion.div>

        <CaseStudiesWrap
          title="Case Studies"
        />


      </div>
    </div>
  </div>
  </motion.div>
  </motion.div>
  </Container>
  </div>
</>
}

export async function getServerSideProps(context) {
    return {
        props: {},
    }
}

export default ProjectIndex

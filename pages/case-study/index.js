import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';

import Layout from '../../components/Layout/Layout'
import styles from '../../styles/CaseStudy.module.css'

function CaseStudy({ posts }) {
  return <Layout>
    <motion.div 
       initial={{ x: 600, opacity: 0 }}
       animate={{ x: 0, opacity: 1 }}
       exit={{ x: -600, opacity: 0 }}>
          <Swiper
      speed={400}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{ 
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
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
        <div className={styles.main}>
          <div>
            <div className={styles.cube}>
              <div className={styles.cara1}>
              <Image
                src="/img/Pendulum-3D-Box-Face-01.jpg"
                alt="Picture of the author"
                width={200}
                height={200}
                />
              </div>
              <div className={styles.cara2}>
              <Image
                src="/img/Pendulum-3D-Box-Right-02.jpg"
                alt="Picture of the author"
                width={200}
                height={200}
                />
              </div>
              <div className={styles.cara3}>
              <Image
                src="/img/Pendulum-3D-Box-Back-03.jpg"
                alt="Picture of the author"
                width={200}
                height={200}
                />
              </div>
              <div className={styles.cara4}>
              <Image
                src="/img/Pendulum-3D-Box-Left-04.jpg"
                alt="Picture of the author"
                width={200}
                height={200}
                />
              </div>
              <div className={styles.cara5}>
              <Image
                src="/img/Pendulum-3D-Box-Bottom-05.jpg"
                alt="Picture of the author"
                width={200}
                height={200}
                />
              </div>
              <div className={styles.cara6}>
              <Image
                src="/img/Pendulum-3D-Box-Top-06.jpg"
                alt="Picture of the author"
                width={200}
                height={200}
                />
              </div>
            </div>
            <Link href={`/case-study/1`}>
              <a><h2 className={styles.title}>Vinyl Label Design Pendulum EP</h2></a>
            </Link>
            <p className={styles.description}>The second EP of ERRANT Recordings with a style of ambient and minimal tech house</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.main}>
          <div>
            <div className={styles.cube}>
              <div className={styles.cara1}>
              <Image
                src="/img/ecommerce.png"
                alt="Picture of the author"
                width={200}
                height={200}
                />
              </div>
              <div className={styles.cara2}>
              <Image
                src="/img/ecommerce.png"
                alt="Picture of the author"
                width={200}
                height={200}
                />
              </div>
              <div className={styles.cara3}>
              <Image
                src="/img/ecommerce.png"
                alt="Picture of the author"
                width={200}
                height={200}
                />
              </div>
              <div className={styles.cara4}>
              <Image
                src="/img/ecommerce.png"
                alt="Picture of the author"
                width={200}
                height={200}
                />
              </div>
              <div className={styles.cara5}>
              <Image
                src="/img/ecommerce.png"
                alt="Picture of the author"
                width={200}
                height={200}
                />
              </div>
              <div className={styles.cara6}>
              <Image
                src="/img/ecommerce.png"
                alt="Picture of the author"
                width={200}
                height={200}
                />
              </div>
            </div>
            <Link href={`/case-study/2`}>
              <a><h2 className={styles.title}>So-Avant-Garde.com A Discovery In Scent</h2></a>
            </Link>
            <p className={styles.description}>A luxury fragrances distribution company going B2C with their first shofity eCommerce online store</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.main}>
          <div>
            <div className={styles.cube}>
              <div className={styles.cara1}>
              <Image
                src="/img/music_3D_Top.png"
                alt="Picture of the author"
                width={200}
                height={200}
                />
              </div>
              <div className={styles.cara2}>
                <Image
                src="/img/music_3D_Top.png"
                alt="Picture of the author"
                width={200}
                height={200}
                />
              </div>
              <div className={styles.cara3}>
                <Image
                src="/img/music_3D_Top.png"
                alt="Picture of the author"
                width={200}
                height={200}
                />
              </div>
              <div className={styles.cara4}>
                <Image
                src="/img/music_3D_Top.png"
                alt="Picture of the author"
                width={200}
                height={200}
                />
              </div>
              <div className={styles.cara5}>
                <Image
                src="/img/music_3D_Top.png"
                alt="Picture of the author"
                width={200}
                height={200}
                />
              </div>
              <div className={styles.cara6}>
                <Image
                src="/img/music_3D_Top.png"
                alt="Picture of the author"
                width={200}
                height={200}
                />
              </div>
            </div>
            <Link href={`/case-study/3`}>
              <a><h2 className={styles.title}>Website CMS for Musicians & Bands</h2></a>
            </Link>
            <p className={styles.description}>Custom content management system for independent artist to manage and keep their fan loyalty.</p>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.main}>
          <div>
            <div className={styles.cube}>
              <div className={styles.cara1}>Private Collection</div>
              <div className={styles.cara2}></div>
              <div className={styles.cara3}></div>
              <div className={styles.cara4}></div>
              <div className={styles.cara5}></div>
              <div className={styles.cara6}></div>
            </div>
            <Link href={`/case-study/4`}>
              <a><h2 className={styles.title}>Private Collection</h2></a>
            </Link>
            <p className={styles.description}>Custom content management system for independent artist to manage and keep their fan loyalty.</p>
          </div>
          </div>
        </SwiperSlide>






      </Swiper>
    </motion.div>
  </Layout>
}

export default CaseStudy
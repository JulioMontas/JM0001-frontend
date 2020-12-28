import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';

import Layout from '../../components/Layout/Layout'
import styles from '../../styles/Project.module.css'

function ProjectIndex() {
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
            <Image
                src="/img/helloCode.gif"
                alt="Picture of the author"
                width={200}
                height={200}
                />
              <Link href={`/project/hellocode`}>
                <a><h2 className={styles.blgTitle}>HelloCo.de</h2></a>
              </Link>
              <p className={styles.blgSummery}>The home for programming languages.</p>
            </div>
          </div>
        </SwiperSlide>
           <SwiperSlide>
          <div className={styles.main}>
            <div>
            <Image
              src="/img/Width_BothPlayer_360.gif"
              alt="Picture of the author"
              width={200}
              height={200}
            />
              <Link href={`/project/width`}>
                <a><h2 className={styles.blgTitle}>Width: Screen-wars</h2></a>
              </Link>
              <p className={styles.blgSummery}>Protect your side to take over the screen.</p>
            </div>
          </div>
        </SwiperSlide>
           <SwiperSlide>
          <div className={styles.main}>
            <div>
            <Image
              src="/img/colorView_01.jpg"
              alt="Picture of the author"
              width={200}
              height={200}
            />
              <Link href={`/project/colors`}>
                <a><h2 className={styles.blgTitle}>Colors</h2></a>
              </Link>
              <p className={styles.blgSummery}>Learn the basic colors</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.main}>
            <div>
            <Image
                src="/img/meliorem.png"
                alt="Picture of the author"
                width={200}
                height={200}
                />
              <Link href={`/project/meliorem`}>
                <a><h2 className={styles.blgTitle}>Meliorem</h2></a>
              </Link>
              <p className={styles.blgSummery}>Reward task to stimulate your existence.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </motion.div>
  </Layout>
}

export default ProjectIndex
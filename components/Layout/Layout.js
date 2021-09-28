import useTranslation from 'next-translate/useTranslation'
import Head from "next/head"
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from '../../styles/Layout.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Layout = ({children}) => {
  const { t } = useTranslation('common')
  let router = useRouter()

    return (
        <div className={styles.container}>
            <header className={styles.header}>
              <div>
                <Link href="/">
                  <a alt="Julio Montás" rel="alternate" hreflang="en">
                    <h1>{t('title')}</h1>
                  </a>
                </Link>
              </div>
              <div>
              <ul className={styles.changeLang}>
                <li>
                  <a href="#">Langs</a>
                  <ul class="dropdown">
                    {router.locales.map((locale) => (
                    <li key={locale}>
                      <Link href={router.asPath} locale={locale}>
                        <a>{locale}</a>
                      </Link>
                    </li>
                    ))}
                  </ul>
                </li>
                </ul>
              </div>
            </header>

            <main className={styles.main}>{children}</main>

            <footer className={styles.footer}>
              <Swiper
              speed={400}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              breakpoints={{
                320: {
                  slidesPerView: 3,
                  spaceBetween: 35,
                  width: 300
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 5,
                  width: 500
                }
              }}
              >
                <SwiperSlide>
                  <div>
                  {/* <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.864 9.43322L7.91659 7.30877C7.8287 7.21289 7.70955 7.15961 7.58454 7.15961H7.26616C7.80526 6.40743 8.1256 5.46134 8.1256 4.43214C8.1256 1.98381 6.3071 0 4.0628 0C1.81849 0 0 1.98381 0 4.43214C0 6.88048 1.81849 8.86428 4.0628 8.86428C5.00623 8.86428 5.87348 8.51483 6.56298 7.92672V8.27404C6.56298 8.41042 6.61181 8.5404 6.69971 8.63628L8.64712 10.7607C8.83072 10.961 9.12762 10.961 9.30927 10.7607L9.86205 10.1577C10.0457 9.95741 10.0457 9.63352 9.864 9.43322ZM4.0628 7.15961C2.68184 7.15961 1.56261 5.94078 1.56261 4.43214C1.56261 2.92564 2.67988 1.70467 4.0628 1.70467C5.44376 1.70467 6.56298 2.92351 6.56298 4.43214C6.56298 5.93864 5.44571 7.15961 4.0628 7.15961Z" fill="#F8E71C"/></svg> */}
                  <Link href="/case-study" className={styles.activeCTAfooter}>
                    <a alt="Case Study">
                      {/* {t('caseStudy')} */}
                      {t('caseStudy')}
                    </a>
                  </Link>
                  </div>
                </SwiperSlide>

                 <SwiperSlide>
                  <div>
                   {/* <svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.12026 2.65625V0H0.441456C0.196816 0 0 0.208984 0 0.46875V9.53125C0 9.79102 0.196816 10 0.441456 10H6.62184C6.86648 10 7.0633 9.79102 7.0633 9.53125V3.125H4.56171C4.31891 3.125 4.12026 2.91406 4.12026 2.65625ZM5.29747 7.26562C5.29747 7.39453 5.19815 7.5 5.07675 7.5H1.98655C1.86515 7.5 1.76582 7.39453 1.76582 7.26562V7.10938C1.76582 6.98047 1.86515 6.875 1.98655 6.875H5.07675C5.19815 6.875 5.29747 6.98047 5.29747 7.10938V7.26562ZM5.29747 6.01562C5.29747 6.14453 5.19815 6.25 5.07675 6.25H1.98655C1.86515 6.25 1.76582 6.14453 1.76582 6.01562V5.85938C1.76582 5.73047 1.86515 5.625 1.98655 5.625H5.07675C5.19815 5.625 5.29747 5.73047 5.29747 5.85938V6.01562ZM5.29747 4.60938V4.76562C5.29747 4.89453 5.19815 5 5.07675 5H1.98655C1.86515 5 1.76582 4.89453 1.76582 4.76562V4.60938C1.76582 4.48047 1.86515 4.375 1.98655 4.375H5.07675C5.19815 4.375 5.29747 4.48047 5.29747 4.60938ZM7.0633 2.38086V2.5H4.70887V0H4.82107C4.93879 0 5.05099 0.0488281 5.13377 0.136719L6.93454 2.05078C7.01731 2.13867 7.0633 2.25781 7.0633 2.38086Z" fill="#F8E71C"/></svg> */}
                  <Link href="/side-project">
                    <a alt="Side Project">
                    {t('sideProject')}
                    </a>
                  </Link>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div>
                  {/* <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 5C5.92031 5 7.07143 3.88086 7.07143 2.5C7.07143 1.11914 5.92031 0 4.5 0C3.07969 0 1.92857 1.11914 1.92857 2.5C1.92857 3.88086 3.07969 5 4.5 5ZM6.3 5.625H5.96451C5.51853 5.82422 5.02232 5.9375 4.5 5.9375C3.97768 5.9375 3.48348 5.82422 3.03549 5.625H2.7C1.20937 5.625 0 6.80078 0 8.25V9.0625C0 9.58008 0.43192 10 0.964286 10H8.03571C8.56808 10 9 9.58008 9 9.0625V8.25C9 6.80078 7.79063 5.625 6.3 5.625Z" fill="#F8E71C"/></svg> */}
                  <Link href="/about-me">
                    <a alt="About Me">
                    {t('aboutMe')}
                    </a>
                  </Link>
                  </div>
                </SwiperSlide>

              {/*<SwiperSlide>
                  <div>
                   <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 5C5.92031 5 7.07143 3.88086 7.07143 2.5C7.07143 1.11914 5.92031 0 4.5 0C3.07969 0 1.92857 1.11914 1.92857 2.5C1.92857 3.88086 3.07969 5 4.5 5ZM6.3 5.625H5.96451C5.51853 5.82422 5.02232 5.9375 4.5 5.9375C3.97768 5.9375 3.48348 5.82422 3.03549 5.625H2.7C1.20937 5.625 0 6.80078 0 8.25V9.0625C0 9.58008 0.43192 10 0.964286 10H8.03571C8.56808 10 9 9.58008 9 9.0625V8.25C9 6.80078 7.79063 5.625 6.3 5.625Z" fill="#F8E71C"/></svg>
                  <Link href="/blog">
                    <a alt="Blog">
                      Blog
                    </a>
                  </Link>
                  </div>
                </SwiperSlide>*/}

                {/* <SwiperSlide>
                  <div>
                   <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 5C5.92031 5 7.07143 3.88086 7.07143 2.5C7.07143 1.11914 5.92031 0 4.5 0C3.07969 0 1.92857 1.11914 1.92857 2.5C1.92857 3.88086 3.07969 5 4.5 5ZM6.3 5.625H5.96451C5.51853 5.82422 5.02232 5.9375 4.5 5.9375C3.97768 5.9375 3.48348 5.82422 3.03549 5.625H2.7C1.20937 5.625 0 6.80078 0 8.25V9.0625C0 9.58008 0.43192 10 0.964286 10H8.03571C8.56808 10 9 9.58008 9 9.0625V8.25C9 6.80078 7.79063 5.625 6.3 5.625Z" fill="#F8E71C"/></svg>
                  <Link href="/shop">
                    <a alt="Shop">
                      {t('shop')}
                    </a>
                  </Link>
                  </div>
                </SwiperSlide> */}
              </Swiper>
              <div class="cui-embed" data-cui-uid="IBnyOp" data-cui-avatar="https://images.typeform.com/images/5jv4sQjwBhai" data-cui-mode="pill" data-cui-pill-button-color="#F3CD59"></div><script src="https://public-assets.typeform.com/confab/embed.js" async></script>            </footer>
        </div>
    )
};
export const getStaticProps = async () => ({
  props: {
    namespacesRequired: ['common'],
  }
})
export default Layout

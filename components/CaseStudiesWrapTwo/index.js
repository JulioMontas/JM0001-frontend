import Image from 'next/image'
import styles from './CaseStudiesWrapTwo.module.css'
import Container from '../../components/Container'
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
    title: "Sebastian Faena: Fashion Photographer Miscrosite",
    skill:"UX/UI Designer & Develoment",
    data:"2013",
    description:"A multi-talented EDM/Pop artist, songwriter and producer with over 50+ releases. Searching for a digital space to connect with her fans.",
    slug: "sebastian-faena-fashion-photographer-miscrosite",
  },
  {
    id:'01',
    title: "Custom Wordpress Theme For Musician",
    skill:"Creative Director (Art + Design) & WordPress Developer",
    data:"2017",
    description:"Text text text text",
    slug: "",
  },
  {
    id:'02',
    title: "Shopify E-commerce Custom Theme Fragrance & Development",
    skill:"Freelance | Creative Director (Art + Design) & Full Stack Developer",
    data:"Dec 2016 - Mar 2017",
    description:"I lead the design and development of a fragrance e-Commerce business. From initial design to final development, I handled every aspect of the process to ensure a seamless and successful project. Using Shopify I was able to create a fully responsive and intuitive shopping experience that met the unique needs of the business.",
    slug: "",
  },
  {
    id:'03',
    title: "Vinyl Label Design",
    skill:"Freelance | Creative Director",
    data:"2019",
    description:"World-class Colombian DJ, producer and sound engineer based in New York City. His work spans numerous genres, producing music for both established and breakout artists.",
    slug: "",
  },
  {
    id:'04',
    title: "Dashboard for a Real Estate, Early Stage Startup",
    skill:"Freelance | Creative Director & Full Stack Developer",
    data:"Sep 2021 - Jan 2022",
    description:"I turn UI design to React components to convert complex graph data into visually appealing and intuitive dashboard. This helped the users easily track and analyze key metrics, and provided valuable insights for the team. I design and developer their first MVP for their real estate platform.",
    slug: "",
  },
  {
    id:'05',
    title: "Modern Headless CMS for a Law Firm",
    skill:"Freelance | Creative Director & Full Stack Developer",
    data:"Nov 2021 - Mar 2022",
    description:"I was able to create a fully responsive and user-friendly website design that met the unique needs of the law firm. I convert their WordPress site to a serverless website using Figma for their UI design and front-end with GatsbyJS's framework and DatoCMS's with GraphQL to call the backend data, this development architecture allowed for a faster, more secure, and easier to manage website.",
    slug: "",
  },
  {
    id:'06',
    title: "Webflow Custom Theme for a SaaS Marketing",
    skill:"Freelance | Creative Director & Full Stack Developer",
    data:"Mar 2022 - Jul 2022",
    description:"I create a custom theme using the design app Figma for a Webflow website that was focused on increasing customer sign-ups. I was able to craft a visually stunning and user-friendly theme that met the specific needs and goals of the client. With a focus on user experience and conversion optimization, I was able to help the client achieve their goal of increasing customer sign-ups.",
    slug: "",
  },
  {
    id:'07',
    title: "Squarespace e-Commerce Custom Theme and Development",
    skill:"Freelance | Creative Director & Full Stack Developer",
    data:"May 2022 - Nov 2022",
    description:"I recently worked with the Eres.You team to design and develop a custom e-Commerce store that showcases their sustainable fashion. Using Squarespace's CMS platform, I was able to create a fully responsive and intuitive shopping experience that met the unique needs of their brand.",
    slug: "",
  }
]

const CaseStudiesWrap = (props) => {
  return(
    <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
      <motion.div variants={stagger} className={styles.main}>

        <h2>
          {props.title}
        </h2>

        <div className={styles.boxes}>
          {data.map(data => (
            <div key={data.id} className={styles.link}>
              <div className={styles.main}>
                <h3 className={styles.title}>{data.title}</h3>
                <h4 className={styles.skill}>{data.skill}</h4>
                <p className={styles.data}>{data.data}</p>
              </div>
              <p className={styles.description}>
                {data.description}
              </p>
            </div>
          ))}
        </div>

      </motion.div>
    </motion.div>
  );
}

export default CaseStudiesWrap;

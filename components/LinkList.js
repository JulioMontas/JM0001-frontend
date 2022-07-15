import styles from './LinkList.module.css'
import Link from 'next/link'
import { motion } from 'framer-motion'

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
    png:"png/office-table-and-chair.png",
    alt:"Office Table and Chair",
    title:"Freelance Portfolio",
    summary:"Building Custom Website, eCommerce, CMS and Mobile App Prototype.",
    url:"/",
    theme:"card-true"
  },
  {
    png:"",
    alt:"",
    title:"Hello Code",
    summary:"Archive of programming languages that have been developed from past to present to improve how software architects choose their stack",
    url:"",
    theme:"card-false"
  },
  {
    png:"png/dj-playing-music.png",
    alt:"Dj playing music",
    title:"SoundCloud",
    summary:"Playing Minimal House / Techno",
    url:"https://soundcloud.com/juliomontas",
    theme:"card-true"
  },
  {
    png:"",
    alt:"",
    title:"Meliorem",
    summary:"Reward self task manager to stimulate your existence",
    url:"",
    theme:"card-false"
  },
  {
    png:"png/camera.png",
    alt:"camera",
    title:"Unsplas",
    summary:"Open source photography",
    url:"https://unsplash.com/@juliomontas",
    theme:"card-true"
  },
  {
    png:"",
    alt:"",
    title:"Verify My Number ",
    summary:"Manage your phone number connected to your social media channels",
    url:"",
    theme:"card-false"
  },
  {
    png:"png/creating-new-facility-using-vr-technology.png",
    alt:"Creating new facility using VR technology",
    title:"Github",
    summary:"Code Portfolio In JavaScript and other programming languages",
    url:"https://github.com/JulioMontas",
    theme:"card-true"
  },
  {
    png:"",
    alt:"",
    title:"Daddy List",
    summary:"Keeping track of your subs",
    url:"",
    theme:"card-false"
  },
  {
    png:"png/house-plant-for-decoration.png",
    alt:"House plant for decoration",
    title:"Dribbble",
    summary:"UI Design Portfolio ",
    url:"https://dribbble.com/juliomontas",
    theme:"card-true"
  },
  {
    png:"",
    alt:"",
    title:"Sleeping Place",
    summary:"Metaverse Cemetary",
    url:"",
    theme:"card-false"
  },
  {
    png:"png/blockchain-platform-in-virtual-reality.png",
    alt:"Blockchain Platform in Virtual Reality",
    title:"CodePen",
    summary:"Front-end Code Snippet ",
    url:"https://codepen.io/JulioMontas/",
    theme:"card-true"
  }
]

const LinkList = (props) => {
  return(
      <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate' className="LinkList">
        <motion.div variants={stagger} className="container">

        {data.map(data => (
          <motion.div variants={fadeInUp} className={data.theme}>
            <Link href={data.url}>
              <a alt={data.title}>
                <div className="image">
                  <img src={data.png} alt={data.alt} />
                </div>
                <div className="summary">
                  <h3>{data.title}</h3>
                  <p>{data.summary}</p>
                </div>
              </a>
            </Link>
          </motion.div>
        ))}

        </motion.div>
      </motion.div>
  );
};

export default LinkList

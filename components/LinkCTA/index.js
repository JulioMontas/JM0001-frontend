import Link from 'next/link'
import styles from './LinkCTA.module.css'
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
    url:"/side-project/hellocode-the-home-for-programming-languages",
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
    url:"side-project/meliorem-cultivating-your-passion-to-level-up",
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
    title:"Surveillance Culture",
    summary:"A social experiment using the top social media channels to farm users sensitive data",
    url:"side-project/surveillance-culture",
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
    title:"Width - Take Over the Screen",
    summary:"A two-player game in which you must defeat your opponents by clicking to take over the screen.",
    url:"side-project/width-take-over-the-screen",
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
    title:"COLOR",
    summary:"Teaching toddler how to learn the basic of colors pronunciation and visual recognition memory.",
    url:"side-project/basic-color-fundamentals",
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

const futureData = [
  {
    png:"",
    alt:"",
    title:"Verify My Number ",
    summary:"Manage your phone number connected to your social media channels",
    url:"",
    theme:"card-false"
  },
  {
    png:"",
    alt:"",
    title:"Daddy List",
    summary:"Keeping track of your subs",
    url:"https://daddylist.xyz",
    theme:"card-false"
  },
  {
    png:"",
    alt:"",
    title:"Sleeping Place",
    summary:"Metaverse Cemetary",
    url:"https://sleeping.place/",
    theme:"card-false"
  }
]

const LinkCTA = (props) => {
  return(
      <div className="LinkList">
        <div>
          <motion.div variants={fadeInUp} className={props.theme}>
            <Link href={props.url}>
              <a alt={props.title}>
                <div className="image">
                  <img src={props.png} alt={props.alt} />
                </div>
                <div className="summary">
                  <h3>{props.title}</h3>
                  <p>{props.summary}</p>
                </div>
              </a>
            </Link>
          </motion.div>
        </div>
      </div>
  );
};

export default LinkCTA

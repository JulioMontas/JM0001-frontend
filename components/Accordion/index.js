import { useState } from "react"
import Image from 'next/image'
import styles from './Accordion.module.css'
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

export default function Accordion(props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate' className={styles.wrappper}>
    <motion.div variants={stagger} className={styles.accordion} style={{ opacity: isShowing ? "1" : "0.5" }}>
    <motion.div variants={fadeInUp}>
      <button
        className={styles.button}
        onClick={toggle}
        type="button"
      >
        <div className={styles.title}>
          <div>
          <h2>{props.title}</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: props.quote
            }}
          />
          </div>
          <span style={{ transform: isShowing ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
        </div>
      </button>
    </motion.div>

      <div
        className={styles.content}
        style={{ display: isShowing ? "block" : "none" }}
      >
        <div className={styles.show}>
          <div className={styles.image}></div>
          <ul>
            <li>
              <h3 dangerouslySetInnerHTML={{__html: props.contUnoTitle}} />
              <p dangerouslySetInnerHTML={{__html: props.contUno}} />
            </li>
            {/*
            <li>
              <h3 dangerouslySetInnerHTML={{__html: props.contDosTitle}} />
              <p dangerouslySetInnerHTML={{__html: props.contDos}} />
            </li>
            */}
            <li>
              <div className={styles.svg}>
              <span>
                <img
                  src={"svg/icon/" + props.logoUno + ".svg"}
                  alt={props.logoUno}
                />
                <p>{props.logoUno}</p>
              </span>
              <span>
                <img
                  src={"svg/icon/" + props.logoDos + ".svg"}
                  alt={props.logoDos}
                />
                <p>{props.logoDos}</p>
              </span>
              <span>
                <img
                  src={"svg/icon/" + props.logoTres + ".svg"}
                  alt={props.logoTres}
                />
                <p>{props.logoTres}</p>
              </span>
              <span>
                <img
                  src={"svg/icon/" + props.logoFour + ".svg"}
                  alt={props.logoFour}
                />
                <p>{props.logoFour}</p>
              </span>
              <span>
                <img
                  src={"svg/icon/" + props.logoFive + ".svg"}
                  alt={props.logoFive}
                />
                <p>{props.logoFive}</p>
              </span>
              <span>
                <img
                  src={"svg/icon/" + props.logoSix + ".svg"}
                  alt={props.logoSix}
                />
                <p>{props.logoSix}</p>
              </span>
              </div>

            </li>
          </ul>
        </div> {/* End of .Show */}

      </div>
    </motion.div>
    </motion.div>
  );
}

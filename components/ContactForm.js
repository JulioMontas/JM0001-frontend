import Script from 'next/script'
import { motion } from "framer-motion"

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

const ContactForm = (props) => {
  return(
    <motion.div exit={{y: -300, opacity: 0 }} initial='initial' animate='animate'>
      <motion.div variants={stagger}>
        <motion.div variants={fadeInUp}>
          <div style={{padding:`10px`}}>
            <h2>
              {props.title}
            </h2>
            <div data-tf-widget="IBnyOp" data-tf-iframe-props="title=JulioMontas.com" data-tf-medium="snippet" style={{width:`100%`,height:`800px`}}>
            </div>
            <script src="//embed.typeform.com/next/embed.js" strategy="beforeInteractive"></script>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ContactForm;

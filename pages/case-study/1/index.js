import Link from 'next/link'
import { motion } from "framer-motion"

import Layout from '../../../components/Layout/Layout'
import styles from '../../../styles/CaseStudy.module.css'

function vinlyLabel() {
  return <Layout>
    <motion.div 
       initial={{ y: 600, opacity: 0 }}
       animate={{ y: 0, opacity: 1 }}
       exit={{ y: -600, opacity: 0 }}>
            <div className={styles.container}>
              <Link href="/case-study">
                 <a>Back</a>
              </Link>
                <div>
                    <h2>Vinyl Label Design Pendulum EP</h2>
                    <p className={styles.description}>The second EP of ERRANT Recordings with a style of ambient and minimal tech house</p>
                </div>
            </div>
    </motion.div>
  </Layout>
}

export default vinlyLabel
import styles from '../styles/Homepage.module.css'
import useTranslation from 'next-translate/useTranslation'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import ThirdCol from '../components/ThirdCol'
import CaseStudiesWrap from '../components/CaseStudiesWrap'
import SideProjectWrap from '../components/SideProjectWrap'
import TechStack from '../components/TechStack'
import Container from '../components/Container'

export default function Homepage() {
  return (
    <>
      <div className={styles.main}>
      <Container>
        <HeroSection
          title="Product Designer"
          description="Building a website or app for your idea? Let's build it together. Creative solutions for every stage of your company's growth - strategy, design, development and management. Based in NYC."
        />
        <CaseStudiesWrap
          title="Case Studies"
        />
        <TechStack />
        <SideProjectWrap
          title="Side Projects"
        />
      </Container>
      </div>
    </>
  );
}

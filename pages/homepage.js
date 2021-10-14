import styles from '../styles/Homepage.module.css'
import useTranslation from 'next-translate/useTranslation'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import ThirdCol from '../components/ThirdCol'
import CaseStudiesWrap from '../components/CaseStudiesWrap'
import SideProjectWrap from '../components/SideProjectWrap'

export default function Homepage() {
  return (
    <>
      <NavBar />
      <HeroSection
        title="Product Designer"
        description="Building a website or app for your idea? Let's build it together. Creative solutions for every stage of your company's growth - strategy, design, development and management. Based in NYC."
      />
      <div className={styles.main}>
        <ThirdCol
          title="Sculpting Your Vision"
          firstListTitle="Product Designer Ability"
          firstList="to reach your target audience with all-encompassing and human-centered UI design, user experience, and customer-focused UX design research."
          secondListTitle="E-commerce Best Practices To Scale"
          secondList="for multiple solution experience of your online business"
          lastListTitle="Design To Prototype for validating"
          lastList="product ideas and potential solutions with little investment of time and money in UX services"
          firstSVG="svg/ux-researcher.svg"
          secondSVG="svg/designer-task.svg"
        />
        <CaseStudiesWrap
          title="Case Studies"
        />
        <ThirdCol
          title="From Visual To Develoment"
          firstListTitle="Expert at Developing Responsive Websites,"
          firstList="with CSS alongside JavaScript and HTML. Consistent colors, fonts, and design to match the organization's branding guidelines."
          secondListTitle="Design To Code."
          secondList="Convert PSD, PDF, Adobe or Sketch files into working compile pixel-perfect website or app."
          lastListTitle="Professional eCommerce and CMS Development"
          lastList="services for popular CMS platforms such as WordPress, Shopify, and Gatsby."
          firstSVG="svg/development-researcher.svg"
          secondSVG="svg/developer-chat.svg"
        />
        <SideProjectWrap
          title="Side Projects"
        />
      </div>
    </>
  );
}

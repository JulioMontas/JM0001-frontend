import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import useTranslation from 'next-translate/useTranslation'

export default function Homepage() {
  return (
    <>
      <NavBar />
      <HeroSection
        title="Product Designer"
        description="Building a website or app for your idea? Let's build it together. Creative solutions for every stage of your company's growth - strategy, design, development and management. Based in NYC."
      />
    </>
  );
}

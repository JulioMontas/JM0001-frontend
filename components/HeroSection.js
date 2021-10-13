import styles from './HeroSection.module.css'
import Container from '../components/Container'
import Image from 'next/image'

const HeroSection = (props) => {
  return(
    <Container>
      <div className={styles.main}>
        <section>
          <Image
            src="/me.png"
            alt="self portrait wearing sunglasses indoors"
            width={200}
            height={200}
          />
          <h2>{props.title}</h2>
        </section>
        <section>
          <p>{props.description}</p>
        </section>
      </div>
    </Container>
  )
}

export default HeroSection;

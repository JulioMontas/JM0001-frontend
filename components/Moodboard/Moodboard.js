import Image from 'next/image'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import styles from './Moodboard.module.css'

const Moodboard = (props) => {
  const { t } = useTranslation('caseStudy')
  return(
    <div className={styles.container}>
      <h3 className={styles.title}>
        &#128444; {props.title}
      </h3>

      <div className={styles.colsFirst}>
        <div className={styles.shortCurve}>
          <Image
            src={props.oneSrc}
            alt={props.oneAlt}
            width={props.oneWidth}
            height={props.oneHeight}
            quality={50}
            layout="responsive"
            loading="eager"
          />
        </div>
        <div className={styles.longCurve}>
          <Image
            src={props.twoSrc}
            alt={props.twoAlt}
            width={props.twoWidth}
            height={props.twoHeight}
            quality={50}
            layout="responsive"
            loading="eager"
            />
        </div>
      </div>

      <div className={styles.colsSecond}>
        <div className={styles.longFlat}>
          <Image
            src={props.threeSrc}
            alt={props.threeAlt}
            width={props.threeWidth}
            height={props.threeHeight}
            quality={50}
            layout="responsive"
            loading="eager"
          />
        </div>
      </div>

      <div className={styles.colsThird}>
        <div className={styles.longButNo}>
          <Image
            src="/img/pendulum/2dae05d3bbc7421098364c1a3c13b562.gif"
            alt="touching hands"
            width={250}
            height={500}
            quality={10}
            layout="responsive"
            loading="eager"
          />
        </div>
        <div className={styles.injectionCircle}>
          <Image
            src="/img/pendulum/6b723189d4cbe4b218caa13ce755a1e5.jpg"
            alt="space"
            width={225}
            height={225}
            quality={20}
            layout="responsive"
            loading="eager"
          />
        </div>
      </div>

      <div className={styles.colsLast}>
        <div className={styles.halfCurveBottomLeft}>
          <Image
            src="/img/pendulum/shape.jpg"
            alt="shapes"
            width={599}
            height={596}
            quality={20}
            layout="responsive"
            loading="eager"
          />
        </div>
      </div>

    </div>
  );
}

export default Moodboard;

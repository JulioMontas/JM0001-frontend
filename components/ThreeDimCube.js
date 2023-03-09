import Link from 'next/link'
import Image from 'next/image'
import styles from './ThirdCol.module.css'

const ThreeDimCube = (props) => {
  return(
    <section>
      <Link href={props.slug}>
        <a alt={props.alt}>
          <h3 className={styles.title}>{props.title}</h3>
          <h4 className={styles.description}>{props.content}</h4>
          <div className={styles.cubeWrapper}>
            <div className={styles.cube}>
              <div className={styles.cara1}>
                <Image
                src={"/img/three-dim-cube/" + props.cover}
                alt={"front cover" + props.title}
                width={200}
                height={200}
                quality={1}
                loading="eager"
                />
              </div>
              <div className={styles.cara2}>
                <Image
                src={"/img/three-dim-cube/" + props.cover}
                alt={"left cover" + props.title}
                width={200}
                height={200}
                quality={1}
                loading="eager"
                />
              </div>
              <div className={styles.cara3}>
                <Image
                src={"/img/three-dim-cube/" + props.cover}
                alt={"right cover" + props.title}
                width={200}
                height={200}
                quality={1}
                loading="eager"
                />
              </div>
              <div className={styles.cara4}>
                <Image
                src={"/img/three-dim-cube/" + props.cover}
                alt={"side cover" + props.title}
                width={200}
                height={200}
                quality={1}
                loading="eager"
                />
              </div>
              <div className={styles.cara5}>
                <Image
                src={"/img/three-dim-cube/" + props.cover}
                alt={"top cover" + props.title}
                width={200}
                height={200}
                quality={1}
                loading="eager"
                />
              </div>
              <div className={styles.cara6}>
                <Image
                src={"/img/three-dim-cube/" + props.cover}
                alt={"bottom cover" + props.title}
                width={200}
                height={200}
                quality={1}
                loading="eager"
                />
              </div>
            </div>
          </div>
        </a>
      </Link>
    </section>
  );
}
export default ThreeDimCube;

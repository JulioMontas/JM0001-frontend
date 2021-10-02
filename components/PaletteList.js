import useTranslation from 'next-translate/useTranslation'
import styles from './PaletteList.module.css'

const PaletteList = (props) => {
  const { t } = useTranslation('caseStudy')
  const data = {
    first: props.first,
    second: props.second,
    third: props.third,
    fourth: props.fourth,
    last: props.last,
  }
  return(
    <div className={styles.flipSwitch}>
      <h3 className={styles.title}>
        &#127852; {props.title}
      </h3>
      <div className={styles.secColorPalette}>
        <span style={{background:'#' + data.first}}></span>
        <span style={{background:'#' + data.second}}></span>
        <span style={{background:'#' + data.third}}></span>
        <span style={{background:'#' + data.fourth}}></span>
        <span style={{background:'#' + data.last}}></span>
      </div>
    </div>
  )
}

export default PaletteList;

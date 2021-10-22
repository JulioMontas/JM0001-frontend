import styles from './Container.module.css'
import NavBar from '../components/NavBar'

const Container = ({children}) => {
  return(
    <>
    <NavBar />
    <div className={styles.container}>
      {children}
    </div>
    </>
  )
};

export default Container;

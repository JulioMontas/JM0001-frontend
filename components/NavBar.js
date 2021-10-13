import styles from './NavBar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavBar = (props) => {
  let router = useRouter()
  return(
    <header className={styles.header}>
      <div>
        <Link href="/">
          <a alt="Julio Montás" rel="alternate" hreflang="en">
            <h1>Julio montas</h1>
          </a>
        </Link>
      </div>

      <div>
        <ul className={styles.changeLang}>
          <li>
            <a href="#">Langs</a>
            <ul class="dropdown">
              {router.locales.map((locale) => (
              <li key={locale}>
                <Link href={router.asPath} locale={locale}>
                  <a>{locale}</a>
                </Link>
              </li>
              ))}
            </ul>
          </li>
          </ul>
      </div>
    </header>
  )
};

export default NavBar;

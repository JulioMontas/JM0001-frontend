import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './ExitButton.module.css'

const ExitButton = (props) => {
  const router = useRouter()
  return(
      <div className={styles.secExit}>
        <Link href={props.url}>
          <a alt="Page Exit">
            <span> </span>
          </a>
        </Link>
      </div>
  );
}

export default ExitButton;

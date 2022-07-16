import { useState } from "react";
import styles from './Accordion.module.css'

export default function Accordion(props) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className={styles.main}>
      <button
        className={styles.button}
        onClick={toggle}
        type="button"
      >
        <p>{props.title}</p>
      </button>
      <div
        className={styles.content}
        style={{ display: isShowing ? "block" : "none" }}
        dangerouslySetInnerHTML={{
          __html: props.content
        }}
      />
    </div>
  );
}

import styles from "./Button.module.css"
export default function Button({ clickEvent, text }) {
    return (
      <div className={styles.container}>
        <button id={styles.btn} onClick={clickEvent}>{text}</button>
      </div>
    );
  }
  
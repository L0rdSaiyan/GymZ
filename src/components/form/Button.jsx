import styles from "./Button.module.css"
export default function Button({ clickEvent, text }) {
    return (
      <div className={styles.container}>
        <button onClick={clickEvent}>{text}</button>
      </div>
    );
  }
  
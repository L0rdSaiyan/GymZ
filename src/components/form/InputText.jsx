import styles from "./InputText.module.css"
export default function InputText({name,handleNameChange, placeholder})
{

    return(
        <div className={styles.container}>
        <input className={styles.inputText}
          type="text"
          placeholder={placeholder}
          onChange={handleNameChange}
        />
        </div>
    )
}
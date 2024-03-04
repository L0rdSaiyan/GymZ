import styles from "./InputText.module.css"
export default function InputText({name,handleNameChange})
{

    return(
        <div className={styles.container}>
        <input className={styles.inputText}
          type="text"
          placeholder="User"
          onChange={handleNameChange}
        />
        </div>
    )
}
import styles from "./InputText.module.css"
export default function InputText({name,handleNameChange})
{

    return(
        <>
        <input className={styles.inputText}
          type="text"
          placeholder="User"
          value={name}
          onChange={handleNameChange}
        />
        </>
    )
}
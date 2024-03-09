import styles from "./InputNumber.module.css"
export default function InputNumber({placeholder, eventHandler})
{
    return(
        <>
            <input className={styles.inputNum}
            type="number"
            placeholder={placeholder}
            onChange={eventHandler}
            />

        </>
    )
}
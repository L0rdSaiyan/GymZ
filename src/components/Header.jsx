import styles from "./Header.module.css"
import { useNavigate } from "react-router-dom"
import LinkButton from "./LinkButton"
export default function()
{
    return(
        <header className={styles.header}>
        <p>GymZ 🏋️‍♂️</p>
        <LinkButton to={"/login"} text="Login">
          
        </LinkButton>
      </header>
    )
}
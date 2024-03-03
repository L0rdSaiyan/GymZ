import styles from "./SingUpPage.module.css"
import Container from "../../Layout/Container"
import InputText from "../form/InputText"
import { LoginController } from "../../controller/LoginController"
import InputPass from "../form/InputPass"
import Button from "../form/Button"
export default function SignUpPage()
{

    const {
        name,
        handleNameChange,
        pass,
        isPasswordVisible,
        eye,
        eyeIcon,
        eyeSlash,
        handleKeyDown,
        handlePassChange,
        togglePasswordVisibility,
  } = LoginController()

    return(
        <div className={styles.container}>
            <div className={styles.singUp}>
            <p id={styles.title}>Cadastro</p>
               <InputText
                name={name}
                handleNameChange={handleNameChange}
                />
                <InputPass 
                pass={pass} 
                handlePassChange={handlePassChange} 
                togglePasswordVisibility={togglePasswordVisibility} 
                handleKeyDown={handleKeyDown} 
                eye={eye} 
                eyeIcon={eyeIcon} 
                eyeSlash={eyeSlash}
                text="Confirme a sua senha"
                />
                
                <Button clickEvent={()=> console.log("funfou")} text="Cadastrar"></Button>

            </div>
        </div>
        
    )
}
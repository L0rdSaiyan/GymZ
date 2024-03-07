import styles from "./SingUpPage.module.css";
import Container from "../../Layout/Container";
import InputText from "../form/InputText";
import { LoginController } from "../../controller/LoginController";
import { SingUpController } from "../../controller/SingUpController";
import InputPass from "../form/InputPass";
import Button from "../form/Button";
import { useEffect } from "react";

export default function SignUpPage() {
  const {
    name,
    handleNameChange,
    isPasswordVisible,
    eye,
    eyeIcon,
    eyeSlash,
    confirmPass,
    getNewUserId,
    handleSingUp,
    togglePasswordVisibility,
  } = LoginController();

  const {
    firstPass,
    secondPass,
    handleFirstPass,
    handleSecondPass,
    validatePass,
    createNewUser,
    getUserId,
  } = SingUpController()

  return (
    <div className={styles.container}>
      <div className={styles.singUp}>
        <p id={styles.title}>Cadastro</p>
        <InputText 
        name={name} 
        handleNameChange={handleNameChange} 
        placeholder="User"
        />

        <InputPass
        pass={firstPass}
        handlePassChange={handleFirstPass}
        text="Crie uma senha"
        />

        <InputPass
        pass={secondPass}
        handlePassChange={handleSecondPass}
        text="Confirme sua senha"
        />
        <Button clickEvent={() => createNewUser(name,firstPass)} text="Cadastrar" />
      </div>
    </div>
  );
}
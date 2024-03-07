import styles from "./LoginPage.module.css";
import LinkButton from "../../components/LinkButton";
import { LoginController } from "../../controller/LoginController";
import InputText from "../form/InputText";
import InputPass from "../form/InputPass";
import Button from "../form/Button";

export default function LoginPage() {
  const {
    name,
    pass,
    user,
    eye,
    isPasswordVisible,
    exercices,
    eyeIcon,
    eyeSlash,
    handleNameChange,
    handlePassChange,
    togglePasswordVisibility,
    handleKeyDown,
    getUser
  } = LoginController();

  return (
    <div className={styles.flexbox}>
      <div className={styles.login}>
        <p id={styles.loginTitle}>Login</p>
        <InputText 
        name={name} 
        handleNameChange={handleNameChange}
        placeholder="User"
        />
        <InputPass
          pass={pass}
          eye={eye}
          eyeIcon={eyeIcon} 
          eyeSlash={eyeSlash}
          handlePassChange={handlePassChange}
          togglePasswordVisibility={togglePasswordVisibility}
          isVisible={isPasswordVisible}
          handleKeyDown={handleKeyDown}
          text="Insira a sua senha"
        />
        <span>
          Ainda não tem uma conta? <LinkButton text="Crie uma." to="/singup"></LinkButton>
        </span>
        <Button clickEvent={() => getUser(name, pass, true)} text="Entrar">
          Entrar
        </Button>
      </div>
      <div></div>
    </div>
  );
}

import styles from "./LoginPage.module.css";
import LinkButton from "../../components/LinkButton";
import { LoginController } from "../../controller/LoginController";
import InputText from "../form/InputText";
import InputPass from "../form/InputPass";

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
        />
        <InputPass
          pass={pass}
          eye={eye}
          eyeIcon={eyeIcon} 
          eyeSlash={eyeSlash}
          handlePassChange={handlePassChange}
          togglePasswordVisibility={togglePasswordVisibility}
          handleKeyDown={handleKeyDown}
          text="Insira a sua senha"
        />
        <span>
          Ainda não tem uma conta? <LinkButton text="Crie uma." to="/singup"></LinkButton>
        </span>
        <button id={styles.btnLogin} onClick={() => getUser(name, pass, true)}>
          Entrar
        </button>
      </div>
      <div></div>
    </div>
  );
}

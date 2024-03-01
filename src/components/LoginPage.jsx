import styles from "./LoginPage.module.css";
import { LoginController } from "../controller/LoginController";
import Header from "./Header";

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
            <input
              type="text"
              placeholder="User"
              value={name}
              onChange={handleNameChange}
            />
              <input
                type={isPasswordVisible ? "text" : "password"}
                placeholder="insira sua senha"
                onChange={handlePassChange}
                onKeyDown={(event) => handleKeyDown(event)}
              />
              <img
                className={styles.eyeIcon}
                src={eyeIcon ? eye : eyeSlash}
                alt="Toggle Password Visibility"
                onClick={togglePasswordVisibility}
              />
            <button id={styles.btnLogin} onClick={() => getUser(name, pass,true)}>
              Entrar
            </button>
          </div>
          <div></div>
        </div>
  );
}

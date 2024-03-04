import React from "react";
import { useState } from "react";
import styles from "./InputPass.module.css";
import eye from "../../images/eyeIcon.png";
import eyeSlash from "../../images/eyeIconSlash.png";


export default function InputPass({ pass, handlePassChange, handleKeyDown}) {
  
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const [eyeIcon, setEyeIcon] = useState(false);
  
  
  function togglePasswordVisibility() {
    setPasswordVisibility((visibility) => !visibility);
    setEyeIcon((prevEye) => !prevEye);
  }

  return (
    <div className={styles.inputContainer}>
      <input className={styles.input}
        type={isPasswordVisible ? "text" : "password"}
        placeholder="insira sua senha"
        value={pass}
        onChange={handlePassChange}
        onKeyDown={(event) => handleKeyDown(event)}
      />
      <img
        className={styles.eyeIcon}
        src={eyeIcon ? eye : eyeSlash}
        alt="Toggle Password Visibility"
        onClick={togglePasswordVisibility}
      />
    </div>
  );
}


InputPass.defaultProps = {
  handleKeyDown: () => console.log("handle key down function is missing..."),
};

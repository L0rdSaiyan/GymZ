import React from "react";
import styles from "./InputPass.module.css";

export default function InputPass({ pass, handlePassChange, togglePasswordVisibility, handleKeyDown, eye, eyeIcon, eyeSlash, text}) {
  return (
    <div className={styles.inputContainer}>
      <input
        type="password"
        placeholder={text}
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

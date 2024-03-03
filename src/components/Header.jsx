import React from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import LinkButton from "./LinkButton";

export default function Header() {
  return (
    <header className={styles.header}>
            <p>GymZ 🏋️‍♂️</p>
        <ul className={styles.list}>
          <li>
            <LinkButton to={"/login"} text="Login" />
          </li>
          <li>
            <LinkButton to={"/singup"} text="Cadastrar-se" />
          </li>
        </ul>
    </header>
  );
}

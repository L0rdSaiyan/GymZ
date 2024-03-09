import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import LinkButton from "./LinkButton";
import { LoginController } from "../controller/LoginController";

export default function Header() {
  const { user, getUser } = LoginController();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await getUser(localStorage.getItem("user"), localStorage.getItem("pass"), false);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <header className={styles.header}>
      <p>GymZ 🏋️‍♂️</p>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className={styles.list}>
          <li>
            <LinkButton to="/login" text="Login" />
          </li>
          <li>
            <LinkButton to="/singup" text="Cadastrar-se" />
          </li>
          <li>
          <LinkButton to="/newexercise" text="Novo exercício" />
          </li>
          <li>
          <LinkButton to="/home" text="Home" />
          </li>
        </ul>
      
        
      )}
    </header>
  );
}

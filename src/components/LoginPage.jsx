import styles from "./LoginPage.module.css";
import { useState } from "react";

export default function LoginPage() {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
    console.log(name);
  }

  function handlePassChange(event) {
    setPass(event.target.value);
    console.log(pass);
  }

  function getUser(name, password) {
    fetch(`http://localhost:5000/users?name=${name}&password=${password}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setUser(data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <header>
          <p>GymZ 🏋️‍♂️</p>
        </header>
        <div className={styles.flexbox}>
          <div className={styles.login}>
            <p>Login</p>
            <input
              type="text"
              value="viktor"
              placeholder="User"
              onChange={handleNameChange}
            />
            <input
              type="password"
              value="atumalaka"
              placeholder="insira sua senha"
              onChange={handlePassChange}
            />
            <button id={styles.btnLogin} onClick={() => getUser(name, pass)}>
              Entrar
            </button>
          </div>
          <div>
          <p>{user[0].exercices[0].name}</p>
          </div>
        </div>
        <footer>Footer</footer>
      </div>
    </div>
  );
}

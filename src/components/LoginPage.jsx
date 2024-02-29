import { func } from "prop-types";
import styles from "./LoginPage.module.css";
import User from "../model/UserModel";
import { useState, useEffect } from "react";

export default function LoginPage() {
  const [user, setUser] = useState({});
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  function handleNameChange(event) 
  {
    setName(event.target.value);
    console.log(name);
    console.log(user.name)
  }

  function handlePassChange(event) 
  {
    setPass(event.target.value);
    console.log(pass);
  }

  function getUser(name, pass)
  {
    fetch(`http://localhost:5000/users?name=${name}&password=${pass}`,
    {
      method:"GET",
      headers:
      {
        "Content-type": "application/json"
      }
    })
    .then((response) => response.json())
    .then((data)=>{
        console.log(data[0].id)
        const newUser = new User(
        data[0].id,
        data[0].name,
        data[0].password,
        data[0].content
        )
        setUser(newUser)
    } )
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
            
          </div>
        </div>
        <footer> &copy; {new Date().getFullYear()} </footer>
      </div>
    </div>
  );
}

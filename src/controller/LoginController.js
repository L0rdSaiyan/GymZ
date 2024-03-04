import React, { useState, createContext, useEffect } from "react";
import User, { Exercice } from "../model/UserModel";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export function LoginController() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState();
  const [totalUsers, setTotalUsersId] = useState();
  const [user, setUser] = useState();
  const [exercices, setExercices] = useState([]);
  const navigate = useNavigate();
 

  function setAlert(title, text, icon) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
    });
  }

  function setAlertWithRedirect(title, text, icon, timer, location) {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
    });
    setTimeout(() => {
      navigate(location);
    }, timer);
  }

  function handleNameChange(event) {
    setName(event.target.value);
    console.log(name);
  }

  function handlePassChange(event) {
    setPass(event.target.value);
    console.log(pass);
  }

  function HandleconfirmPassChange(event) {
    setConfirmPass(event.target.value);
  }
  
  function createUser(name, pass, id) {
    const user = new User(id,name, pass);
    setUser(user);
  }

  async function getNewUserId() {
  
    try
    {

    fetch("https://gym-z-users.vercel.app/users",
    {
      method: "GET",
      headers:
      {
        "Content-type": "application/json"
      }
    })
    .then((response)=> response.json())
    .then((data)=>{
      setTotalUsersId(data.length)
      console.log(totalUsers)
    })
  }catch(error)
  {
    console.error(`Erro ao definir id de usuário: ${error}`)
  }
  }

  function handleSingUp() {
    if (pass === confirmPass) {
    } else {
      setAlert(
        "Erro!",
        "As senhas não conferem. Verifique-as e tente novamente!",
        "error"
      );
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      getUser(name, pass, true);
    }
  }



  function objectIsEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  function mountExercices(exercicesData) {
    const newExercices = exercicesData.map((exerciceData) => {
      return new Exercice(exerciceData.name, exerciceData.reps);
    });
    setExercices(newExercices);
    console.log(typeof newExercices);
    console.log(typeof exercices);
  }


  function getUser(name, pass, redirect) {
    if (name === "" && pass === "") {
      setAlert("Error", "Por favor insira algo", "error");
    } else {
      fetch(
        `http://localhost:5000/users?name=${name.trim()}&password=${pass}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (!objectIsEmpty(data)) {
            const firstUser = data[0];
            setUser(firstUser);
            console.table(firstUser);
            console.log(firstUser.exercices);
            console.log(typeof firstUser.exercices);
            console.table(firstUser.exercices);
            console.table(exercices);
            mountExercices(firstUser.exercices);
            window.localStorage.setItem("user", firstUser.name);
            window.localStorage.setItem("pass", firstUser.password);
            console.log(`usuario encontrado ${firstUser.name}`);
            if (redirect) {
              setAlertWithRedirect(
                "Sucesso!",
                "Login realizado. Redirecionando...",
                "sucess",
                1000,
                "/home"
              );
            } else {
              return;
            }
          } else {
            console.log(pass);
            setAlert("Error", "Usuário não encontrado!", "error");
          }
        });
    }
  }

  return {
    name,
    pass,
    user,
    exercices,
    confirmPass,
    handleNameChange,
    handleSingUp,
    handlePassChange,
    handleKeyDown,
    getNewUserId,
    setAlert,
    HandleconfirmPassChange,
    getUser,
  };
}
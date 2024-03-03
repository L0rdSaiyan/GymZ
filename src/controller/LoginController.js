import React, { useState, useEffect, createContext} from "react";
import User, { Exercice } from "../model/UserModel";
import Swal from "sweetalert2"
import eye from "../images/eyeIcon.png";
import eyeSlash from "../images/eyeIconSlash.png"
import { useNavigate } from "react-router-dom";

export const UserContext = createContext()

export function LoginController()
{

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [user, setUser] = useState();
  const [exercices, setExercices] = useState([]);
  const navigate = useNavigate();
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const [eyeIcon, setEyeIcon] = useState(false)


  function setAlert(title,text,icon)
  {
    Swal.fire({
      title: title,
      text: text,
      icon: icon
    })
  }

  function setAlertWithRedirect(title,text,icon,timer,location)
  {
    Swal.fire(
      {
        title: title,
        text: text,
        icon: icon
      }
    )
      setTimeout(()=>{
        navigate(location,)
      },timer)

  }

  function handleNameChange(event) {
    setName(event.target.value);
    console.log(name)
  }

  function handlePassChange(event) {
    setPass(event.target.value);
    console.log(pass)

  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      getUser(name, pass,true);
    }
  }

 function togglePasswordVisibility() {
  setPasswordVisibility((visibility) => !visibility);
  setEyeIcon((prevEye) => !prevEye);
}


  function objectIsEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  function mountExercices(exercicesData) {
    const newExercices = exercicesData.map((exerciceData) => {
      return new Exercice(exerciceData.name, exerciceData.reps);
    });
    setExercices(newExercices);
    console.log(typeof(newExercices))
    console.log(typeof(exercices))
  }

  function createUser(firstUser){
    const user = new User(
      firstUser.id,
      firstUser.name,
      firstUser.password,
      firstUser.content
    )
      setUser(user)
  }

  function getUser(name, pass,redirect) {

    if(name === "" && pass === "")
    {
      setAlert("Error", "Por favor insira algo","error")
    }else
    {
    fetch(`https://gym-z-users.vercel.app/users?name=${name.trim()}&password=${pass}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (!objectIsEmpty(data)) {
          const firstUser = data[0];
          setUser(firstUser)
          console.table(firstUser);
          console.log(firstUser.exercices);
          console.log(typeof(firstUser.exercices))
          console.table(firstUser.exercices)
          console.table(exercices)
          mountExercices(firstUser.exercices);
          window.localStorage.setItem("user", firstUser.name);
          window.localStorage.setItem("pass", firstUser.password);
          console.log(`usuario encontrado ${firstUser.name}`);
          if(redirect){
          setAlertWithRedirect("Sucesso!", "Login realizado. Redirecionando...", "sucess", 1000, "/home")
          }
          else
          {
            return
          }
          // navigate("/home");
        } else 
        {
          console.log(pass)
          setAlert("Error", "Usuário não encontrado!", "error")
        }
      
      });
    }

    function addUserToDataBase()
    {
      
        fetch('https://gym-z-users.vercel.app/users',{
          method: "POST",
          headers:
          {
            "Content-type": "application/json"
          },
          // body: JSON.stringify(name,pass)
        })
  
      }
    }

  return{
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
  }
}
import { LoginController } from "./LoginController";
import { useState, useEffect } from "react";
import User from "../model/UserModel";

export function SingUpController() {
    const {
        setAlert,
        name
    } = LoginController();

    const [firstPass, setFirstPass] = useState('');
    const [secondPass, setSecondPass] = useState('');
    const [userId, setUserId] = useState('');
    const [user, setUser] = useState();
    const [exercice, setExercices] = useState();

    function handleFirstPass(event) {
        setFirstPass(event.target.value);
    }

    function handleSecondPass(event) {
        setSecondPass(event.target.value);
    }

    function validatePass() {
        if (firstPass === secondPass) {
            setAlert("funfou", "a", "success");
            createNewUser();
        } else {
            setAlert("funfou tb", "senha n confere", "error");
        }
    }

    function createUser(name, pass,exercises) {
        const newUser = new User(name, pass, "deu bom",exercises);
        setUser(newUser);
        return newUser;
    }

   async function createNewUser(name,pass)
   {
    try{
        const user = createUser(name,pass,[])

        await fetch("http://localhost:5000/users", {
        
        method: "POST",
        headers: 
        {
            "Content-type": "application/json"
        },
        body : JSON.stringify(user)
        })

        setAlert(`Bem vindo, ${name}`, "Sua conta foi criado com sucesso!", "success")
       
    }catch(error)
    {
        console.log(`Error ${error}`)
    }
   }

    return {
        firstPass,
        secondPass,
        userId,
        handleFirstPass,
        handleSecondPass,
        validatePass,
        createNewUser,
    };
}

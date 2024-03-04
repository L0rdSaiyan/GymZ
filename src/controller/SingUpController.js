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

    function createUser(name, pass, ex) {
        const newUser = new User(name, pass, "deu bom", ex);
        setUser(newUser);
        return newUser;
    }

    async function createNewUser(name, firstPass) {

        const newUser = createUser(name, firstPass);

        try {
            const response = await fetch("http://localhost:5000/users", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(newUser)
            });

            if (response.ok) {
                console.log(`Usuário adicionado: ${JSON.stringify(newUser)}`);

                // Atualiza o array localmente, evitando uma nova chamada GET

                setAlert("Usuário cadastrado com sucesso!", "", "success");
            } else {
                console.error(`Erro ao adicionar usuário. Status: ${response.status}`);
                setAlert("Erro ao cadastrar usuário", "Por favor, tente novamente", "error");
            }
        } catch (error) {
            console.error(`Erro ao adicionar usuário: ${error}`);
            setAlert("Erro ao cadastrar usuário", "Por favor, tente novamente", "error");
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

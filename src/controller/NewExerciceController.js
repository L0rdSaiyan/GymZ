import { useState, useEffect } from "react";
import { Exercise } from "../model/ExerciseModel";
import { LoginController } from "./LoginController";
export default function NewExerciceController() {
   
    const [exName, setExName] = useState("");
    const [day, setDay] = useState("");
    const [series, setSeries] = useState();
    const [repeats, setRepeats] = useState();
    const [exercice, setExercice] = useState([]);
    const [getExercise, setGetExercise] = useState([])
    const user = localStorage.getItem("user");
    const pass = localStorage.getItem("pass");

    const  {
        setAlert
    } = LoginController()

    useEffect(() => {
        console.log(exName);
    }, [exName]);

    useEffect(() => {
        console.log(day);
    }, [day]);

    useEffect(() => {
        console.log(series);
    }, [series]);

    useEffect(() => {
        console.log(repeats);
    }, [repeats]);

    useEffect(() => {
        console.table(exercice);
    }, [exercice]);

    function handleExerciceName(event) {
        setExName(event.target.value);
    }

    function handleDay(event) {
        setDay(event.target.value);
    }

    function handleSeries(event) {
        setSeries(event.target.value);
    }

    function handleRepeats(event) {
        setRepeats(event.target.value);
    }

    async function createExerise() {
        if(day)
        {
            const ex = new Exercise(Math.random(), exName, day, series, repeats);
            console.log(user, pass);
            setExercice(ex);
            if (exercice) {
                return ex; 
            }
        }else
        {
            setAlert("Adicione o dia do seu treino!","","error")
        }
    }

    async function deleteExercise(exerciseId) {
        const userId = localStorage.getItem("userId");
        await deleteExerciseFromUser(userId, exerciseId);
    }

    async function deleteExerciseFromUser(userId, exerciseId) {
        try {
            const response = await fetch(`https://gym-z-users.vercel.app/users${userId}`);
    
            // Verificar se o usuário foi encontrado
            if (response.ok) {
                const userData = await response.json();
    
                if (userData && Array.isArray(userData[0].exercises)) {
                    // Utilizando filter corretamente para remover o exercício da lista
                    const updatedExercises = userData[0].exercises.filter(ex => ex.id !== exerciseId);
    
                    // Atualizando a lista de exercícios do usuário
                    userData[0].exercises = updatedExercises;
    
                    const updateUserResponse = await fetch(`https://gym-z-users.vercel.app/users/${userId}`, {
                        method: "PUT",
                        headers: {
                            "Content-type": "application/json"
                        },
                        body: JSON.stringify(userData[0])
                    });
    
                    const updatedUserData = await updateUserResponse.json();
                    window.location.reload();
                    console.log(updatedUserData);
                } else {
                    console.log("Usuário não tem a propriedade 'exercises' ou não é um array.");
                }
            } else {
                console.log("Usuário não encontrado.");
            }
        } catch (error) {
            console.log(`ERRO: ${error}`);
        }
    }
    

    async function addExerciceToUser() {
        try {
            const ex = await createExerise();

            const response = await fetch(`https://gym-z-users.vercel.app/users?name=${user}&password=${pass}`);
            const userData = await response.json();

            if (exercice) { 
                userData[0].exercises.push(ex);
            }

            const updateUserResponse = await fetch(`https://gym-z-users.vercel.app/users${userData[0].id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(userData[0])
            });

            const updatedUserData = await updateUserResponse.json();
            console.log(updatedUserData);
            setAlert(`Exercício criado!`, `${ex.exName} adicionado com sucesso ao dia ${ex.day}`, "success" )
            
        } catch (error) {
            console.log(`ERRO: ${error}`);
        }
    }

    async function fetchExercises(user, pass) {
        try {
            const response = await fetch(`https://gym-z-users.vercel.app/users?name=${user}&password=${pass}`,
                {
                    method: "GET",
                    headers:
                    {
                        "Content-type": "application/json"
                    }
                })

            const data = await response.json()
            console.log(data[0].exercises)
            setGetExercise(data[0].exercises)
            return data[0].exercises
        } catch (error) {
            console.log(`ERROR: ${error}`)
        }
    }


    return {
        exName,
        day,
        series,
        repeats,
        getExercise,
        setSeries,
        handleExerciceName,
        handleDay,
        handleSeries,
        deleteExercise,
        handleRepeats,
        addExerciceToUser,
        fetchExercises,
        createExerise,
    };
}

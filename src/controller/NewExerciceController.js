import { useState, useEffect } from "react";
import { Exercise } from "../model/ExerciseModel";

export default function NewExerciceController() {
    const [exName, setExName] = useState("");
    const [day, setDay] = useState("");
    const [series, setSeries] = useState();
    const [repeats, setRepeats] = useState();
    const [exercice, setExercice] = useState();
    const [getExercise, setGetExercise] = useState([])
    const user = localStorage.getItem("user");
    const pass = localStorage.getItem("pass");

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
        const ex = new Exercise(exName, day, series, repeats);
        console.log(user, pass);
        setExercice(ex);
        return ex; // Return the created exercise
    }

    async function addExerciceToUser() {
      try {
         const ex = await createExerise();
  
          // Buscar o usuário específico pelo nome e senha
          const response = await fetch(`http://localhost:5000/users?name=${user}&password=${pass}`);
          const userData = await response.json();
  
          // Adicionar o novo exercício à lista de exercícios do usuário
          if (exercice) { // Check if exercice is not null
              userData[0].exercises.push(ex);
          }
          // Adicione outros atributos do exercício aqui, como series e repeats
  
          // Atualizar o usuário no servidor
          const updateUserResponse = await fetch(`http://localhost:5000/users/${userData[0].id}`, {
              method: "PUT",
              headers: {
                  "Content-type": "application/json"
              },
              body: JSON.stringify(userData[0])
          });
  
          const updatedUserData = await updateUserResponse.json();
          console.log(updatedUserData);
  
      } catch (error) {
          console.log(`ERRO: ${error}`);
      }
  }

  async function fetchExercises(user,pass)
  {
    try{
            const response = await fetch(`http://localhost:5000/users?name=${user}&password=${pass}`,
            {
                method: "GET",
                headers:
                {
                    "Content-type":"application/json"
                }
            })

            const data = await response.json()
            console.log(data[0].exercises)
            setGetExercise(data[0])
        }catch(error)
    {
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
        handleRepeats,
        addExerciceToUser,
        fetchExercises,
        createExerise,
    };
}

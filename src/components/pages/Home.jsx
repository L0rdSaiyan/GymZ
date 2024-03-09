import { LoginController } from "../../controller/LoginController";
import NewExerciceController from "../../controller/NewExerciceController";
import { useContext } from 'react';
import styles from "./Home.module.css";
import Cards from "../../components/Cards";
import { useEffect, useState } from "react";

export default function Home() {
    const {
        user,
        getUser
    } = LoginController();

    const {
        fetchExercises,
    } = NewExerciceController()

    const [exercises, setExercises] = useState([]);
    const [exercisesSun, setExercisesSun] = useState()
    const [exercisesMon, setExercisesMon] = useState()
    const [exercisesTue, setExercisesTue] = useState()
    const [exercisesWed, setExercisesWed] = useState()
    const [exercisesThur, setExercisesThur] = useState()
    const [exercisesFri, setExercisesFri] = useState()
    const [exercisesSar, setExercisesSar] = useState()

    useEffect(() => {
        const cat = localStorage.getItem("user");
        const cat2 = localStorage.getItem("pass");

        const fetchData = async () => {
            await getUser(cat, cat2, false);
        };

        fetchData();
    }, []);


    useEffect(() => {

      if(user && user.exercises)
      {
        console.log(user.exercises)
        setExercises(user.exercises)
      }

    }, [user]);

    useEffect(() => {
        console.log(exercises);
        setExercisesSun(exercises.filter((exercise) => exercise.day === "domingo"))
        setExercisesMon(exercises.filter((exercise) => exercise.day === "segunda"))
        setExercisesThur(exercises.filter((exercise) => exercise.day === "terca" ))
        setExercisesTue(exercises.filter((exercise) => exercise.day === "quarta"))
        setExercisesWed(exercises.filter((exercise) => exercise.day === "quinta"))
        setExercisesFri(exercises.filter((exercise) => exercise.day === "sexta"))
        setExercisesSar(exercises.filter((exercise) => exercise.day === "sabado"))
    }, [exercises]);

    useEffect(()=> {
        console.log(exercisesMon)
    },[exercisesMon])

    return (
        <>
          <div className={styles.container}>
          <div className={styles.welcome}>
            <span>{user ? `Bem vindo, ${user.name}` : 'Carregando...'}</span>
          </div>
            {user && (
              <>
                <div className={styles.exerciseContainer}>
                  <Cards title="Domingo" exercises={exercisesSun} />
                  <Cards title="Segunda-Feira" exercises={exercisesMon} />
                  <Cards title="Terça-Feira" exercises={exercisesThur} />
                  <Cards title="Quarta-Feira" exercises={exercisesTue} />
                  <Cards title="Quinta-Feira" exercises={exercisesWed} />
                  <Cards title="Sexta-Feira" exercises={exercisesFri} />
                  <Cards title="Sábado" exercises={exercisesSar} />
                </div>
              </>
            )}
          </div>
        </>
      );
      
}

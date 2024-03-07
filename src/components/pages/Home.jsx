import { LoginController, UserContext } from "../../controller/LoginController";
import NewExerciceController from "../../controller/NewExerciceController";
import { createContext, useContext } from 'react';
import styles from "./Home.module.css";
import Cards from "../../components/Cards";
import { useEffect, useState } from "react";

export const dataContext = createContext()

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
        <div className={styles.container}>
            {user && (
                <>
                    <div className={styles.welcome}>
                        <span>{`Bem vindo, ${user.name}`}</span>
                    </div>
                   {/* {exercisesMon.map((item,index)=> (<p>{item.exName} - {item.day}</p>))} */}
                    <div className={styles.exerciseContainer}>
                        <div id={styles.domingo} className={styles.days}>
                            <dataContext.Provider value={exercisesSun}>
                            <Cards title="Domingo"></Cards>
                            </dataContext.Provider>
                        </div>
                        <div id={styles.segunda} className={styles.days}>
                        <h3>Segunda</h3>
                        {exercisesSun.map((item,index)=> (<p>{item.exName} - {item.day}</p>))}
                        </div>
                        <div id={styles.terca} className={styles.days}>
                        <h3>Terça</h3>
                        {exercisesThur.map((item,index)=> (<p>{item.exName} - {item.day}</p>))}

                        </div>
                        <div id={styles.quarta} className={styles.days}>
                        <h3>Quarta</h3>
                        {exercisesTue.map((item,index)=> (<p>{item.exName} - {item.day}</p>))}
                        </div>
                        <div id={styles.quinta} className={styles.days}>
                        <h3>Quinta</h3>
                        {exercisesWed.map((item,index)=> (<p>{item.exName} - {item.day}</p>))}
                        </div>
                        <div id={styles.sexta} className={styles.days}>
                        <h3>Sexta</h3>
                        {exercisesFri.map((item,index)=> (<p>{item.exName} - {item.day}</p>))}
                        </div>
                        <div id={styles.sabado} className={styles.days}>
                        <h3>Sábado</h3>
                        
                        {exercisesSar.map((item,index)=> (<p>{item.exName} - {item.day}</p>))}

                            
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

import styles from "./Cards.module.css"
import { useEffect } from "react"
import { useContext } from 'react';


export default function Cards({title, exercises})
{

    useEffect(()=>{
        console.log(exercises)
    },[exercises])

    

    function renderExercise(exercisesList)
    {
       return exercisesList.map((exercise)=>(<span>{exercise.exName} - {exercise.series} X {exercise.repeats}</span>))
    }

    return(
        <>
            <div className={styles.container}>
                    <div id={styles.title}>
                        <span>{title}</span>
                    </div>
                    <div id={styles.exercisesWrapper}>
                       {exercises.length > 0 ? renderExercise(exercises) : 
                       ( <span>Puxa, não tem nenhum exercício aqui ☹</span> ) }
                       
                       
                      
                    </div>
            </div>

        </>
    )
}
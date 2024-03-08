import styles from "./Cards.module.css"
import { useEffect } from "react"
import { useContext } from 'react';
import LinkButton from "./LinkButton"
import trashCan from "./../images/trashcanIcon.png"

export default function Cards({ title, exercises }) {
    useEffect(() => {
      console.log(exercises);
    }, [exercises]);
  
    function renderExercise(exercisesList) {
      return exercisesList.map((exercise) => (
        <ul key={exercise.exName}>
          <li>
            {exercise.exName} - {exercise.series} X {exercise.repeats}
            <img
              src={trashCan}
              alt="Deletar"
              className={styles.trashIcon}
              onClick={() => handleDeleteExercise(exercise.exName)}
            />
          </li>
        </ul>
      ));
    }
  
    function handleDeleteExercise(exerciseName) {
      console.log(`Deleting exercise: ${exerciseName}`);
    }
  
    return (
      <>
        <div className={styles.container}>
          <div id={styles.title}>
            <span>{title}</span>
          </div>
          <div id={styles.exercisesWrapper}>
            {exercises.length > 0 ? (
              renderExercise(exercises)
            ) : (
              <>
              <span>
                Puxa, não tem nenhum exercício aqui ☹
                </span>
                <LinkButton
                to="/newexercise"
                text="Adicione!"/>
                </>
             
            )}
          </div>
        </div>
      </>
    );
  }
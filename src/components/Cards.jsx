import styles from "./Cards.module.css"
import { useEffect } from "react"
import { useContext } from 'react';
import { dataContext } from "./pages/Home";


export default function Cards({title})
{



    const data = useContext(dataContext)

    function renderExercise(exercisesList)
    {

    }

    useEffect(()=>{
        console.log(data)
    },[])

    return(
        <>
            <div className={styles.container}>
                    <div id={styles.title}>
                        <span>{title}</span>
                    </div>
                    <div id={styles.exercisesWrapper}>
                        {data.map((exercise) => (<p>{exercise.exName}</p>))}
                    </div>
            </div>

        </>
    )
}
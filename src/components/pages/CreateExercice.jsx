import styles from "./CreateExercice.module.css"
import InputText from "../form/InputText"
import InputPass from "../form/InputPass"
import Picklist from "../form/Picklist"
import Button from "../form/Button"
import InputNumber from "../form/InputNumber"
import NewExerciceController from "../../controller/NewExerciceController"

export default function CreateExercice()
{

    const {
        exName,
        day,
        series,
        repeats,
        setSeries,
        handleExerciceName,
        handleDay,
        handleSeries,
        handleRepeats,
        addExerciceToUser,
        createExercice
    } = NewExerciceController()

    return(
        <div className={styles.container}>
            <div className={styles.form}>
            <h1>Novo Exercício</h1>
                <InputText
                placeholder="Nome do Exercício"
                handleNameChange={handleExerciceName}
                />
                <Picklist changeEvent={handleDay}></Picklist> 
                <div className={styles.wrapper}>
                <InputNumber 
                placeholder="Séries"
                eventHandler={handleSeries}
                />
                </div>
                <span>
                X
                </span>
                <div className={styles.wrapper}>
                <InputNumber 
                placeholder="Repetições"
                eventHandler={handleRepeats}
                />                                       
                </div>
                <Button 
                text="Adicionar" 
                clickEvent={addExerciceToUser}/>
            </div>
        </div>
    )
}
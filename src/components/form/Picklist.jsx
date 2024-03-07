import styles from "./Picklist.module.css"
export default function Picklist({changeEvent})
{
    return(
        <>
            <select onChange={changeEvent}>
                <option value="" hidden>Dia do treino</option>
                <option value="domingo">Domingo</option>
                <option value="segunda">Segunda</option>
                <option value="terca">Terça</option>
                <option value="quarta">Quarta</option>
                <option value="quinta">Quinta</option>
                <option value="sexta">Sexta</option>
                <option value="sabado">Sábado</option>
            </select>
        </>
    )
}
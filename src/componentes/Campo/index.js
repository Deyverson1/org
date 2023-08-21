import { useState } from "react"
import "./Campo.css"

const Campo = (props) => {
    const placeholderModificado = `${props.placeholder}...` //Concatenando //llega el valor de placeholder por medio de props, y se concatena con los tres puntos que hay fuera de la funcion


    //destructuracion
    const {type="text"} = props //si el tipo no viene definido se completara con text que es lo que tenemos en esta constante
    


    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input
            placeholder={placeholderModificado}
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />

        {/* Solo se ejecutaran si en la etiqueta pasado en nuestro formulario la damos como true, como la foto la dejamos sin el prop de requiered lo ignora y no es necesaria */}
    </div>
}
// Con las props accede a todos los datos que se le estan pasando, entonces al definir de alguna manera en la etiqueta 'main' podemos acceder a ella a partir props.
export default Campo
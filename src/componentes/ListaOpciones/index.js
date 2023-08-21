import "./ListaOpciones.css"


const ListaOpciones = (props) => {
    //metodo map


    const manejarCambio = (e) => {
        console.log("Cambio", e.target.value)
        props.actualizarValor(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Selecionar equipo</option>
            {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option> )}
        </select>
    </div>
}

export default ListaOpciones
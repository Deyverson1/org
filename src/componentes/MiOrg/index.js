import "./MiOrg.css"

const MiOrg = (props) => {
    //estado - hooks
    //useState
    //useState() funcion
    //const [nombreVariable, funcionActualiaza] = useState(valorInicial)
    // const [mostrar, actualizarMostrar] = useState(true)
    // console.log(props)
    // const manejarClick = () => {    
    //     console.log("Mostrar/Ocultar", !mostrar)
    //     actualizarMostrar(!mostrar)
    // } 

    return <section className="orgSection">
        <h3 className="title">Mi Organizacion</h3>
        <img src="/img/add.png" alt="Add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg
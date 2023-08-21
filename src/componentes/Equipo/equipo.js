import './equipo.css'
import Colaborador from '../Colaborador/Colaborador'
import hexToRgba from 'hex-to-rgba'



const Equipo = (props) => {

    //destructuracion
    const { colorPrimario, colorSecundario, titulo, id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props

    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6) 
    }
    //lo anterior extrae los valores y convierte en una variable almacenandolos alli de nuevo
    const estiloTitulo = {
        borderColor: colorPrimario
    }

    return <>{ colaboradores.length > 0 &&
            <section className='equipo' style={obj}>
                <input
                
                    type='color'
                    className='input-color'
                    value={colorPrimario}
                    onChange={(e) =>{
                        actualizarColor(e.target.value, id)
                    } }
                />
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className='colaboradores'>
                    {
                        colaboradores.map( (colaborador, index) => <Colaborador 
                        datos={colaborador} 
                        key={index}
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        like={like}
                        /> )
                    }   
                </div>
        </section>
    }</>
}

export default Equipo
import Empleado from "./Empleado";
import { saveAs } from 'file-saver';
//import { parseString } from 'xml2js';

const Listad = ({empleados}) => {

    const calcularTN = () => {
        let totalNomina = 0
        { empleados.map( (empleado) => (
            totalNomina = totalNomina + empleado.monto
        ))}
        
        return (totalNomina)
    }

    const nomina = calcularTN()

    const crearArchivo = () => {
        const listaEmpleados = JSON.stringify(empleados);

        /*var parseString = require(empleados).parseString;
        var xml = listaEmpleados
        parseString(xml, function (err, result) {
        });*/

        const blob = new Blob([ listaEmpleados ], { type: 'xml;charset=utf-8' })
        saveAs(blob, 'Nomina.xml')

        
    }

    return ( 
        <div className="m-20 bg-slate-800 rounded-lg p-5">
            <h1 className="mb-5 text-white text-4xl uppercase font-light text-center"> Listado de Empleados </h1>

            { empleados.map( (empleado, index) => (
                
                <Empleado
                    key={index} 
                    empleado={empleado}
                />

            ))}
            <h1 className="mb-5 text-white text-2xl uppercase font-light"> El total de la nomina es RD$ {nomina} </h1>
            <button 
                className='mt-5 w-full bg-slate-500 font-bold uppercase text-lg text-white p-3 rounded-lg hover:bg-slate-700 pointer-events-auto'
                onClick={ crearArchivo }
            >
                Generar Documento
            </button>
        </div>
     );
}
 
export default Listad;
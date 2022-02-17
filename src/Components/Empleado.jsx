const Empleado = ({empleado}) => {

    const {cedula, cuenta, monto} = empleado

    return ( 
        <div className="my-5 p-2 border border-slate-500 rounded-md">
            <h4 className="mb-2 text-white text-4lg font-bold">Cedula o Pasaporte</h4>
            <h4 className="mb-2 text-slate-400 text-4lg font-light">{cedula}</h4>
            <h4 className="mb-2 text-white text-4lg font-bold"># de Cuenta</h4>
            <h4 className="mb-2 text-slate-400 text-4lg font-light">{cuenta}</h4>
            <h4 className="mb-2 text-white text-4lg font-bold">Monto a Pagar</h4>
            <h4 className="mb-2 text-slate-400 text-4lg font-light">{monto}</h4>
        </div>
     );
}
 
export default Empleado;
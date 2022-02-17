import { useState } from 'react'
import Formulario from './Components/Formulario'
import Header from './Components/Header'
import Listad from './Components/Listado'

function App() {

  const [empleados, setEmpleados] = useState([])

  return (
    <div>
      <Header />
      <Formulario 
        empleados={empleados}
        setEmpleados={setEmpleados}
      />
      <Listad
        empleados={empleados}
      />
    </div>
  )
}

export default App

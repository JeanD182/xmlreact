import { Formik, Form, Field, } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'

const Formulario = ({setEmpleados, empleados}) => {

    const nuevoEmpleadoSchema = Yup.object().shape({
        cedula: Yup.string()
                    .min(11, 'El # de documento es muy corto')
                    .max(11, 'El # de documento es muy largo')
                    .required('La Cedula o Pasaporte son obligatorios'),
        cuenta: Yup.string()
                    .min(10, 'El # de cuenta es muy corto')
                    .required('El # de cuenta es obligatorio'),
        monto: Yup.number()
                    .positive('El salario debe ser positivo')
    })

    const handleSubmit = (valores) => {
        setEmpleados([...empleados, valores])
        formik.resetForm();
    }

    return ( 
        <div className="m-20 bg-slate-800 rounded-lg p-5">
            <h1 className="mb-5 text-white text-4xl uppercase font-light text-center"> Agregue Empleados a La Nomina </h1>
            <Formik
                initialValues={{
                    cedula: '',
                    cuenta: '',
                    monto: 0

                }}
                onSubmit={ (values) => {
                    handleSubmit(values)
                }}
                validationSchema={nuevoEmpleadoSchema}
            >
                {({errors, touched}) =>{ 
                    return (
                    <Form>
                        <div className='mb-4'>
                            <label className='text-slate-400 mt-2 font-bold text-4lg' htmlFor='cedula'> Número de Cedula o Pasaporte: </label>
                            <Field
                                id="cedula" 
                                type="text"
                                className=" mt-2 block w-full p-3 rounded bg-slate-900 border border-slate-700 text-white"
                                placeholder="Número de cedula del empleado"
                                name="cedula"
                            />
                            {errors.cedula && touched.cedula ? (
                                <p className='text-rose-500 mt-2 font-bold text-2lg'>{errors.cedula}</p>
                            ) : null}
                        </div>
                        <div className='mb-4'>
                            <label className='text-slate-400 mt-2 font-bold text-4lg' htmlFor='cuenta'> Número de Cuenta: </label>
                            <Field
                                id="cuenta" 
                                type="text"
                                className=" mt-2 block w-full p-3 rounded bg-slate-900 border border-slate-700 text-white"
                                placeholder="Número de cedula del empleado"
                                name="cuenta"
                            />
                            {errors.cuenta && touched.cuenta ? (
                                <p className='text-rose-500 mt-2 font-bold text-2lg'>{errors.cuenta}</p>
                            ) : null}
                        </div>
                        <div className='mb-4'>
                            <label className='text-slate-400 mt-2 font-bold text-4lg' htmlFor='monto'> Monto a Pagar en RD$: </label>
                            <Field
                                id="monto" 
                                type="number"
                                className=" mt-2 block w-full p-3 rounded bg-slate-900 border border-slate-700 text-white"
                                placeholder="Ingrese el monto a pagar"
                                name="monto"
                            />
                            {errors.monto && touched.monto ? (
                                <p className='text-rose-500 mt-2 font-bold text-2lg'>{errors.monto}</p>
                            ) : null}
                        </div>
                        <input 
                            type='submit'
                            value="Agregar empleado"
                            className='mt-5 w-full bg-slate-500 font-bold uppercase text-lg text-white p-3 rounded-lg hover:bg-slate-700 pointer-events-auto'
                        />
                    </Form>
                )}}
            </Formik>


        </div>
     );
}
 
export default Formulario;
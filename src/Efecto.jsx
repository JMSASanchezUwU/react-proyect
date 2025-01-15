import React, { useEffect, useState } from 'react'

const Efecto = ({state, setState}) => {
    const [estado, setEstado] = useState(5)
    console.log('Entrando a componente')
    useEffect(() => {
      console.log('get informacion')
    
      return () => {
        console.log('Saliendo de useEffect')
       
      }
    }, [])

    useEffect(() => {
      console.log("Entrando al efecto amarrado")
    
      
    }, [estado])
    
    
  return (
    <div>
      <h1>Componente efecto</h1>
      <button onClick={() =>{
        setEstado(estado + 1) 
      }}>+</button>
      <button onClick={() =>{
        setState(state + 1) 
      }}>+ Global</button>
    </div>
  )
}

export default Efecto

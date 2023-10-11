import { render } from "@testing-library/react";
import React, {useState, useEffect} from "react"
export function FirstHook() {

   

    const [counter, setCounter ] = useState(0);
    const [mensaje, setMensaje ] = useState(0);
    useEffect(()=>console.log("render"),[counter])
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={()=> setCounter(counter + 1)}>Sumar</button>
            <button onClick={()=>  setCounter(counter -1)}>Restar</button>
            <button onClick={()=> setCounter(0)}>Recetiar</button>
            <b></b>
            <hr></hr>
            <input onChange={e => setMensaje(e.target.value)} />
            <button onClick={()=>{alert('Mi mensaje es: ' + mensaje)}}>Save</button>
            

        </div>
    )
}
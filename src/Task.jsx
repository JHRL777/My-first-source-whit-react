import './task.css'
export function Tasking ({estado}){
    return <div className="box">
        <h1>Mi primera Tarjeta </h1>
        <p className={estado ? 'verde': 'rojo'}>
            {estado? 'Tarea realizada': 'Tasarea pendiente'}
        </p>
    </div>

    
}
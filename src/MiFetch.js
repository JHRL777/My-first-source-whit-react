import {VscGear} from 'react-icons/vsc'
export const Posts = () =>{
    return <button onClick={
        () =>{
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(respuesta => respuesta.json())
            .then(datos => console.log(datos))
            .catch(error => console.error(error))
        }
    }>
        <VscGear/>
        Traer datos
    </button>
}
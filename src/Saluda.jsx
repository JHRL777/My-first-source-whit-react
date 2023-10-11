export function Saluda({ title }) {
  console.log(title);
  return <h1>{title}</h1>;
}

export function UserCard(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>${props.monto}</h1>
      <h1>{props.estdoCivil ? "casado" : "No casado"}</h1>
      <ul>
        <li>Ciudad: {props.direccion.ciudad}</li>
        <li>Calle: {props.direccion.calle}</li>
      </ul>
      <ul>
        {
          props.punto.map((item,index)=>(
            
            <li key={index}>{item}</li>
            
          ))
        }
      </ul>
    </div>
  );
}

import react from 'react'
import { Link } from "react-router";

const ItemList = ({productos}) => {


   return(
    <div>
      {productos.map(prod => (
        <div key={prod.nombre}>
          <img src={prod.img} alt="" />
          <h4>{prod.nombre}</h4>
          <h4>{prod.marca} </h4>
          <h5>Precio: {prod.precio}</h5>
          <Link to={`/${prod.marca}/${prod.id}`}>Ver en detalle</Link>
        </div>
      ))}
    </div>
   ) 
  };
export default ItemList


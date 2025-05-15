import {useState } from 'react'
import Counter from './Counter';
import { UseGlobalStates } from '../../context/Context';


const ItemList = ({ marca, categoria }) => {

    const [counter, setcounter] = useState(0)
    const {cart, setcart,productos} = UseGlobalStates()

    let filtrado = []
  
 
    const addcart = () => {
      setcart([...cart, {...productos, cantidad: counter}]) 
    }
   
    //La idea seria borrar lo de AMD e intel y poner solamente las categorias, poner un detalle del producto
    // y ahi agregar el carrito


    if(categoria == 0 ){
        filtrado = productos.filter((prod) => prod.marca == marca)
        return (
            <div>
              <h2>Productos de {marca}</h2>
              {filtrado.map(prod => (
                <div key={prod.nombre}>
                  <h4>{prod.nombre}</h4>
                  <h5>Precio: {prod.precio}</h5>
                  <Counter stock={prod.stock} counter={counter} setcounter={setcounter} />
                  <button onClick={addcart} disabled={counter == 0}>Agregar al carrito</button>
                </div>
              ))}  
            </div>
          );
    }else{
        filtrado = productos.filter((prod) => prod.marca == marca && prod.categoria == categoria)
        return (
            <div>
              <h2>Productos de {marca} - {categoria}</h2>
              {filtrado.map(prod => (
                <div key={prod.nombre}>
                  <h4>{prod.nombre}</h4>
                  <h5>Precio: {prod.precio}</h5>
                  <Counter stock={prod.stock} counter={counter} setcounter={setcounter} />
                  <button onClick={addcart} disabled={counter == 0}>Agregar al carrito</button>
                </div>
              ))}  
            </div>
          );
    }
    
    

        
    
    
 
    
  };
export default ItemList


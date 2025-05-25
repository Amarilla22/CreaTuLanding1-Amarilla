import {useState } from "react";
import { UseGlobalStates } from "../../context/Context";
import Counter from "../ItemList/Counter"



const ItemDetail = ({producto}) =>{
    const [counter, setcounter] = useState(0)
    const {cart, setcart} = UseGlobalStates()

    const addcart = () => {
        setcart([...cart, {...producto, cantidad: counter}])
    }

    return(
        <div> 
            <h2>{producto.nombre}</h2>
            <h3>{producto.marca}</h3>
            <h3>${producto.precio}</h3>
            <Counter stock = {producto.Stock} counter = {counter} setcounter={setcounter}/>
            <br/>
            <button onClick={addcart}>Agregar al carrito</button>
        </div>
    )
}


export default ItemDetail
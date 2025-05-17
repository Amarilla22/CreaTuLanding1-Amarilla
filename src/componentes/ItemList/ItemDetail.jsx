import {useState } from "react";
import { UseGlobalStates } from "../../context/Context";
import Counter from "../ItemList/Counter"



const ItemDetail = ({producto}) =>{
    const [counter, setcounter] = useState(0)
    const {cart, setcart} = UseGlobalStates()

    const addcart = () => {
        setcart([...cart, {...productos, cantidad: counter}])
    }

    return(
        <div> 
            <h2>{producto.nombre}</h2>
            <h3>{producto.marca}</h3>
            <h3>${producto.precio}</h3>
            <Counter stock = {producto.Stock} counter = {counter} setcounter={setcounter}/>
            <br/>
            <button>Agregar al carrito</button>
        </div>
    )
}

//<Counter stock={prod.stock} counter={counter} setcounter={setcounter} />
//<button onClick={addcart} disabled={counter == 0}>Agregar al carrito</button>

export default ItemDetail
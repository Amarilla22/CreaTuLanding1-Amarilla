import { UseGlobalStates } from '../context/Context'
import { Link } from 'react-router'

const Cart = () => {
    const {cart, calcularTotal} = UseGlobalStates()

    return(
        <div>
            {cart.map((prod,index) => (
                <div key={index}> 
                  <h1>{prod.nombre}</h1>
                  <h1>{prod.precio}</h1>
                  <h1>Cantidad: {prod.cantidad}</h1>
                  <h1>Subtotal: {prod.precio * prod.cantidad}</h1>
                </div>))}  

                <h1>Total:{calcularTotal}</h1>
                <Link to='/Chekout'>Finalizar compra</Link>
        </div>
    ) 
    //ver el problema que aca estoy trayendo un array de arrays de objetos, tengo que hacer lo de subir al carrito
    //un solo objeto, no un array
}

export default Cart
import react, { useState } from 'react'
import { UseGlobalStates } from '../context/Context'
import { createOrder } from '../service/firebaseservice'

const Chekout = () => {
    const {cart, calcularTotal} = UseGlobalStates()
    const [user,  setUser] = useState({
        name: 'Aantiago',
        email: 'santi@hotmail.com',
        tel: '1153975247', 
    })
    const handlesumbit = event => {
        event.preventDefault() 
        let newOrder = {
            buyer: user,
            total: calcularTotal,
            items:cart,
            date: new Date()
        }
        //creamos nueva orden
        createOrder(newOrder).then((res) => {
            console.log(res)
            alert('Compra realizada')
        }).catch((error) => {
            console.log(error)
            alert("Error al crear orden de compra")
        })

    }

    return(
        <div>
            <form onSubmit={handlesumbit}>
                <label htmlFor="">Nombre</label>
                <input type="text" />
                <label htmlFor="">Email</label>
                <input type="text" />
                <label htmlFor="">Telefono</label>
                <input type="text" />
                <label htmlFor="">Domicilio</label>
                <input type="text" />
                <label htmlFor="">Fecha de nacimiento</label>
                <input type="text" />
                <button>Enviar</button>
            </form>
        </div>
    )
}

export default Chekout
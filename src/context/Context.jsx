import { createContext, useContext, useState} from "react";
import { getProducts } from "../service/firebaseservice";



export const GlobalState = createContext()

const ContextProvider = ({children}) => {
    const [cart, setcart] = useState([])
    const [total, setTotal] = useState([])
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true)

   
    const calcularItems = cart.reduce((total, prod) => {
        return total + prod.cantidad
    }, 0)

    const calcularTotal = cart.reduce((total, prod) => {
        return total + (prod.cantidad * prod.precio)
    }, 0)

    return ( 
        <GlobalState.Provider value= {{cart ,setcart,productos,loading,setLoading,total,setTotal,calcularItems,calcularTotal, setProductos}}> 
            {children} 
        </GlobalState.Provider>
    )
}

export default ContextProvider

export const UseGlobalStates = () => {
    return useContext(GlobalState)
}
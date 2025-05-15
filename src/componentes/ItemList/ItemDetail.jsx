import react from "@vitejs/plugin-react-swc";
import { UseGlobalStates } from "../../context/Context";


const ItemDetail = () =>{
    const [counter, setcounter] = useState(0)
    const {cart, setcart,productos} = UseGlobalStates()

    const addcart = () => {
        setcart([...cart, {...productos, cantidad: counter}])
    }


    return(
        <div>
            <Counter stock={prod.stock} counter={counter} setcounter={setcounter} />
            <button onClick={addcart} disabled={counter == 0}>Agregar al carrito</button>
        </div>
    )
}

export default ItemDetail
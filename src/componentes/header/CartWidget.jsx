import { Link } from "react-router"
import { UseGlobalStates } from "../../context/Context"

const CartWidget = () => {
    const {calcularItems} = UseGlobalStates()

    return(
        <div>
            <Link to='/cart'> 
                🛒 <span>{calcularItems}</span>
            </Link>
        </div>
    ) 
}

export default CartWidget
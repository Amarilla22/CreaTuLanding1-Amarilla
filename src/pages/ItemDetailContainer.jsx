
import NavBar from '../componentes/header/NavBar'
import ItemDetail from '../componentes/ItemList/ItemDetail';
import { getproductsbyid } from '../service/firebaseservice';
import { useParams} from 'react-router'
import { useEffect } from 'react';
import { UseGlobalStates } from '../context/Context';


const ItemDetailContainer = () => {
    const {id} = useParams()
    const {setProductos,productos} = UseGlobalStates()



    useEffect(() => {
        getproductsbyid(id).then(res => {
        setProductos(res)
        console.log(res)
        })
    },[])


    return (
      <div>
        <NavBar/>

        <ItemDetail producto = {productos}/>
      </div>
    );
  };

export default ItemDetailContainer
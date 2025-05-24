
import NavBar from '../componentes/header/NavBar'
import ItemDetail from '../componentes/ItemList/ItemDetail';
import { getproductsbyid } from '../service/firebaseservice';
import { useParams} from 'react-router'
import { useEffect, useState } from 'react';
import { UseGlobalStates } from '../context/Context';


const ItemDetailContainer = () => {
    const {id} = useParams()
    const [itemdetail, setItemDetail] = useState([])
    //const {setProductos,productos} = UseGlobalStates()



    useEffect(() => {
        getproductsbyid(id).then(res => {
        setItemDetail(res)
        })
    },[])


    return (
      <div>
        <NavBar/>

        <ItemDetail producto = {itemdetail}/>
      </div>
    );
  };

export default ItemDetailContainer
import {useEffect} from 'react'
import NavBar from '../componentes/header/NavBar'
import { useParams} from 'react-router'
import { getByCategory, getProducts } from '../service/firebaseservice';
import { UseGlobalStates } from '../context/Context';
import ItemList from '../componentes/ItemList/Itemlist';



const ItemListContainer = () => {
  const { categoria } = useParams();
  const {setLoading, setProductos,productos} = UseGlobalStates()

     useEffect(() => {
         setLoading(true)
         const fetchLista = categoria ? getByCategory :  getProducts
         fetchLista(categoria).then(res => {
             setProductos(res)
             setLoading(false)
         })
             
     }, [categoria])

// esto hay que revisarlo
  return (
    <div>
      <NavBar />
      
      <ItemList productos={productos}/>
    </div>
  );
};

export default ItemListContainer
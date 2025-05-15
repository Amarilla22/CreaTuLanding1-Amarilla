import react from 'react'
import NavBar from '../componentes/header/NavBar'
import ItemList from '../componentes/ItemList/Itemlist'
import { useParams } from 'react-router'


const ItemDetail = () => {
    const { marca, categoria } = useParams();
    
  
    return (
      <div>
        <NavBar />
         <ItemList marca={marca} categoria={categoria} />
      </div>
    );
  };

export default ItemDetail
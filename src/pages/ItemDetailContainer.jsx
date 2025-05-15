
import NavBar from '../componentes/header/NavBar'
import ItemList from '../componentes/ItemList/Itemlist'
import { useParams } from 'react-router'


const ItemDetailContainer = () => {
    const { marca, categoria } = useParams();
    
  
    return (
      <div>
        <NavBar />
         <ItemList marca={marca}/>
      </div>
    );
  };

export default ItemDetailContainer
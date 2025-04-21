import react, { use } from 'react'
import { useEffect,useState } from 'react'


const ItemList = ({ marca, categoria }) => {
    const [productos, setProductos] = useState([]);
    let filtrado = []

    useEffect(() => {
        fetch("/productos.json")
            .then(res => res.json())
            .then(data => setProductos(data))
    }, [])
 

    if(categoria== 0 ){
        filtrado = productos.filter((prod) => prod.marca == marca)
        return (
            <div>
              <h2>Productos de {marca}</h2>
              {filtrado.map(prod => (
                <div key={prod.nombre}>
                  <h4>{prod.nombre}</h4>
                  <h5>Precio: {prod.precio}</h5>
                </div>
              ))}  
            </div>
          );
    }else{
        filtrado = productos.filter((prod) => prod.marca == marca && prod.categoria == categoria)
        return (
            <div>
              <h2>Productos de {marca} - {categoria}</h2>
              {filtrado.map(prod => (
                <div key={prod.nombre}>
                  <h4>{prod.nombre}</h4>
                  <h5>Precio: {prod.precio}</h5>
                </div>
              ))}  
            </div>
          );
    }
    
    

        
    
    
 
    
  };
export default ItemList


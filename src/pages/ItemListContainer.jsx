import react from 'react'
import NavBar from '../componentes/header/NavBar'
import { useParams,Link } from 'react-router'
import { getByCategoty, getProducts } from '../service/firebaseservice';

const categoria = ['Procesadores', 'Graficas', 'Placas'];

const ItemListContainer = () => {
  const { marca } = useParams();
/* 
     useEffect(() => {
         setLoading(true)
         const fetchLista = categoria ? getByCategoty :  getProducts
         fetchLista(categoria).then(res => {
             console.log(res)
             setProductos(res)
             setLoading(false)
         })
             
     }, [])
*/
// esto hay que revisarlo
  return (
    <div>
      <NavBar />
      <h2>Categorías de {marca}</h2>
      {categoria.map((cat) => (
        <Link className='text-dark' key={cat} to={`/lista/${marca}/${cat}`}> <h3>{cat}</h3> </Link>
      ))}
    </div>
  );
};

export default ItemListContainer
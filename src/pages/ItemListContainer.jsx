import react from 'react'
import NavBar from '../componentes/header/NavBar'
import { useParams,Link } from 'react-router'

const categorias = ['Procesadores', 'Graficas', 'Placas'];

const ItemListContainer = () => {
  const { marca } = useParams();

  return (
    <div>
      <NavBar />
      <h2>Categorías de {marca}</h2>
      {categorias.map((cat) => (
        <Link className='text-dark' key={cat} to={`/lista/${marca}/${cat}`}> <h3>{cat}</h3> </Link>
      ))}
    </div>
  );
};

export default ItemListContainer
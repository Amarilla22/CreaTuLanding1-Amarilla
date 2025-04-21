import react from 'react'
import NavBar from '../componentes/header/NavBar'
import { Link } from 'react-router'
import { useEffect,useState } from 'react'

const Home = () => {

    const [productos, setproductos] = useState([])

    return (
        <div>
      <NavBar />
      <div className="ItemContainer">
        <Link className='text-dark' to="/lista/AMD"><h1><u>AMD</u></h1></Link>
        <Link className='text-dark' to="/lista/Intel"><h1><u>Intel</u></h1></Link>
      </div>
    </div>
    )
}

export default Home
import react from 'react'
import logo from "../../assets/logo-temporal.png"
import CartWidget from './CartWidget'
import { Link } from 'react-router'

const NavBar = () => {
    return (
        <header>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <img className='logo' src={logo} alt="imagen" />
                    <a className="navbar-brand">Arma tu propia PC</a>
                    <div className="dropdown">
                        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Ir a</a>
                        <ul className="dropdown-menu">
                            <li><Link className='text-dark' to="/">Home</Link></li>
                            <li><Link className='text-dark' to={"/AMD"} >Productos AMD</Link></li>
                            <li><Link className='text-dark' to={"/Intel"} >Productos Intel</Link></li>
                        </ul>
                    </div>
                    <CartWidget/>
                </div>
            </nav>
        </header>
       
    )
}

export default NavBar
    

    

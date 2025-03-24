import react from 'react'
import logo from "../assets/logo-temporal.png"
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
    <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            <img className='logo' src={logo} alt="imagen" />
            <a className="navbar-brand">"nombre de empresa"</a>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
        </div>
    </nav>
    )
}

export default NavBar
    

    

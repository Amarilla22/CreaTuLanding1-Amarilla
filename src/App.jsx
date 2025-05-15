import './App.css'
import {Route , Routes} from 'react-router'
import ItemListContainer from './pages/ItemListContainer'
import ItemDetail from './pages/ItemDetail'
import Home from './pages/Home'
import Cart from './pages/cart'
import Chekout from './pages/Chekout'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lista/:marca" element={<ItemListContainer />} />
        <Route path="/lista/:marca/:categoria" element={<ItemDetail />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/chekout' element={<Chekout/>}/>
      </Routes>
  );
}

export default App

import './App.css'
import {Route , Routes} from 'react-router'
import ItemListContainer from './pages/ItemListContainer'
import Cart from './pages/cart'
import Chekout from './pages/Chekout'
import ItemDetailContainer from './pages/ItemDetailContainer'

function App() {
  return (
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/:categoria" element={<ItemListContainer />} />
        <Route path="/:categoria/:id" element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/chekout' element={<Chekout/>}/>
      </Routes>
  );
}

export default App

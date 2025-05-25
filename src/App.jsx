import './App.css'
import {Route , Routes} from 'react-router'
import ItemListContainer from './pages/ItemListContainer'
import Cart from './pages/Cart'
import Chekout from './pages/Chekout'
import ItemDetailContainer from './pages/ItemDetailContainer'

function App() {
  return (
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/marca/:categoria" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/chekout' element={<Chekout/>}/>
      </Routes>
  );
}

export default App

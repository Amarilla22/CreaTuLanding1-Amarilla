import './App.css'
import {Route , Routes} from 'react-router'
import ItemListContainer from './pages/ItemListContainer'
import CartWidget from './componentes/header/CartWidget'
import ItemList from './componentes/ItemList/Itemlist'
import ItemDetail from './pages/ItemDetail'
import Home from './pages/Home'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lista/:marca" element={<ItemListContainer />} />
        <Route path="/lista/:marca/:categoria" element={<ItemDetail />} />
      </Routes>
  );
}

export default App

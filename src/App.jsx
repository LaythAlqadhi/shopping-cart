import { Route, Routes } from 'react-router-dom';
import Navebar from './components/Navbar/Navbar'
import './App.css';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Cart from './pages/Cart/Cart';
import NotFound from './pages/NotFound/NotFound';
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

const App = () => {
  const [cart, setCart] = useState([]);
  const [productCounts, setProductCounts] = useState({});

  const setProductCount = (id, quantity) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [id]: quantity,
    }));
  };
  
  return (
    <CartContext.Provider value={{ cart, setCart, productCounts, setProductCount }}>
      <Navebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </CartContext.Provider>
  );
}

export { App, CartContext };
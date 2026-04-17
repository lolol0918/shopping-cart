import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';

import Shop from './pages/Shop.jsx';
import Cart from './pages/Cart.jsx';
import Home from './pages/Home.jsx';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;

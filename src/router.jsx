import { createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import Cart from './pages/Cart.jsx';
import Checkout from './pages/Checkout.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'shop', element: <Shop /> },
      { path: 'cart', element: <Cart /> },
      { path: 'checkout', element: <Checkout /> },
    ],
  },
]);

export default router;

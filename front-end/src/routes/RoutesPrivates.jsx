import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Products from '../pages/Products';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import Order from '../pages/Order';
import OrderDetails from '../pages/OrderDetails';
import SellerOrders from '../pages/SellerOrders';
import SellerOrder from '../pages/SellerOrder';
import Manage from '../pages/Manage';

function RoutesPrivates() {
  <Routes>
  <Route path="/login" element={ <Home /> } />
  </Routes>
  return (
    <Routes>
      <Route path="/customer/products" element={ <Products /> } />
      <Route path="/customer/checkout" element={ <Checkout /> } />
      <Route path="/customer/orders" element={ <Orders /> } />
      <Route path="/customer/orders/:id" element={ <Order /> } />
      <Route path="/customer/orders/:idVenda" element={ <OrderDetails /> } />
      <Route path="/seller/orders" element={ <SellerOrders /> } />
      <Route path="/seller/orders/:id" element={ <SellerOrder /> } />
      <Route path="/admin/manage" element={ <Manage /> } />
    </Routes>

  );
}

export default RoutesPrivates;

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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
import NotFound from '../pages/NotFound';

function RoutesApp() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/customer/products" element={ <Products /> } />
      <Route exact path="/customer/checkout" element={ <Checkout /> } />
      <Route exact path="/customer/orders" element={ <Orders /> } />
      <Route exact path="/customer/orders/:id" element={ <Order /> } />
      <Route exact path="/customer/orders/:idVenda" element={ <OrderDetails /> } />
      <Route exact path="/seller/orders" element={ <SellerOrders /> } />
      <Route exact path="/seller/orders/:id" element={ <SellerOrder /> } />
      <Route exact path="/admin/manage" element={ <Manage /> } />
      <Route element={ <NotFound /> } />
    </Routes>

  );
}

export default RoutesApp;

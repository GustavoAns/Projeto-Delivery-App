import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ProdutoCard from '../components/ProdutoCard';
import AppContext from '../context/AppContext';
import api from '../services/api';
import Navbar from '../components/Navbar';

export default function Products() {
  const { addItemCarrinho, finishCarrinho, itens, setItens } = useContext(AppContext);
  const navigate = useNavigate();

  // [
  //   { id: 1, quantity: 2 },
  //   { id: 2, quantity: 2 }
  // ]

  // const dataTestId = {
  //   buttonCusPro: 'customer_products__button-cart',
  //   buttonCusCheckout: 'customer_products__checkout-bottom-value',
  // };

  // const navigate = useNavigate();

  const navigateToCheckout = () => {
    navigate('/customer/checkout');
    return finishCarrinho();
  };

  useEffect(() => {
    api
      .get('/products')
      .then((response) => setItens(response.data));
  }, [setItens]);

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);
  //   const payload = Object.fromEntries(formData);
  //   api
  //     .post('/login', payload)
  //     .then(({ data }) => storage.set('token', data.token))
  //     .then(() => navigate('/customer/products'))
  //     .catch(({ response: { data } }) => openAlert(data));
  // };

  return (
    <span>
      <Navbar />
      { itens.map((item) => (<ProdutoCard
        item={ item }
        key={ item.id }
        addItemCarrinho={ addItemCarrinho }
      />)) }

      <button
        type="button"
        data-testid="customer_products__button-cart"
        onClick={ navigateToCheckout }
      >
        Ver Carrinho:
      </button>
      {/*
        /customer_products__checkout-bottom-value
      */}
    </span>
  );
}

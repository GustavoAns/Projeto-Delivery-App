import React, { useEffect, useContext } from 'react';
import ProdutoCard from '../components/ProdutoCard';
import AppContext from '../context/AppContext';
import api from '../services/api';

// import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Products() {
  const { addItemCarrinho, finishCarrinho, itens, setItens } = useContext(AppContext);

  // [
  //   { id: 1, quantity: 2 },
  //   { id: 2, quantity: 2 }
  // ]

  // const dataTestId = {
  //   buttonCusPro: 'customer_products__button-cart',
  //   buttonCusCheckout: 'customer_products__checkout-bottom-value',
  // };

  // const navigate = useNavigate();

  useEffect(() => {
    api
      .get('/products')
      .then((response) => setItens(response.data));
  }, []);

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
        key={ item.id }
        id={ item.id }
        price={ item.price }
        image={ item.urlImage }
        title={ item.name }
        addItemCarrinho={ addItemCarrinho }
      />)) }

      <button
        type="button"
        data-testid="customer_products__button-cart"
        onClick={ finishCarrinho }
      >
        Ver Carrinho:
      </button>
      {/*
        /customer_products__checkout-bottom-value
      */}
    </span>
  );
}

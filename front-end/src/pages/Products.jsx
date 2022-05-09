import React, { useEffect, useState } from 'react';
import ProdutoCard from '../components/ProdutoCard';
import api from '../services/api';

// import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Products() {
  const [itens, setItens] = useState([]);
  // const dataTestId = {
  //   buttonCusPro: 'customer_products__button-cart',
  //   buttonCusCheckout: 'customer_products__checkout-bottom-value',
  // };

  // const navigate = useNavigate();

  useEffect(() => {
    api
      .get('/products')
      .then((response) => setItens(response));
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
      { itens.map(callback(<ProdutoCard
        id={ 2 }
        price={ 1 }
        image={ 1 }
        title={ 2 }
      />)) }

      <button
        type="button"
        data-testid="customer_products__button-cart"
      >
        Ver Carrinho:
      </button>
      {/*
        /customer_products__checkout-bottom-value
      */}
    </span>
  );
}

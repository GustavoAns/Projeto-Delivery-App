import React, { useEffect, useState } from 'react';
// import storage from '../utils/localStorage';
// import api from '../services/api';
// import { useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar';
// import storage from '../utils/localStorage';
import ProdutoCard from '../components/ProdutoCard';

export default function Products() {
  const [itens] = useState([]);

  // const navigate = useNavigate();

  // tenho que fazer uma função que tras os os dados da api para renderizar o card de produtos
  // salvar os itens no estado da pagina e usar map para renderisar

  useEffect(() => {
    // storage pega o meu token
    // api
    // salvar o setItens
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
      {itens.map(callback(<ProdutoCard
        id={ 2 }
        price={ 1 }
        image={ 1 }
        title={ 2 }
      />))}

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

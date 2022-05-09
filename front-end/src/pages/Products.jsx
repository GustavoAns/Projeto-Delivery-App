import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import Navbar from '../components/Navbar'
import storage from '../utils/localStorage';
import ProdutoCard from "../components/ProdutoCard";



export default function Products() {
  const [itens, setItens] = useState();
  const dataTestId = {
    buttonCusPro: 'customer_products__button-cart',
    buttonCusCheckout: 'customer_products__checkout-bottom-value',

  };

  const navigate = useNavigate();


  // tenho que fazer uma função que tras os os dados da api para renderizar o card de produtos
  // salvar os itens no estado da pagina e usar map para renderisar


  const handleClick = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);
    api
      .post('/login', payload)
      .then(({ data }) => storage.set('token', data.token))
      .then(() => navigate('/customer/products'))
      .catch(({ response: { data } }) => openAlert(data));
  };

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };


  return (
    <span>
      <Navbar />
      {itens.map(callback(<ProdutoCard
        data-testid={inputEmail}
        id="email"
        name="email"
        placeholder="email@trybeer.com.br"
        type="email"
        onChange={handleInputChange}
        value={formValues.email} />))}
      <button>
        ver carrinho:{"R$ valor"}
      </button>
      { // customer_products__button-cart 
        // customer_products__checkout-bottom-value
      }


    </span>
  );
}

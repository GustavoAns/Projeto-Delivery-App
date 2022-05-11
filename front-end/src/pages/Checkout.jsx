import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AppContext from '../context/AppContext';
import api from '../services/api';
import storage from '../utils/localStorage';

export default function Checkout() {
  const {
    itensCarrinho,
    carrinho,
    setItensCarrinho,
    setCarrinho,
  } = useContext(AppContext);
  const [formValues, setFormValues] = useState(
    { deliveryAddress: '',
      deliveryNumber: '',
      sellerId: '',
      listProducts: itensCarrinho,
    },
  );
  const [sellers, setSellers] = useState([]);
  const navigate = useNavigate();
  const token = storage.get('token');

  const removeItem = (idItem) => {
    const cart = carrinho.filter((item) => item.id !== idItem);
    const itensCart = itensCarrinho.filter((item) => item.id !== idItem);
    setCarrinho(cart);
    setItensCarrinho(itensCart);
  };

  useEffect(() => {
    api.get('/user/sellers')
      .then(({ data }) => setSellers(data));
  }, []);

  const handleOrder = () => {
    api.post('/user/sales', formValues, { headers: { Authorization: token } })
      .then(({ data }) => navigate(`/customer/orders/${data.id}`));
  };

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <div>
      <Navbar />
      <h2>Finalizar Pedido</h2>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Descrição</th>
            <th scope="col">Quantidade</th>
            <th scope="col">Valor Unitário</th>
            <th scope="col">Sub-Total</th>
            <th scope="col">Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {
            carrinho

            && carrinho.map(({ id, name, price }, index) => (
              <>
                <tr key={ id }>
                  <td
                    data-testid={
                      `customer_checkout__element-order-table-item-number${index}`
                    }
                  >
                    { id }
                  </td>
                  <td
                    data-testid={ `customer_checkout__element-order-table-name-${index}` }
                  >
                    { name }
                  </td>
                  <td
                    data-testid={
                      `customer_checkout__element-order-table-quantity-${index}`
                    }
                  >
                    { itensCarrinho[index].quantity }
                  </td>
                  <td
                    data-testid={
                      `customer_checkout__element-order-table-unit-price-${index}`
                    }
                  >
                    { price }
                  </td>
                  <td
                    data-testid={
                      `customer_checkout__element-order-table-sub-total-${index}`
                    }
                  >
                    { (itensCarrinho[index].quantity * price).toFixed(2) }
                  </td>
                </tr>
                <button
                  onClick={ () => removeItem(id) }
                  type="button"
                  data-testid={ `customer_checkout__element-order-table-remove-${index}` }
                >
                  Remover Item
                </button>
              </>

            ))
          }
        </tbody>
      </table>
      <div data-testid="customer_checkout__element-order-total-price">
        Total: R$
        {
          carrinho
            && (carrinho.reduce((acc, { price }, index) => {
              let total = 0;
              total = itensCarrinho[index].quantity * price;
              const sum = acc + total;
              return sum;
            }, 0)).toFixed(2)
        }
      </div>
      <div>
        <h2>Detalhes e Endereço para Entrega</h2>
        <label htmlFor="vendedor">
          P. Vendedora Responsavel
          <select
            name="sellerId"
            onChange={ handleInputChange }
            data-testid="customer_checkout__select-seller"
            id="vendedor"
          >
            <option selected disabled hidden>Escolha</option>
            {sellers
              && sellers.map(({ id, name }) => (
                <option key={ id } value={ id }>{ name }</option>
              ))}
          </select>
        </label>
        <label htmlFor="adress">
          Endereço
          <input
            data-testid="customer_checkout__input-address"
            type="text"
            name="deliveryAddress"
            placeholder="Endereço"
            id="adress"
            onChange={ handleInputChange }
          />
        </label>
        <label htmlFor="number">
          Número
          <input
            name="deliveryNumber"
            type="text"
            onChange={ handleInputChange }
            data-testid="customer_checkout__input-addressNumber"
            placeholder="Número"
            id="number"
          />
        </label>
        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
          onClick={ handleOrder }
        >
          Finalizar Pedido
        </button>
      </div>
    </div>
  );
}

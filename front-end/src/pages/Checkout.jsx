import React from 'react';

export default function Checkout() {
  return (
    <div>
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
          {/* fazer um map dos produtos e preencher a tabela dinamicamente */}
        </tbody>
      </table>
      <div data-testid="customer_checkout__element-order-total-price">
        Total: R$
        {}
      </div>
      <div>
        <h2>Detalhes e Endereço para Entrega</h2>
        <label htmlFor="vendor">
          P. Vendedora Responsavel
          <select
            data-testid="customer_checkout__select-seller"
            id="vendor"
          >
            <option>Fulana Pereira</option>
          </select>
        </label>
        <label htmlFor="adress">
          Endereço
          <input
            data-testid="customer_checkout__input-address"
            type="text"
            placeholder="Endereço"
            id="adress"
          />
        </label>
        <label htmlFor="number">
          Número
          <input
            data-testid="customer_checkout__input-addressNumber"
            type="text"
            placeholder="Número"
            id="number"
          />
        </label>
      </div>
    </div>
  );
}

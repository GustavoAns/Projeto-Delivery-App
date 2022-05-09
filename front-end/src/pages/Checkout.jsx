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
      <div>
        `Total: R$
        {}
        `
      </div>
    </div>
  );
}

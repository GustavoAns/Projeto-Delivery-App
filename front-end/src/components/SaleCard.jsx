import React from 'react';

// const arrayTest = [
//   {
//     "id": 5,
//     "userId": 4,
//     "sellerId": 2,
//     "totalPrice": "19.40",
//     "deliveryAddress": "string",
//     "deliveryNumber": "string",
//     "saleDate": "2022-05-09T20:21:53.000Z",
//     "status": "Pendente"
//   },
//   {
//     "id": 6,
//     "userId": 4,
//     "sellerId": 2,
//     "totalPrice": "38.80",
//     "deliveryAddress": "string",
//     "deliveryNumber": "string",
//     "saleDate": "2022-05-09T20:22:00.000Z",
//     "status": "Pendente"
//   }
// ]

export default function SaleCard(obj) {
  const { objSale: { id, status, totalPrice, saleDate } } = obj;
  // const { index } = i;
  const test = saleDate.split('T');
  const formatedDate = test[0].split('-').reverse().join('/');

  return (
    <div data-testid={ `customer_products__element-order-date-${id}` }>
      <div>
        <h5>Pedido</h5>
        <h4 data-testid={ `customer_orders__element-order-id-${id}` }>
          { id }
        </h4>
      </div>
      <div>
        <h1 data-testid={ `customer_orders__element-delivery-status-${id}` }>
          { status }
        </h1>
      </div>
      <div>
        <h1 data-testid={ `customer_orders__element-order-date-${id}` }>
          { formatedDate }
        </h1>
      </div>
      <div>
        <h1 data-testid={ `customer_orders__element-order-id-${id}` }>
          { `R$ ${totalPrice}` }
        </h1>
      </div>
    </div>
  );
}

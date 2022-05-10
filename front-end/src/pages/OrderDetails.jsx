/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import storage from '../utils/localStorage';

export default function OrderDetails() {
  const [order, setOrder] = useState({
    id: 0,
    sellerId: 0,
    saleDate: '',
    status: '',
    totalPrice: '',
    items: [],
    user: {
      name: '',
    },
  });

  const { idOrder } = useParams();
  const token = storage.get('token');
  const dataTestids = {
    orderId: 'customer_order_details__element-order-details-label-order-id',
    sellerName: 'customer_order_details__element-order-details-label-seller-name',
    orderData: 'customer_order_details__element-order-details-label-order-date',
    deliveryStatus: 'customer_order_details__element-order-details-label-delivery-status',
    tableItemNumber: 'customer_order_details__element-order-table-item-number-',
    tableName: 'customer_order_details__element-order-table-name-',
    tableQuantity: 'customer_order_details__element-order-table-quantity-',
    tableSubtotal: 'customer_order_details__element-order-table-sub-total-',
    tableUnitPrice: 'customer_order_details__element-order-table-unit-price-',
    totalPrice: 'customer_order_details__element-order-total-price-',
    buttonDeliveryCheck: 'customer_order_details__button-delivery-check',
  };

  useEffect(() => {
    api.get(`/user/sales/${idOrder}`, { headers: { Authorization: token } })
      .then(({ data: [orderResponse] }) => setOrder(orderResponse));
  }, [idOrder, token]);

  return (
    <>
      <div>Detalhe do pedido</div>
      <div
        style={ {
          width: '70%',
        } }
      >
        <div
          style={ {
            display: 'flex',
            width: '100%',
          } }
        >
          <p data-testid={ dataTestids.orderId }>{`PEDIDO ${order.id}`}</p>
          <p data-testid={ dataTestids.sellerName }>{`P. Vend: ${order.user.name}`}</p>
          <p data-testid={ dataTestids.orderData }>{order.saleDate}</p>
          <p data-testid={ dataTestids.deliveryStatus }>{order.status}</p>
          <button
            type="submit"
            data-testid={ dataTestids.buttonDeliveryCheck }
          >
            MARCAR COMO ENTREGUE
          </button>
        </div>
        card order
      </div>
    </>
  );
}

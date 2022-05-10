import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '../services/api';

function ItemsFromOrderDetails({ items }) {
  const [itemsFullData, setItemsFulldata] = useState([]);
  const dataTestids = {
    tableItemNumber: 'customer_order_details__element-order-table-item-number-',
    tableName: 'customer_order_details__element-order-table-name-',
    tableQuantity: 'customer_order_details__element-order-table-quantity-',
    tableSubtotal: 'customer_order_details__element-order-table-sub-total-',
    tableUnitPrice: 'customer_order_details__element-order-table-unit-price-',
  };

  useEffect(() => {
    const getAllDataItems = async () => {
      const allItems = items.map(async (item) => {
        const response = await api.get(`/products/${item.productId}`);
        return {
          idItem: response.data.id,
          name: response.data.name,
          quantity: item.quantity,
          priceUnit: `R$${response.data.price}`,
          subTotal: `R$ ${(response.data.price * item.quantity).toFixed(2)}`,
        };
      });
      Promise.all(allItems)
        .then((res) => setItemsFulldata(res));
    };
    getAllDataItems();
  }, [items]);

  return (
    <table>
      <tr>
        <th>Item</th>
        <th>Nome</th>
        <th>Quantidade</th>
        <th>Valor unitario</th>
        <th>sub-total</th>
      </tr>
      {itemsFullData
      && itemsFullData.map(({ idItem, name, quantity, priceUnit, subTotal }, index) => (
        <tr key={ idItem }>
          <td
            data-testid={ `${dataTestids.tableItemNumber}${index}` }
          >
            { idItem }
          </td>
          <td
            data-testid={ `${dataTestids.tableName}${index}` }
          >
            { name }
          </td>
          <td
            data-testid={ `${dataTestids.tableQuantity}${index}` }
          >
            { quantity }
          </td>
          <td
            data-testid={ `${dataTestids.tableUnitPrice}${index}` }
          >
            { priceUnit.replace('.', ',') }
          </td>
          <td
            data-testid={ `${dataTestids.subTotal}${index}` }
          >
            { subTotal.replace('.', ',') }
          </td>
        </tr>
      ))}
    </table>
  );
}

ItemsFromOrderDetails.propTypes = {
  items: PropTypes.arrayOf(PropTypes.number).isRequired,
};
export default ItemsFromOrderDetails;

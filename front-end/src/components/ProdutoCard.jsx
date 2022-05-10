import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap';

export default function ProdutoCard({ item }) {
  const [quantity, setQuantity] = useState(0);
  const TAG = {
    PRICE: 'customer_products__element-card-price-',
    IMAGE: 'customer_products__img-card-bg-image-',
    TITLE: 'customer_products__element-card-title-',
    QUANTITY: 'customer_products__input-card-quantity-',
    BUTTON_RM_ITEM: 'customer_products__button-card-rm-item-',
    BUTTON_ADD_ITEM: 'customer_products__button-card-add-item-',
  };

  const { id, price, image, title, addItemCarrinho } = item;

  const removeOne = () => {
    const newNumber = quantity - 1;
    if (newNumber < 0) {
      setQuantity(0);
      return addItemCarrinho({ id, quantity: newNumber });
    }
    setQuantity(newNumber);
    return addItemCarrinho({ id, quantity: newNumber });
  };

  const addOne = () => {
    const newNumber = quantity + 1;
    setQuantity(newNumber);
    return addItemCarrinho({ id, quantity: newNumber });
  };

  return (
    <Card>
      <div data-testid={ `${TAG.PRICE}${id}` }>
        {price}
      </div>
      <CardImg
        data-testid={ `${TAG.IMAGE}${id}` }
        top
        url={ image }
        alt=""
      />
      <CardBody>
        <CardTitle
          data-testid={ `${TAG.TITLE}${id}` }
          tag="h5"
        >
          { title }
        </CardTitle>
      </CardBody>
      <div>
        <button
          type="button"
          onClick={ removeOne }
          data-testid={ `${TAG.BUTTON_RM_ITEM}${id}` }
        >
          -
        </button>
        <span data-testid={ `${TAG.QUANTITY}${id}` }>{quantity}</span>
        <button
          type="button"
          onClick={ addOne }
          data-testid={ `${TAG.BUTTON_ADD_ITEM}${id}` }
        >
          +
        </button>
      </div>
    </Card>
  );
}

ProdutoCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
};

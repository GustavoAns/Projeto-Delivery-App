import React, { useState } from 'react';

export default function Products() {
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const TAG = {
    PRICE: 'customer_products__element-card-price-',
    IMAGE: 'customer_products__img-card-bg-image-',
    TITLE: 'customer_products__element-card-title-',
    QUANTITY: 'customer_products__input-card-quantity-',
    BUTTON_RM_ITEM: 'customer_products__button-card-rm-item-',
    BUTTON_ADD_ITEM: 'customer_products__button-card-add-item-',
  };

  const handleClick = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);

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
      <div>preço</div>
      <div>imagem</div>
      <div>name</div>
      <div>quantidade</div>
      <div>add</div>
      <div>remover</div>
    </span>
  );
}


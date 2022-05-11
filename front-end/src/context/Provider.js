import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

export default function Provider({ children }) {
  const [data] = useState([]);
  const [itensCarrinho, setItensCarrinho] = useState([]);
  const [carrinho, setCarrinho] = useState([]);
  const [itens, setItens] = useState([]);

  const addItemCarrinho = (prodObj) => {
    const newArrayFilter = itensCarrinho.filter((item) => item.id !== prodObj.id);
    const newArray = [
      ...newArrayFilter,
      prodObj,
    ];
    if (prodObj.quantity === 0) {
      return setItensCarrinho(newArrayFilter);
    }
    setItensCarrinho(newArray);
  };

  const finishCarrinho = () => {
    const acumulador = [];
    itensCarrinho.map((itemCar) => {
      const [fullItem] = itens.filter((item) => item.id === itemCar.id);
      return acumulador.push(fullItem);
    });
    setCarrinho(acumulador);
  };

  const context = {
    data,
    carrinho,
    addItemCarrinho,
    finishCarrinho,
    itens,
    setItens,
    itensCarrinho,
    setItensCarrinho,
    setCarrinho };

  return (
    <AppContext.Provider value={ context }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

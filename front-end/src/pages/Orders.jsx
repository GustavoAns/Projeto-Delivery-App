import React, { useEffect, useState } from 'react';
import api from '../services/api';
import SaleCard from '../components/SaleCard';
import Navbar from '../components/Navbar';

export default function Orders() {
  const [sales, setSales] = useState([]);
  useEffect(() => {
    api
      .get('/user/sales')
      .then((response) => { setSales(response.data); });
  }, []);

  return (
    <>
      <Navbar />
      {sales.map((objSale, i) => {
        console.log(i);
        return (
          <SaleCard
            key={ i }
            objSale={ objSale }
          />
        );
      })}
    </>
  );
}

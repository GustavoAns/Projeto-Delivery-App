import React, { useEffect, useState } from 'react';
import api from '../services/api';
import SaleCard from '../components/SaleCard';
import Navbar from '../components/Navbar';

// const arrayTest = [
//   {
//     id: 5,
//     userId: 4,
//     sellerId: 2,
//     totalPrice: '19.40',
//     deliveryAddress: 'string',
//     deliveryNumber: 'string',
//     saleDate: '2022-05-09T20:21:53.000Z',
//     status: 'Pendente',
//   },
//   {
//     id: 6,
//     userId: 4,
//     sellerId: 2,
//     totalPrice: '38.80',
//     deliveryAddress: 'string',
//     deliveryNumber: 'string',
//     saleDate: '2022-05-09T20:22:00.000Z',
//     status: 'Pendente',
//   },
// ];

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

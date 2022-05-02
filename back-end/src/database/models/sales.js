// column names id, user_id, seller_id, total_price, delivery_adress,  delivery_number, sale_date, status 
module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sales', {
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    // },
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id',
    },
    sellerId: {
      type: DataTypes.INTEGER,
      field: 'seller_id',
    },
    totalPrice: {
      type: DataTypes.INTEGER,
      field: 'total_price',
    },
    deliveryAddress: {
      type: DataTypes.STRING,
      field: 'delivery_adress',
    },
    deliveryNumber: {
      type: DataTypes.STRING,
      field: 'delivery_number',
    },
    saleDate: {
      type: DataTypes.DATE,
      field: 'sale_date',
    },
    status: {
      type: DataTypes.STRING,
    },
  }, {
    timestamps: false,
  });
  return Sales;
}
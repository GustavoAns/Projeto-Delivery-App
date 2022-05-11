module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
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
      type: DataTypes.DECIMAL(9, 2),
      field: 'total_price',
    },
    deliveryAddress: {
      type: DataTypes.STRING,
      field: 'delivery_address',
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
    tableName: 'sales'
  });

  Sale.associate = (models) => {
    Sale.hasMany(models.SalesProduct, {
      foreignKey: {
        name: 'saleId',
        field: 'sale_id',
      },
      as: 'listProducts'
    });
  };

  return Sale;
};

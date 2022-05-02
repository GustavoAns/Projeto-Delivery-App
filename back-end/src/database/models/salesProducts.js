module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('saleProduct', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    saleId: {
      type: DataTypes.INTEGER,
      field: 'sale_id',
    },
    productId: {
      type: DataTypes.INTEGER,
      field: 'product_id',
    },
    quantity: {
      type: DataTypes.INTEGER,
      field: 'quantity',
    },
  }, {
    timestamps: false,
    tableName: 'salesProducts'
  });
  return SaleProduct;
}
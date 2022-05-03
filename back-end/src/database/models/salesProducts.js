module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProduct', {
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    // },
    saleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: 'sale_id',
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: 'product_id',
    },
    quantity: {
      type: DataTypes.INTEGER,
      field: 'quantity',
    },
  }, {
    timestamps: false,
    tableName: 'sales_products'
  });

  SalesProduct.associate = (models) => {
    SalesProduct.belongsTo(models.Sale, {
      foreignKey: {
        name: 'id',
        field: 'id',
      },
      as: 'sales',
    });
  };

  SalesProduct.associate = (models) => {
    SalesProduct.belongsTo(models.Product, {
      foreignKey: {
        name: 'id',
        field: 'id',
      },
      as: 'products',
    });
  };

  return SalesProduct;
}
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
    SalesProduct.belongsToMany(models.Sale, {
      foreignKey: 'id',
      as: 'sales',
      through: 'sales_products',
    });
  };

  SalesProduct.associate = (models) => {
    SalesProduct.belongsToMany(models.Product, {
      foreignKey: 'id',
      as: 'products',
      through: 'sales_products',
    });
  };

  return SalesProduct;
}
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL(4, 2),
    },
    url_image: {
      type: DataTypes.STRING,
    },
  }, {
    timestamps: false,
    tableName: 'product'
  });
  Product.associate = (models) => {
    Product.hasMany(models.saleProduct, {
      foreignKey: {
        name: 'productId',
        field: 'product_id',
      },
    });
  };
  return Product;
};
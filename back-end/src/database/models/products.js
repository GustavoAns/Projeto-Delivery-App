module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
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
  });
  Products.associate = (models) => {
    Products.hasMany(models.salesProducts, {
      foreignKey: {
        name: 'productId',
        field: 'product_id',
      },
    });
  };
  return Products;
};
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    // },
    name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL(4, 2),
    },
    urlImage: {
      type: DataTypes.STRING,
      field: 'url_image',
    },
  }, {
    timestamps: false,
    tableName: 'products'
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
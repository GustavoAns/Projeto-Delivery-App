module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING },
  }, {
    timestamps: false,
    tableName: 'users'
  });
  User.associate = (models) => {
    User.hasMany(models.Sale, {
      foreignKey: {
        name: 'userId',
        field: 'user_id',
      },
      foreignKey: {
        name: 'sellerId',
        field: 'seller_id',
      },
    }
    );
  };
  return User;
}; 
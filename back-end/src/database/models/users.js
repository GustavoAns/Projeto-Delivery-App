module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    // },
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING },
  }, {
    timestamps: false,
  });
  Users.associate = (models) => {
    Users.hasMany(models.Sales, {
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
  return Users;
}; 
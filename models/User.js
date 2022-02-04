const User = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  return UserTable;
};

module.exports = User;
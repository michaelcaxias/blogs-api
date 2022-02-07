const User = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
    },
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  UserTable.associate = (models) => {
    UserTable.hasMany(models.BlogPost, {
      foreignKey: 'userId', as: 'BlogPosts',
    });
  };

  return UserTable;
};

module.exports = User;
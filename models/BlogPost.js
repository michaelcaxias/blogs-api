const BlogPost = (sequelize, DataTypes) => {
  const CategoryTable = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  }, {
    timestamps: false,
  });

  CategoryTable.associate = (models) => {
    CategoryTable.belongsTo(models.User, {
      foreignKey: 'id', as: 'user',
    });
  };

  return CategoryTable;
};

module.exports = BlogPost;
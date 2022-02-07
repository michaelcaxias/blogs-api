const BlogPost = (sequelize, DataTypes) => {
  const CategoryTable = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    categoryIds: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  return CategoryTable;
};

module.exports = BlogPost;
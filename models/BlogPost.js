const BlogPost = (sequelize, DataTypes) => {
  const CategoryTable = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {
    timestamps: false,
  });

  return CategoryTable;
};

module.exports = BlogPost;
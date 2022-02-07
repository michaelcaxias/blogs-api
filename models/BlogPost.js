const BlogPost = (sequelize, DataTypes) => {
  const CategoryTable = sequelize.define('BlogPosts', {
    name: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  return CategoryTable;
};

module.exports = BlogPost;
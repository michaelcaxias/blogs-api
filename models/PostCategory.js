const PostCategory = (sequelize) => {
  const PostCategoryTable = sequelize.define('PostCategory', {}, {
    timestamps: false,
  });

  PostCategoryTable.associate = (models) => {
    models.BlogPost.belongsToMany(models.BlogPost, {
      as: 'BlogPosts',
      through: PostCategoryTable,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.Category, {
      as: 'Categories',
      through: PostCategoryTable,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostCategoryTable;
};

module.exports = PostCategory;
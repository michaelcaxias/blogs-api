const PostCategory = (sequelize) => {
  const PostCategoryTable = sequelize.define('PostCategory', {}, { timestamps: false,
    tableName: 'PostsCategories',
  });

  PostCategoryTable.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategoryTable,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'BlogPosts',
      through: PostCategoryTable,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };

  return PostCategoryTable;
};

module.exports = PostCategory;
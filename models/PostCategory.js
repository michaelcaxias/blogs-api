const PostCategory = (sequelize) => {
  const PostCategoryTable = sequelize.define('PostCategory', {}, {
    timestamps: false,
  });

  PostCategoryTable.associate = (models) => {
    models.BlogPost.belongsToMany(models.BlogPost, {});
    models.Category.belongsToMany(models.Category, {});
  };

  return PostCategoryTable;
};

module.exports = PostCategory;
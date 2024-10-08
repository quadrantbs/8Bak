'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'UserId' });
      this.belongsTo(models.Meme, { foreignKey: 'MemeId' });
    }
  }

  Comment.init({
    content: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: { msg: "Content cannot be empty" },
      },
    },
  }, {
    sequelize,
    modelName: 'Comment',
  });

  return Comment;
};

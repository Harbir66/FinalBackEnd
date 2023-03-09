'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class collections extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  collections.init(
    {
      contentType: DataTypes.STRING,
      fields: DataTypes.ARRAY(DataTypes.STRING),
      values: DataTypes.ARRAY(DataTypes.JSON),
    },
    {
      sequelize,
      modelName: 'collections',
    }
  );
  return collections;
};

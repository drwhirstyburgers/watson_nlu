'use strict';
module.exports = (sequelize, DataTypes) => {
  var ApiInfo = sequelize.define('ApiInfo', {
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    key: DataTypes.STRING
  }, {});
  ApiInfo.associate = function(models) {
    // associations can be defined here
  };
  return ApiInfo;
};
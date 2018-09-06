const languages = require('../public/languages.json');

module.exports = (sequelize, DataTypes) => {
  const columns = {
    key: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };

  languages.forEach((lang) => {
    columns[lang] = {
      type: DataTypes.STRING,
      allowNull: true,
    };
  });

  return sequelize.define('champ', columns, {
    timestamps: true,
    paranoid: true,
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });
};

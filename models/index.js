const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.js')[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Champ = require('./champ')(sequelize, Sequelize);

// db.User.hasMany(db.Post);
// db.Post.belongsTo(db.User);
// db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
// db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });

// db.User.belongsToMany(db.User, {
//   foreignKey: 'followingId',
//   as: 'Followers',
//   through: 'Follow',
// });

// db.User.belongsToMany(db.User, {
//   foreignKey: 'followerId',
//   as: 'Followings',
//   through: 'Follow',
// });

module.exports = db;

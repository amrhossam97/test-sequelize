const dbConfig = require("../db.config");

const Sequalize = require("sequelize");
const seq = new Sequalize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
  logging:false
});

const db = {};

db.Sequalize = Sequalize;
db.seq = seq;
db.book = require('./book.model')(seq, Sequalize);
db.user = require('./user.model')(seq,Sequalize);
db.sales = require('./sales.model')(seq,Sequalize);

module.exports = db;

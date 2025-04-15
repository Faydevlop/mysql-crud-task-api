const {Sequelize,DataTypes} = require('sequelize')

const dbConfig = require('../config/db.config')

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host:dbConfig.HOST,
        dialect:dbConfig.DIALECT,
        port:dbConfig.PORT
    }
)

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Task  = require('./task.model')(sequelize, DataTypes);

db.sequelize.sync()
.then(()=>{
    console.log('Synced DB');
})
.catch((err)=>{
    console.log("Failed to sync DB: " + err.message);
    
})

module.exports = db;
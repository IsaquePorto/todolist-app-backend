const sequelize = require('sequelize')
const db = require('./db')

const activity = db.define('activity', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: sequelize.STRING,
        allowNull: false,     
    },
    done: {
        type: sequelize.BOOLEAN,
        allowNull: false,     
    }   
})

activity.sync()

module.exports = activity
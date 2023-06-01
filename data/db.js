const sequelize = require('sequelize')

//Schema no DB, usuario, senha
// const conexao = new sequelize("todolist", "root", "Sql1234", {
//     host: 'localhost',
//     dialect: 'mysql'
// })

const conexao = new sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql'
})

conexao.authenticate()
.then(() => {
    console.log("Conexao com o banco de dados realizada com sucesso")
}).catch(() => {
    console.log("Nao conectado")
})

module.exports = conexao
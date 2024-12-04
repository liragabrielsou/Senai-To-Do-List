const mysql = require("mysql");

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'todo_list_senai'
    });

    module.exports = db;
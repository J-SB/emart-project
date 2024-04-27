const mysql = require('mysql2')

class MySQLClient{
    static db;

    static init(){
        this.db = mysql.createPool({
            host: 'localhost',
            user: 'root',
            database: 'emartdb',
            password: 'root',
            connectionLimit: 10,
        });
    }
}

module.exports = MySQLClient

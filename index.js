const express = require('express')
const {login, register} = require('./user_module')
const MySQLClient = require('./dbConnection')
MySQLClient.init()

const app = express()

app.post('api/user/login', login)

app.post('api/user/register', register)

app.listen(port=3000)
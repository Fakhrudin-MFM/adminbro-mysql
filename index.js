const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroSequelize = require('@admin-bro/sequelize')
const sequelize_connect = require('./model/connect')

const express = require('express');
const { User } = require('./model/User');
const { BaseResource } = require('admin-bro');
const app = express()



AdminBro.registerAdapter(AdminBroSequelize)


const adminBro = new AdminBro({
  databases: [sequelize_connect],
  resources: [{User}],
  rootPath: '/admin',
})


const router = AdminBroExpress.buildRouter(adminBro)
app.use(adminBro.options.rootPath, router)

app.listen(8080, () => console.log('AdminBro is under localhost:8080/admin'))
const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroSequelize = require('@admin-bro/sequelize')
const sequelize = require('./model/connect')

const express = require('express');
const { default: User } = require('./model/User');
const { BaseResource } = require('admin-bro');
const app = express()



AdminBro.registerAdapter(AdminBroSequelize)

class MyApiAdapter extends BaseResource {
  
}

const adminBro = new AdminBro({
  resources: [{
    resource: new MyApiAdapter
  }],
  rootPath: '/admin',
})


const router = AdminBroExpress.buildRouter(adminBro)
app.use(adminBro.options.rootPath, router)

app.listen(8080, () => console.log('AdminBro is under localhost:8080/admin'))
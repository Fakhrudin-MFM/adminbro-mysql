const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroSequelize = require('@admin-bro/sequelize')
const sequelize_connect = require('./model/connect')

const express = require('express');
const User = require('./model/User');
const { BaseResource } = require('admin-bro');
const app = express()



AdminBro.registerAdapter(AdminBroSequelize)

sequelize_connect.sync().then(()=> 'success to db')
.catch(()=> 'something error');

const adminBro = new AdminBro({
  databases: [sequelize_connect],
  rootPath: '/admin',
})


const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  authenticate: async (username, password) => {
    const user = await User.findOne({ where: { username: username, password: password } })
    console.log(user)
    if (user) {
        return user
    }
    return false
  },
  cookiePassword: 'some-secret-password-used-to-secure-cookie',
})

app.use(adminBro.options.rootPath, router)



app.listen(8080, () => console.log('AdminBro is under localhost:8080/admin'))
const ctrl=require('../controller/userCtrl')
const express=require('express')
const route=express.Router()

route.post('/register',ctrl.register)
route.post('/login',ctrl.login)
route.post('/logout',ctrl.logout)

module.exports=route;
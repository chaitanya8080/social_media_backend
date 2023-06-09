

const express = require('express');
const router = express.Router();

const {register,login, getAllUsers} = require('../controllers/userController')

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/users').get(getAllUsers)

module.exports=  router;
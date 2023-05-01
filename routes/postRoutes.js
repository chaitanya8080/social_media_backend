

const express = require('express');
const router = express.Router();

const {getAllpost} = require('../controllers/postController')

router.route('/register').post(register)
router.route('/login').post(login)

module.exports=  router;
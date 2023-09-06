const express = require('express');

const router = express.Router();

const Admin = require('../controllers/userAdmin');

router.get('/get-users',Admin.getUserInfo)

router.post('/add-user',Admin.addUserInfo)

router.get('/delete-user/:userId',Admin.deleteUserInfo)

router.get('/edit-user/:userId',Admin.editUserInfo)

module.exports=router;
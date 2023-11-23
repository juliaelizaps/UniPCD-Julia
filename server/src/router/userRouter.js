const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const authController = require('../controller/authController');

router.post('/users', authController.verifyJWT, userController.CreateUser);
router.get('/users',authController.verifyJWT, userController.GetAllUsers);
router.get('/users/:id', authController.verifyJWT, userController.GetUserById);
router.put('/users/:id', authController.verifyJWT, userController.UpdateUser);
router.delete('/users/:id', authController.verifyJWT, userController.DeleteUser);

module.exports = router;
const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');

router.post('/registration', userController.registration);  //регистрация пользователя
router.post('/login', userController.login);         //авторизация пользователя
router.get('/auth', userController.chek);           //для проверки авторизован пользователь или нет

module.exports = router;
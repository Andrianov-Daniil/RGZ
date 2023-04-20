const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/registration', userController.registration);  //регистрация пользователя
router.post('/login', userController.login);                //авторизация пользователя
router.get('/auth', authMiddleware, userController.chek);   //для проверки авторизован пользователь или нет

module.exports = router;
const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/registration', userController.registration);   //регистрация пользователя
router.post('/login', userController.login);                 //авторизация пользователя
router.get('/auth', authMiddleware, userController.check);   //для проверки авторизован пользователь или нет
router.get('/:id', userController.getOne);

module.exports = router;
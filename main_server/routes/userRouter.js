const Router = require('express');
const router = new Router();
// const userController = require('../controllers/userController');
// const authMiddleware = require('../middleware/authMiddleware');

router.post('/registration', );  //регистрация пользователя
router.post('/login',);                //авторизация пользователя
router.get('/auth', (req, res) => {
    res.json({messager: 'hello'})
})
//router.get('/auth', userController.chek);   //для проверки авторизован пользователь или нет

module.exports = router;
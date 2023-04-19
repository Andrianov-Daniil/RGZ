const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models');

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController{
    //регистрация
    async registration (req, res){
        const {email, password, role} = req.body;

        if(!password){
            return next(ApiError.badRequest('Введите пароль!'));
        }
        if(!email){
            return next(ApiError.badRequest('Введите email!'));
        }
        
        const candidate = await User.findOne({where: {email}});
        if (candidate){
            return ApiError.badRequest('Пользователь с таким email уже существует!');
        }
        
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({email, role, password: hashPassword});
        const basket = await Basket.create({userId: user.id});
        const token = generateJwt(user.id, user.email, user.role);
        return res.json(token);
    }

    //логин
    async login (req, res){
        
    }

    //проверка
    async chek (req, res, next){
        const {id} = req.query;
        if (!id){
            return next(ApiError.badRequest('Не введён id!'));
        }
        res.json(id);
    }
}

module.exports = new UserController();
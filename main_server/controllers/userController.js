const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const {User} = require('../models/models');

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController{
    //регистрация
    async registration (req, res, next){
        const {email, password, role, phone} = req.body;

        if(!email){
            return next(ApiError.badRequest('Введите email!'));
        }
        if(!password){
            return next(ApiError.badRequest('Введите пароль!'));
        }
        if(!phone){
            return next(ApiError.badRequest('Введите номер телефона!'));
        }

        const candidate = await User.findOne({where: {email}});
        if (candidate){
            return next(ApiError.badRequest('Пользователь с таким email уже существует!'));
        }
        
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({email, role, phone, password: hashPassword});
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({token});
    }

    //логин
    async login (req, res, next){
        const {email, password} = req.body;
        if(!email){
            return next(ApiError.badRequest('Введите email!'));
        }
        if(!password){
            return next(ApiError.badRequest('Введите пароль!'));
        }
        const user = await User.findOne({where: {email}});
        if(!user){
            return next(ApiError.badRequest('Пользователь с таким email не найден!'));
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if(!comparePassword){
            return next(ApiError.badRequest('Неверный пароль!'));
        }
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({token});
    }

    //проверка авторизован пользователь или нет
    async check (req, res, next){
        const token = generateJwt(req.user.id, req.user.email, req.user.role);
        res.json({token});
    }

    async getOne(req, res){
        const {id} = req.params;
        const user = await User.findOne(
            {
                where: {id}
            }
        )
        return res.json(user.phone);
    }
}

module.exports = new UserController();
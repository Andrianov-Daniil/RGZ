const ApiError = require('../error/ApiError');

class UserController{
    //регистрация
    async registration (req, res){

    }

    //логин
    async login (req, res){
        
    }

    //проверка
    async chek (req, res, next){
        const {id} = req.query;
        if (!id){
            return next(ApiError.badRequest('Не введён id'));
        }
        res.json(id);
    }
}

module.exports = new UserController();
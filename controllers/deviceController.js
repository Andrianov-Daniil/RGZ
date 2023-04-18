const uuid = require('uuid');
const path = require('path');
const {Device} = require('../models/models');
const ApiError = require('../error/ApiError');

class DeviceController{
    //создание
    async create (req, res, next){
        try{
            const { name, proce, brandId, typeId, info} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4 + ".jpg";
            img.mv(path.resolve(__dirname, '..' , 'static', fileName));

            const device = await Device.create({name, price, brand, typeId, img: fileName})

            return res.json(device);
        }
        catch(e){
            next(ApiError.badRequest(e.message));
        }
    }

    //получение
    async getAll (req, res){
        
    }

    //получение 1 
    async getOne(req, res){

    }
}

module.exports = new DeviceController();
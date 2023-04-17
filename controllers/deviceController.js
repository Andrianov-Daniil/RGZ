const uuid = require('uuid');

class DeviceController{
    //создание
    async create (req, res){
        const { name, proce, brandId, typeId, info} = req.body;
        const {img} = req.files;
    }

    //получение
    async getAll (req, res){
        
    }

    //получение 1 
    async getOne(req, res){

    }
}

module.exports = new DeviceController();
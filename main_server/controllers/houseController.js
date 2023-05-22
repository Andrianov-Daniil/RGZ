const uuid = require('uuid');
const path = require('path');
const {House, HouseInfo, Address} = require('../models/models');
const ApiError = require('../error/ApiError');

class HouseController{
    //создание
    async create (req, res, next){
        try{
            let { price, typeId, userId, info, city, street, number, entrance, flat} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4() + ".jpg";
            img.mv(path.resolve(__dirname, '..' , 'static', fileName));
            var house;
            if(entrance && flat){
                house = await House.create({price, typeId, userId, img: fileName});
                let houseId = house.id;
                const address = await Address.create({city, street, number, entrance, flat, houseId});
            }
            //у помещения может не быть подъезда и квартиры (частный дом)
            else if(!entrance && !flat){
                house = await House.create({price, typeId, userId, img: fileName});
                let houseId = house.id;
                const address = await Address.create({city, street, number, houseId});
            }
            //может не быть подъезда, зато есть квартира (частный дом разделённый на 2 части)
            else if (!entrance && flat){
                house = await House.create({price, typeId, userId, img: fileName});
                let houseId = house.id;
                const address = await Address.create({city, street, number, flat, houseId});
            }
            //если указан подъезд и не указана квартира сообщим об ошибке
            else if (entrance && !flat){
                return next(ApiError.badRequest('Укажите номер квартиры'));
            }

            if(info){
                info = JSON.parse(info);
                info.forEach( i => 
                    HouseInfo.create({
                        title: i.title,
                        descrioption: i.descrioption,  
                        deviceId: house.id
                    })
                )
            }

            return res.json(house);
        }
        catch(e){//нужно добавить удаление
            var id = house.id;
            House.destroy({where: {id}})
            next(ApiError.badRequest(e.message));
        }
    }

    //получение
    async getAll (req, res){
        let {typeId, limit, page} = req.query;
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;
        let house;
        if(!typeId){
            house = await House.findAndCountAll({limit, offset});
        }
        else{
            house = await House.findAndCountAll({where:{typeId}, limit, offset});
        }
        return res.json(house);
    }

    //получение 1 
    async getOne(req, res){
        const {id} = req.params;
        const house = await House.findOne(
            {
                where: {id},
                include: [{model: HouseInfo, as: 'info'}]
            }
        )
        return res.json(house);
    }

    async delete(req, res) {
        const {id} = req.body;
        await House.destroy({where: {id}});
        return res.json("Успешное удаление объявления");
    }
}

module.exports = new HouseController();
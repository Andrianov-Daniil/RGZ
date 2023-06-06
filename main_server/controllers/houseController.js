const uuid = require('uuid');
const path = require('path');
const {House, HouseInfo, Address} = require('../models/models');
const ApiError = require('../error/ApiError');
const { Op } = require('sequelize');

class HouseController{
    //создание
    async create (req, res, next){
        try{
            let { price, typeId, userId, square, info, city, street, number, entrance, flat} = req.body;
            const {img} = req.files;
            let fileName = uuid.v4() + ".jpg";
            img.mv(path.resolve(__dirname, '..' , 'static', fileName));
            var house;
            if(entrance && flat){
                house = await House.create({price, typeId, userId, square, img: fileName});
                let houseId = house.id;
                const address = await Address.create({city, street, number, entrance, flat, houseId});
            }
            //у помещения может не быть подъезда и квартиры (частный дом)
            else if(!entrance && !flat){
                house = await House.create({price, typeId, userId, square, img: fileName});
                let houseId = house.id;
                const address = await Address.create({city, street, number, houseId});
            }
            //может не быть подъезда, зато есть квартира (частный дом разделённый на 2 части)
            else if (!entrance && flat){
                house = await House.create({price, typeId, userId, square, img: fileName});
                let houseId = house.id;
                const address = await Address.create({city, street, number, flat, houseId});
            }
            //если указан подъезд и не указана квартира сообщим об ошибке
            else if (entrance && !flat){
                return next(ApiError.badRequest('Укажите номер квартиры'));
            }

            let houseId = house.id;
            if(info){
                info = JSON.parse(info);
                info.forEach( i => 
                    HouseInfo.create({
                        title: i.title,
                        description: i.description,  
                        houseId: houseId
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
        let {typeId, limit, page, city, lowPrice, upPrice} = req.query;
        if (city == ""){
            city = null
        }
        if (lowPrice == ""){
            lowPrice = null
        }
        if (upPrice == ""){
            upPrice = null
        }
        page = page || 1;
        limit = limit || 9;
        let offset = page * limit - limit;
        let house;
        if(!typeId && lowPrice == null && upPrice == null){
            house = await House.findAndCountAll({limit, offset, include: [{model: Address, as: 'add'}]});
        }
        else if(typeId && lowPrice != null && upPrice != null){
            house = await House.findAndCountAll({where:{typeId, price: {[Op.lt]: upPrice, [Op.gt]: lowPrice}}, limit, offset, include: [{model: Address, as: 'add'}]});
        }
        else if(!typeId && lowPrice == null && upPrice != null){
            house = await House.findAndCountAll({where:{price: {[Op.lt]: upPrice}}, limit, offset, include: [{model: Address, as: 'add'}]});
        }
        else if(!typeId && lowPrice != null && upPrice == null){
            house = await House.findAndCountAll({where:{price: {[Op.gt]: lowPrice}}, limit, offset, include: [{model: Address, as: 'add'}]});
        }
        else if(!typeId && lowPrice != null && upPrice != null){
            house = await House.findAndCountAll({where:{price: {[Op.lt]: upPrice, [Op.gt]: lowPrice}}, limit, offset, include: [{model: Address, as: 'add'}]});
        }
        else if(typeId && lowPrice == null && upPrice == null){
            house = await House.findAndCountAll({where:{typeId}, limit, offset, include: [{model: Address, as: 'add'}]});
        }
        else if(typeId && lowPrice == null && upPrice != null){
            house = await House.findAndCountAll({where:{typeId, price: {[Op.lt]: upPrice}}, limit, offset, include: [{model: Address, as: 'add'}]});
        }
        else if(typeId && lowPrice != null && upPrice == null){
            house = await House.findAndCountAll({where:{typeId, price: {[Op.gt]: lowPrice}}, limit, offset, include: [{model: Address, as: 'add'}]});
        }


        if (city != null){
            let count = parseInt(house.count);
            house.rows = house.rows.filter(row => {
                const filteredAdd = row.add.filter(addObj => addObj.city !== city);
                const removedCount = row.add.length - filteredAdd.length;
                count -= removedCount;
                row.add = filteredAdd;
                return filteredAdd.length > 0;
            });
            house.count = count;
        }
        return res.json(house);
    }

    //получение 1 
    async getOne(req, res){
        const {id} = req.params;
        const house = await House.findOne(
            {
                where: {id},
                include: [{model: HouseInfo, as: 'info'}, {model: Address, as: 'add'}],
            }
        )
        return res.json(house);
    }

    //получение адреса 
    // async getOneAdress(req, res){
    //     const {id} = req.params;
    //     const address = await Address.findOne(
    //         {
    //             where: {id},
    //             include: [{model: HouseInfo, as: 'info'}],
    //         }
    //     )
    //     return res.json(house);
    // }

    //Удаление
    
    async delete(req, res) {
        const {id} = req.body;
        await House.destroy({where: {id}});
        return res.json("Успешное удаление объявления");
    }
}

module.exports = new HouseController();
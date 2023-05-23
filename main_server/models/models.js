const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define( 'user',
    {
        id:{
            type: DataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true
            },
        email:{
            type: DataTypes.STRING, 
            unique: true,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING, 
            unique: false,
            allowNull: false
        },
        role:{
            type: DataTypes.STRING,
            defaultValue: 'USER'
        },
        phone:{
            type: DataTypes.STRING,
            allowNull: false
        }
    }
);

const House = sequelize.define('house',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    img: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

const Address = sequelize.define('address',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    city:{
        type: DataTypes.STRING,
        allowNull: false
    },
    street:{
        type: DataTypes.STRING,
        allowNull: false
    },
    number:{//номер дома
        type: DataTypes.INTEGER,
        allowNull: false
    },
    entrance: {//подъезд
        type: DataTypes.INTEGER,
        allowNull: true
    },
    flat:{//квартира
        type: DataTypes.INTEGER,
        allowNull: true
    }
});

const Type = sequelize.define( 'type',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
});

const HouseInfo = sequelize.define( 'house_info',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false
    }
});

User.hasMany(House);
House.belongsTo(User);

House.hasMany(HouseInfo, {as: 'info'});
HouseInfo.belongsTo(House);

House.hasOne(Address, { onDelete: "cascade"});
Address.belongsTo(House);

Type.hasMany(House);
House.belongsTo(Type);

module.exports = {
    User, 
    House,
    Address,
    HouseInfo,
    Type
}
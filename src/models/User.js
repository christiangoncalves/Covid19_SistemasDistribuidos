const { Model,DataTypes } = require('sequelize');

class User extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            lat: DataTypes.STRING,
            long: DataTypes.STRING,
            weight: DataTypes.FLOAT,
        },{
            sequelize
        })
    }
}

module.exports = User;
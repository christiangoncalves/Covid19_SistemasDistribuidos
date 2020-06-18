const { Model,DataTypes } = require('sequelize');

class Place extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            lat: DataTypes.STRING,
            long: DataTypes.STRING,
            address: DataTypes.STRING,
            url: DataTypes.STRING,
            isExamining: DataTypes.BOOLEAN
        },{
            sequelize
        })
    }
}

module.exports = Place;
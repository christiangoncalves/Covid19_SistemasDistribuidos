const Place = require('../models/Place');

module.exports = {
    async index(req, res){
        const place = await Place.findAll();

        return res.json(place);
    },

    async store(req, res){

        const { name, lat, long, address, url, isExamining} = req.body;

        const place = await Place.create({name, lat, long, address, url, isExamining});

        return res.json(place);
    },

    async delete(req, res){
        const {id} = req.body;

        const place = await Place.destroy({
            where: {id}
        })

        return res.json({
            Response: "Place Deleted"
        });
    },

    async update(req, res){
        const { id, name, lat, long, address, url, isExamining} = req.body;

        const place = await Place.update(
            { 
                name, lat, long, address, url, isExamining 
            }, 
            {
                where: {
                    id
                }
            }
        )

        return res.json({
            response: place
        });
    },

};
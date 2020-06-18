const User = require('../models/User');

module.exports = {
    async index(req, res){
        const user = await User.findAll();

        return res.json(user);
    },

    async store(req, res){

        const { name, lat, long, weight} = req.body;

        const user = await User.create({name, lat, long, weight});

        return res.json(user);
    },

    async delete(req, res){
        const {id} = req.body;

        const user = await User.destroy({
            where: {id}
        })

        return res.json({
            Response: "User Deleted"
        });
    },

    async update(req, res){
        const { id, name, lat, long, weight} = req.body;

        const user = await User.update(
            { 
                name, lat, long, weight 
            }, 
            {
                where: {
                    id
                }
            }
        )

        return res.json({
            response: user
        });
    },

    async heatmap(req, res){

        const user = await User.findAll({
            attributes: ['lat', 'long', 'weight']
        });

        return res.json(user);
    }
};
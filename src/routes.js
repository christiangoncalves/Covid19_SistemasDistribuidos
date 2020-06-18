const express = require('express');
const UserController = require('./controllers/UserController');
const PlaceController = require('./controllers/PlaceController');

const routes = express.Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.delete('/users', UserController.delete);
routes.put('/users', UserController.update);
routes.get('/heatmap', UserController.heatmap);

routes.post('/place', PlaceController.store);
routes.get('/place', PlaceController.index);
routes.delete('/place', PlaceController.delete);
routes.put('/place', PlaceController.update);

module.exports = routes;
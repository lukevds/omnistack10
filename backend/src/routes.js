const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');
//atalho para modificar próxima string idêntica: ctrl + d

const routes = Router();

routes.get('/devs', DevController.index); //A rota pode ser a mesma que outra desde que os métodos HTTP sejam diferentes.
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;
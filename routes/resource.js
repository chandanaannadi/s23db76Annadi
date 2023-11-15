var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var pizza_controller = require('../controllers/pizza');
// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
// pizza ROUTES ///
// POST request for creating a pizza.
router.post('/pizzas', pizza_controller.pizza_create_post);
// DELETE request to delete pizza.
router.delete('/pizzas/:id', pizza_controller.pizza_delete);
// PUT request to update pizza.
router.put('/pizzasUpdate/:id', pizza_controller.pizza_update_put);
// GET request for one pizza.
router.get('/pizzas/:id', pizza_controller.pizza_detail);
// GET request for list of all pizza items.
router.get('/pizzas', pizza_controller.pizza_list);
module.exports = router;
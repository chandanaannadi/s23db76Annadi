var express = require('express');
const pizza_controlers= require('../controllers/pizza');
var router = express.Router();
/* GET pizzas */
router.get('/', pizza_controlers.pizza_view_all_Page );
/* GET detail pizza page */
router.get('/detail', pizza_controlers.pizza_view_one_Page);
/* GET create pizza page */
router.get('/create', pizza_controlers.pizza_create_Page);
/* GET create update page */
router.get('/update', pizza_controlers.pizza_update_Page);
/* GET delete costume page */
router.get('/delete', pizza_controlers.pizza_delete_Page);
module.exports = router;

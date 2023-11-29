var express = require('express');
const pizza_controlers= require('../controllers/pizza');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}
/* GET pizzas */
router.get('/', pizza_controlers.pizza_view_all_Page );
/* GET detail pizza page */
router.get('/detail', pizza_controlers.pizza_view_one_Page);
/* GET create pizza page */
router.get('/create', pizza_controlers.pizza_create_Page);
/* GET create update page */
router.get('/update', secured, pizza_controlers.pizza_update_Page);
/* GET delete costume page */
router.get('/delete', pizza_controlers.pizza_delete_Page);
module.exports = router;

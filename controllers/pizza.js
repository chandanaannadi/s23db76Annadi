var Pizza = require('../Models/pizza');
// List of all Pizzas
exports.pizza_list = async function(req, res) {
// List of all pizzas
    try{
    thepizzas = await Pizza.find();
    res.send(thepizzas);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};
// for a specific Pizzan.
exports.pizza_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Pizza detail: ' + req.params.id);
};
// Handle Pizza create on POST.
exports.pizza_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Pizza create POST');
};
// Handle Pizza delete form on DELETE.
exports.pizza_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Pizza delete DELETE ' + req.params.id);
};
// Handle Pizza update form on PUT.
exports.pizza_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Pizza update PUT' + req.params.id);
};

exports.pizza_view_all_Page = async function(req, res) {
    try{
    thepizzas = await Pizza.find();
    res.render('Pizzas', { title: 'pizza Search Results', results: thepizzas });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
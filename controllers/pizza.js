var pizza = require('../models/pizza');
// List of all pizzas
exports.pizza_list = async function (req, res) {
    try {
        thepizza = await pizza.find();
        res.send(thepizza);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific pizza.
exports.pizza_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await pizza.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle pizza create on POST.
exports.pizza_create_post = async function (req, res) {
    console.log(req.body)
    let document = new pizza();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    //{"size":"x-large"; "color":blue; "price":340}
    document.pizza_name = req.body.pizza_name;
    document.pizza_type = req.body.pizza_type;
    document.pizza_price = req.body.pizza_price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle pizza delete form on DELETE.
exports.pizza_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await pizza.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// function(req, res) {
// res.send('NOT IMPLEMENTED: pizza delete DELETE ' + req.params.id);
// };
// Handle pizza update form on PUT.
exports.pizza_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await pizza.findById(req.params.id)
        // Do updates of properties
        if (req.body.pizza_name)
            toUpdate.pizza_name = req.body.pizza_name;
        if (req.body.pizza_name) toUpdate.pizza_type = req.body.pizza_type;
        if (req.body.pizza_name) toUpdate.price = req.body.pizza_price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
};
exports.pizza_view_all_Page = async function (req, res) {
    try {
        thepizza = await pizza.find();
        res.render('pizza', { title: 'pizza Search Results', results: thepizza });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.pizza_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await pizza.findById(req.query.id)
        res.render('pizzaDetail',
            { title: 'pizza Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a pizza.
// No body, no in path parameter, no query.
// Does not need to be async
exports.pizza_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('pizzaCreate', { title: 'Pizza Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a pizza.
// query provides the id
exports.pizza_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await pizza.findById(req.query.id)
    res.render('pizzaupdate', { title: 'pizza Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle a delete one view with id from query
exports.pizza_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await pizza.findById(req.query.id)
        res.render('PizzaDelete', { title: 'pizza Delete', toShow: result });
    }
    catch (err) {
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
const mongoose = require("mongoose")
const pizzaSchema = mongoose.Schema({
pizza_name: String,
pizza_type: String,
pizza_price: Number
});
module.exports = mongoose.model("pizza", pizzaSchema)
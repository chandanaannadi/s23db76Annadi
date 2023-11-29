const { Double } = require("mongodb")
const mongoose = require("mongoose")
const pizzaSchema = mongoose.Schema({
pizza_name: {
    type: String,
    required: true
},
pizza_type: {
    type: String,
    required: true
},
pizza_price: {
    type: Number,
    required: true,
    min: 0,
    max: 500
}
});
module.exports = mongoose.model("pizza", pizzaSchema)
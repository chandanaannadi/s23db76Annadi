const { Double } = require("mongodb")
const mongoose = require("mongoose")
const pizzaSchema = mongoose.Schema({
    pizza_name: {
        type: String,
        required: true
    },
    pizza_type: {
        type: String,
        required: true,
        minlength: 5,
        maxlength:10
    },
    pizza_price: {
        type: Number,
        required: true,
    }
});
module.exports = mongoose.model("pizza", pizzaSchema)
const {Schema} = require('mongoose');

const ordersSchema = new Schema({
    name: String,
    qty: Number,
    price : String,
    mode: String,
});

module.exports = ordersSchema;
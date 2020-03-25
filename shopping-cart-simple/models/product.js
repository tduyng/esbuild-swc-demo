const mongoose = require('mongoose');

const schema = mongoose.Schema({
    imagePath: {type: String, required: true},
    title:{type: String, required: true},
    description:{type:String,required: true},
    price: {type: Number, required: true}
});

module.exports = mongoose.model('product',schema,'product');


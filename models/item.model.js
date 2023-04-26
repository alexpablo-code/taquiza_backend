const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, 'Title of product is required'],
        minlength:[3, 'Title must be at least 3 characters long']
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [5, "Description must be more than 5 characters long"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Enter a valid price, no negative numbers"]
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
}, {timestamps: true});


const Item = mongoose.model('Item', ItemSchema);


module.exports = Item;
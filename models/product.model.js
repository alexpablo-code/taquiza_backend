const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
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
        type: String,
        required: [true, "Price is required"],
        min: [0, "Enter a valid price, no negative numbers"]
    },
    category: {
        type: String,
        required:[true, "Product category is required"],
        minlength: [3, "Category must be more than 3 characters long"]
    }
}, {timestamps: true});


const Product = mongoose.model('Product', ProductSchema);


module.exports = Product;
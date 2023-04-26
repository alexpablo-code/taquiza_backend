const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Category name is required'],
        minlength:[3, 'Category name must be at least 3 charecters long']
    },
    items:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    }]
}, {timestamps:true});

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
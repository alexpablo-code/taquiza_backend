const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,"Menu name is required"],
        minlength:[3, 'Menu name must be at least 3 characters long']
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }]
})

const Menu = mongoose.model('Menu', MenuSchema);

module.exports = Menu;
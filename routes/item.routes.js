const ItemController = require('../controllers/item.controller');

module.exports = app => {
    app.post('/api/additem', ItemController.createNewItem)
    app.get('/api/allitems', ItemController.allItems)
    app.get('/api/allitems/:id', ItemController.oneItem)
    app.put('/api/allitems/update/:id', ItemController.updateItem)
    app.delete('/api/allitems/delete/:id', ItemController.deleteItem)
}
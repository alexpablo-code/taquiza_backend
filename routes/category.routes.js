const CategoryController = require('../controllers/category.controller');

module.exports = app => {
    app.post('/api/addcategory', CategoryController.createNewCategory)
    app.get('/api/allcategories', CategoryController.allCategories)
    app.get('/api/allcategories/:id', CategoryController.oneCategory)
    app.put('/api/allcategories/update/:id', CategoryController.updateCategory)
    app.delete('/api/allcategories/delete/:id', CategoryController.deleteCategory)
}
const MenuController = require('../controllers/menu.controller');

module.exports = app => {
    app.post('/api/addmenu', MenuController.createNewMenu)
    app.get('/api/allmenus', MenuController.allMenus)
    app.get('/api/allmenus/:id', MenuController.oneMenu)
}
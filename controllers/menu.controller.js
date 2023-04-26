const Menu = require('../models/menu.model');

module.exports ={
    createNewMenu: (req, res) => {
        Menu.create(req.body)
            .then(newMenu => {
                res.json({menu: newMenu})
            })
            .catch((err) => res.json(err));
    },
    allMenus: (req, res) => {
        Menu.find()
            .then((menus) => {
                res.json(menus)
            })
            .catch((err) => res.json(err));
    },
    oneMenu:(req,res) => {
        // Menu.findById({_id:req.params.id})
        //     .then((oneMenu) => {
        //         res.json(oneMenu)
        //     })
        //     .catch((err) => {
        //         res.status(500).json(err)
        //     });
        Menu.findById({_id:req.params.id})
            .populate({
                path:'categories',
                populate: {
                    path: 'items'
                }
            })
            .then((oneMenu) => {
                res.json(oneMenu);
            })
            .catch((err) => res.json(err))
    }
}
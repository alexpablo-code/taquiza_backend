const Category = require('../models/category.model');
const Menu = require('../models/menu.model');

module.exports ={
    createNewCategory: async (req, res) => {
        try{
            const menu =  await Menu.findById({_id: req.body.menu_id});
            console.log('found menu', menu);
            if(!menu){
                return res.status(404).json({message: 'Menu not found'})
            }

            const newCategory = await Category.create(req.body);
            console.log("this is resp for create Cat", newCategory)
            menu.categories.push(newCategory);
            await menu.save();

            res.json(newCategory);
        }
        catch(err){
            res.json(err);
        }
    },
    allCategories: (req, res) => {
        Category.find()
        .then((categories) => {
            res.json(categories)
        })
        .catch((err) => res.json(err));
    },
    oneCategory: (req, res) => {
        Category.findById({_id:req.params.id})
        .then((oneCategory) => {
            res.json(oneCategory)
        })
        .catch((err) => res.json(err));
    },
    updateCategory: (req, res) => {
        Category.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
            .then((updatedCategory) => {
                res.json(updatedCategory)
            })
            .catch((err) => {
                res.status(500).json(err)
            });
    },
    deleteCategory:(req,res) => {
        Category.findByIdAndDelete({_id:req.params.id})
            .then((confirmation) => {
                res.json(confirmation)
            })
            .catch((err) => res.json(err));
    }

}
const Item = require('../models/item.model');
const Category = require('../models/category.model');

module.exports ={
    createNewItem: async (req, res) => {
        try{
            const category =  await Category.findById({_id: req.body.category});
            if(!category){
                return res.status(404).json({message: 'category not found'})
            }

            const newItem = await Item.create(req.body);
            category.items.push(newItem);
            await category.save();

            res.json(newItem);
        }
        catch(err){
            res.status(500).json(err);
        }
    },
    allItems: (req, res) => {
        Item.find()
            .then((items) => {
                res.json(items)
            })
            .catch((err) => res.status(err).json(err));
    },
    oneItem: (req, res) => {
        Item.findById({_id:req.params.id})
            .then((oneItem) => {
                res.json(oneItem)
            })
            .catch((err) => res.status(err).json(err));
    },
    updateItem: (req, res) => {
        Item.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
            .then((updatedItem) => {
                res.json(updatedItem)
            })
            .catch((err) => {
                res.status(500).json(err)
            });
    },
    deleteItem:(req,res) => {
        Item.findByIdAndDelete({_id:req.params.id})
            .then((confirmation) => {
                res.json(confirmation)
            })
            .catch((err) => res.status(500).json(err));
    }

}
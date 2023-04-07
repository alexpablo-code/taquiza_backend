const Product = require('../models/product.model');

module.exports = {
    createNewProduct:(req, res) => {
        Product.create(req.body)
            .then(newProduct => {
                res.json({product: newProduct})
            })
            .catch((err) => {
                res.status(500).json(err)
            });
    },
    allProducts:(req,res) => {
        Product.find()
            .then((products) => {
                res.json(products)
            })
            .catch((err) => {
                res.status(500).json(err)
            });
    },
    oneProduct:(req,res) => {
        Product.findById({_id:req.params.id})
            .then((product) => {
                res.json(product)
            })
            .catch((err) => {
                res.status(500).json(err)
            });
    },
    updateProduct:(req,res) => {
        Product.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
            .then((updatedProduct) => {
                res.json(updatedProduct)
            })
            .catch((err) => {
                res.status(500).json(err)
            });
    },
    deleteProduct:(req,res) => {
        Product.findByIdAndDelete({_id:req.params.id})
            .then((confirmation) => {
                res.json(confirmation)
            })
            .catch((err) => res.json(err))
    }
}
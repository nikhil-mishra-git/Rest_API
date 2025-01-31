const { find } = require('lodash');
const productModel = require('../models/product.model')

// Get Product
async function handelGetProducts(req, res){
    try {
        const products = await productModel.find({}).select('-_id');
        if(!products){ return res.status(400).json({message : `Product Not Found`})}
        return res.status(200).json(products);
    } catch (error) {
        console.log("Error Occured ", error);
        return res.status(500).json({ message: 'Internal Server Error', error })
    }
}

async function handelGetProductsByID(req, res){
    try {
        const findId = req.params.id;
        const oneProduct = await productModel.findOne({ productId: findId }).select('-_id');
        if(!oneProduct){ return res.status(400).json({message : `Product Not Found With Id ${findId}`})}
        return res.status(200).json(oneProduct);

    } catch (error) {
        console.log("Error Occured ", error);
        return res.status(500).json({ message: 'Internal Server Error', error })
    }
}

// Create Product
async function handelCreateProducts(req, res){
    try {
        const { productId, productName, productDesc, productPrice, productQty } = req.body;
        const newProduct = new productModel({
            productId,
            productName,
            productDesc,
            productPrice,
            productQty
        })
        const saveProduct = await newProduct.save();
        console.log("Product Added");
        return res.status(201).json({ message: 'Product is Added.' })

    } catch (error) {
        console.log("Error Occured ", error);
        return res.status(500).json({ message: 'Internal Server Error', error })
    }
}

// Update Product
async function handelUpdateProductsById(req, res){
    try {
        const findId = req.params.id;
        const updateProduct = await productModel.findOneAndUpdate({ productId: findId }, req.body, { new: true });
        if(!updateProduct){return res.status(400).json({message : `Product Not Found With Id ${findId}`})}
        console.log("Product Updated");
        return res.status(201).json({ message: 'Product is Updated.' })
    } catch (error) {
        console.log("Error Occured ", error);
        return res.status(500).json({ message: 'Internal Server Error', error })
    }
}

// Delete Product
async function handelDeleteProductsById(req, res){
    try {
        const findId = req.params.id;
        const deleteProduct = await productModel.findOneAndDelete({ productId: findId });
        if(!deleteProduct){ return res.status(400).json({message : `Product Not Found With Id ${findId}`})}
        console.log("Product Deleted");
        return res.status(201).json({ message: 'Product is Deleted.' })
    } catch (error) {
        console.log("Error Occured ", error);
        return res.status(500).json({ message: 'Internal Server Error', error })
    }
}

// Export all Functions to Router
module.exports = {
    handelGetProducts,
    handelGetProductsByID,
    handelCreateProducts,
    handelUpdateProductsById,
    handelDeleteProductsById
}
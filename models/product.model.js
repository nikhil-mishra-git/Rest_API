const { uniq, trim } = require('lodash');
const mongoose = require('mongoose');

const productModel = new mongoose.Schema({
    productId:{
        type:Number,
        unique:true,
        trim:true,
        required:[true,"Product Id Required"]
    },
    productName:{
        type:String,
        trim:true,
        required:[true,"Product Name Required"]
    },
    productDesc:{
        type:String,
        trim:true,
        required:[true,"Product Description Required"]
    },
    productPrice:{
        type:Number,
        trim:true,
        required:[true,"Product Price Required"]
    },
    productQty:{
        type:Number,
        trim:true,
        required:[true,"Product Quntity Required"]
    }
},{timestamps:true});

const itemModel = mongoose.model("itemModel",productModel);
module.exports = itemModel;
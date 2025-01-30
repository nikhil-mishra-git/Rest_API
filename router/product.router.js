const express = require('express');
const router = express.Router();
const {handelGetProducts,
    handelGetProductsByID,
    handelCreateProducts,
    handelUpdateProductsById,
    handelDeleteProductsById} = require('../controller/product.api.controller')


router
    .route("/products")
    .get(handelGetProducts)
    .post(handelCreateProducts);

router
    .route("/products/:id")
    .get(handelGetProductsByID)
    .patch(handelUpdateProductsById)
    .delete(handelDeleteProductsById);
    
// Get Router
// router.get("/products", handelGetProducts);
// router.get("/products/:id", handelGetProductsByID);

// Post Router
// router.post("/products", handelCreateProducts);

// Patch Router
// router.patch("/products/:id", handelUpdateProductsById );

// Delete Router
// router.delete("/products/:id", handelDeleteProductsById);


module.exports = router;

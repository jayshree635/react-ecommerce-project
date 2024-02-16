const router = require('express').Router();

const UserController = require('../../controller/user.controller');

const productController = require('../../controller/product.controller');

router.post('/signUp', UserController.SignUp);

router.post('/login',UserController.loginUser);


//......... add product...

router.post('/add-product',productController.AddProduct)

module.exports = router
const Product = require('../model/product');
const Validator = require('validatorjs');



const AddProduct = async (req, res) => {
    let validation = new Validator(req.body, {
        name: 'required|string|max:50',
        price: 'required|string',
        category: 'required|string',
        company: 'required|string',
    })
    if (validation.fails()) {
        firstMessage = Object.keys(validation.errors.all())[0];
        return RESPONSE.error(res, validation.errors.first(firstMessage))
    }

    try {
        const { name, price, category, company, userId } = req.body;

        const productData = await Product.create({
            name, price, category, company, userId
        });


        const findProduct = await Product.findOne(
            { _id: productData._id },
        );

        return RESPONSE.success(res, 1301, findProduct)
    } catch (error) {
        await trans.rollback()
        console.log(error);
        return RESPONSE.error(res, 9999)
    }
}



module.exports = {
    AddProduct
}
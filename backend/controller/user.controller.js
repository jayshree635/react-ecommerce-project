const Validator = require('validatorjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const bcrypt = require('bcryptjs');

//model
const User = require('../model/user');
const UserSession = require('../model/userSession');


//.........signup...............
const SignUp = async (req, res) => {
    let validation = new Validator(req.body, {
        userName: 'required|string|max:50',
        email: 'required|string|max:50',
        password: 'required|string|max:15|min:8',
    })
    if (validation.fails()) {
        firstMessage = Object.keys(validation.errors.all())[0];
        return RESPONSE.error(res, validation.errors.first(firstMessage))
    }
    try {
        const { userName, email, password } = req.body;

        const ExistEmail = await User.find({ where: { email: email } })
        // console.log(ExistEmail);

        if (ExistEmail.length) {
            return RESPONSE.error(res, 1007)
        }

        const user = await User.create({ userName, email, password, })

        const token = jwt.sign({ email, userName, user_id: user._id }, config.jwt_secret_key, { expiresIn: '1h' });

        const session = await UserSession.create({ user_id: user._id, token })

        return RESPONSE.success(res, 1001, user);
    } catch (error) {
        console.log(error);
        return RESPONSE.error(res, 9999)
    }
}


//.............login............
const loginUser = async (req, res) => {
    let validation = new Validator(req.body, {
        email: 'required',
        password: 'required'
    })
    if (validation.fails()) {
        firstMessage = Object.keys(validation.errors.all())[0];
        return RESPONSE.error(res, validation.errors.first(firstMessage))
    }

    try {
        const authUser = req.user
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return RESPONSE.error(res, 1009);
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return RESPONSE.error(res, 1012);
        }

        return RESPONSE.success(res, 1002, user)
    } catch (error) {
        console.log(error);
        return RESPONSE.error(res, 9999)
    }
}

module.exports = {
    SignUp,
    loginUser
}
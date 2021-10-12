const mongoose = require('mongoose');

const userschema = mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        email: String,
        pwd: String,
        confirmPwd: String,
        role: String
    }
);
const user = mongoose.model('User', userschema);
module.exports = user;

// 'User' tab3a signup .. tnajam tkoun plat wala chaf ....
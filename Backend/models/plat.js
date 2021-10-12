const mongoose = require('mongoose');

const platschema = mongoose.Schema(
    {
        name: String, 
        description: String,
        price: String
        
    }
);
const plat = mongoose.model('Plat', platschema);
module.exports = plat;

// 'plat' tab3a signup .. tnajam tkoun plat wala chaf ....
const mongoose = require('mongoose');

const chefschema = mongoose.Schema(
    {
        name: String, 
        experience: String,
        speciality: String
    }
);
const chef = mongoose.model('Chef', chefschema);
module.exports = chef;

// 'chef' tab3a signup  ....
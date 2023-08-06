const mongoose = require("mongoose");


const citySchema = new mongoose.Schema({
    name: String,
    region: String,
    country: String,

    
    
})

module.exports = mongoose.model('Post', citySchema);



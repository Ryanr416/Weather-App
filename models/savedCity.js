const mongoose = require("mongoose");


const citySchema = new mongoose.Schema({
    name: String,
   

    user :{type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    
})

module.exports = mongoose.model('Post', citySchema);



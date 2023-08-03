const mongoose = require("mongoose");



const weatherSchema = mongoose.schema ({
    cloud: String,
    feelslike_c: String,
    gust_kph: String,
    temp_c: String
})

const citySchmea = new mongoose.Schema({
    name: String,
    region: String,
    country: String,

    weather: [weatherSchema]
})

module.exports = mongoose.model('Post', citySchema);



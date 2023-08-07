const CitiesModel = require ('../models/savedCity')





// const { v4: uuidv4 } = require("uuid");

// const S3 = require('aws-sdk/clients/s3');

// const s3 = new S3();


// const BUCKET_NAME = process.env.BUCKET_NAME;



module.exports = {
    create,
    delete: deleteCity,
    index
}


async function create(req, res) {
    console.log (req.body)

try {
    req.body.user = req.user._id;

    const citiesFromTheDb = await CitiesModel.create(req.body)
    
    
    console.log(citiesFromTheDb, '- from the DB')
    
    return res.status(201).json(citiesFromTheDb)

    

}catch(err) {
    res.send(err)
}

}


 async function deleteCity(req, res){
    console.log(req.params.name)
    const deleteCity = await CitiesModel.findOneAndDelete({name: req.params.name})
     res.status(201).json(deleteCity)
 }




async function index(req, res) {
    try {
        const cities = await Cities.find({}).populate("user").exec();
        res.status(200).json({ cities });
    } catch (err) {}
}

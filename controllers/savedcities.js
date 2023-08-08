const CitiesModel = require ('../models/savedCity')

module.exports = {
    create,
    delete: deleteCity,
    index
}


async function create(req, res) {
   

try {
    req.body.user = req.user._id;

    const citiesFromTheDb = await CitiesModel.create(req.body)
    
    
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

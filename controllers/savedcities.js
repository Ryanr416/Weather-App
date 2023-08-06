const CitiesModel = require ('../models/savedCity')



module.exports = {
    create,
    delete: deleteCities,
    index
}


async function create(req, res) {
    console.log (req.body)

try {
    const citiesFromTheDb = await CitiesModel.findById(req.params.id)

    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    


    citiesFromTheDb.savedcities.push(req.body);

    await citiesFromTheDb.save();

    console.log(citiesFromTheDb);

    res.redirect(`/home/${req.params.id}`);

}catch(err) {
    res.send(err)
}

}


async function deleteCities(req, res){

    const deletecity = await CitiesModel.findOneAndDelete(req.params.id)
    res.redirect('/')
}

async function index(req, res) {
    try {
        const cities = await Post.find({}).populate("user").exec();
        res.status(200).json({ cities });
    } catch (err) {}
}

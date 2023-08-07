const CitiesModel = require ('../models/savedCity')





// const { v4: uuidv4 } = require("uuid");

// const S3 = require('aws-sdk/clients/s3');

// const s3 = new S3();


// const BUCKET_NAME = process.env.BUCKET_NAME;



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
    console.log(req.body, '- from the req')
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

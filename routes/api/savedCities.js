const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();

const savedCityCtrl = require('../../controllers/savedcities')



router.post('/', upload.single('photo'), savedCityCtrl.create)

router.delete('/:name', savedCityCtrl.delete)

router.get('/', savedCityCtrl.index)


module.exports = router
const express = require('express');
const router = express.Router();

const recetaApi = require('./receta');

router.get('/', (req, res, next)=>{
    res.status(200).json({"api":"Version 1."})
});

router.use('/receta', recetaApi);

module.exports = router;
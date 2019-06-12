const express = require('express');
var router = express.Router();

var thingsCollection = [];

var thingsStructure = {
    "id": 0,
    "receta": '',
    "precio": 0,
    "tipo": '',
    "observacion": '',
    "estado": ''
};

thingsCollection.push(
    Object.assign({},thingsStructure, {"id": new Date().getTime(), "receta":"Lassagna", "precio": 250.00, "tipo":"Pasta", "observacion":"Deliciosa comida.", "estado":"Activo"})
);

router.get('/', (req, res, next)=>{
    res.status(200).json(thingsCollection);
}); // get /

router.post('/', (req, res, next)=>{
    var newElement = Object.assign(thingsStructure, req.body, {"id": new Date().getTime()});
    thingsCollection.push(newElement);
    res.status(200).json(newElement);
}); // post /

router.put('/:idElemento', (req, res, next)=>{
    var id = parseInt(req.params.idElemento);
    var update = req.body;
    var modifiedObject = {};
    var originalObject = {};
    thingsCollection = thingsCollection.map((e, i)=>{
        if (e.id === id){
            originalObject = Object.assign({}, e);
            return Object.assign(modifiedObject, e, req.body);
        }
        return e;
    });//map
    res.status(200).json({"o": originalObject, "m": modifiedObject});
}) // put /

module.exports = router;
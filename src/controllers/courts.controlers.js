const {saveCourt, getCourts, dataShow, normaliceData, updateCourt} = require('../services/courts.services');
const Court = require('../models/courts.model');



async function getAllCourts(req, res){                       //Devuelve todas las canchas de futbol en la base de datos
    const courts = await getCourts(Court);                   //Con todos los atributos
    const result = [];
    for (let index = 0; index < courts.length; index++) {
        const merge = await dataShow(courts[index]);        //Realiza un merge entre los datos de las canchas y los datos del  
        result.push(merge);                                 //clima del lugar donde se encuentre registrada
    }
    res.json(result);
};

async function getCourtById(req,res){                 //Filtra por id una sola cancha y realiza un merge entre sus datos
    const {id} = req.params;                          //y los del clima
    const result = await Court.findById(id);
    const data = await normaliceData(result._doc)
    const merge = await dataShow(data);
    res.json(merge);
}

async function newCourt(req,res){                     //Crea una nueva cancha de futbol
    const data = req.body;
    saveCourt(data);
    res.json({"message":"New data uploaded successfully"});
}

async function deleteCourt(req,res){                  //Elimina una cancha de futbol por id
    const{id} = req.params;
    Court.findByIdAndDelete(id, function (err, docs) {
        if (err){
            res.json(err);
        }
        else{
            res.json({"message":"The data was deleted successfully"});
        }
    });
}

async function patchCourt(req,res){                   //actualiza los datos de una cancha por id
    const {id} = req.params;
    const data = req.body;
    try {
        const getData = await updateCourt(id, data);
        res.json({"message":"The data was updated correctly", getData});
    } catch (error) {
        res.json({"error": error});
    }   
}


module.exports = {getAllCourts, getCourtById, newCourt, deleteCourt, patchCourt};

    
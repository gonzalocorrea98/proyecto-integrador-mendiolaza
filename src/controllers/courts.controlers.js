const {saveCourt, getCourts, dataShow, normaliceData, updateCourt} = require('../services/courts.services');
const Court = require('../models/courts.model');



async function getAllCourts(req, res){
    const courts = await getCourts(Court);
    const result = [];
    for (let index = 0; index < courts.length; index++) {
        const merge = await dataShow(courts[index]);
        result.push(merge);
    }
    res.json(result);
};

async function getCourtById(req,res){
    const {id} = req.params;
    const result = await Court.findById(id);
    const data = await normaliceData(result._doc)
    const merge = await dataShow(data);
    res.json(merge);
}

async function newCourt(req,res){
    const data = req.body;
    saveCourt(data);
    res.json({"message":"New data uploaded successfully"});
}

async function deleteCourt(req,res){
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

async function patchCourt(req,res){
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

    
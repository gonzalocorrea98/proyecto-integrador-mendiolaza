const {getCity, getCurrentConditions} = require('../services/cities.services')

async function getCities(req, res){
    const {name} = req.query;
    const data = await getCity(name);
    console.log(data)
    res.json(data);
}


module.exports = getCities;
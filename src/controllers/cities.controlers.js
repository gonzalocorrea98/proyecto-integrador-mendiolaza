const {getCity} = require('../services/cities.services')



async function getCities(req, res){         //Devuelve una ciudad filtrada por nombre
    const {name} = req.query;               //El atributo que nos interesa es el locationId
    const data = await getCity(name);
    console.log(data)
    res.json(data);
}


module.exports = getCities;
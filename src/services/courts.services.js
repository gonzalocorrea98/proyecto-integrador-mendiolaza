const Court = require('../models/courts.model');
const {getCurrentConditions} = require('./cities.services');



async function saveCourt(data){                       //Guarda los datos de la cancha en la base de datos
  const court = new Court(data);
  const saveFile = await court.save()
  return saveFile;
}

async function updateCourt(id, data){                 //Buscar el id para actualizar sus datos
  Court.findByIdAndUpdate(id, data, function (err, docs) {
    if (err){
        throw err;
    }
})
const result = await Court.findById(id);              //Vuelve a buscar el id para devolver sus datos y hace uso de
console.log(result);                                  //la funcion normaliceData para acomodar y filtrar los datos que nos interesan 
const getData = await normaliceData(result);          
console.log(getData);
return getData;
}

async function getCourts(data){                       //Devuelve un array con todos los canchas cargadas
  const courts = await data.find({});  //Trae toda la info de la base de datos que pasemos como parametro
  const element = [];

  for (let index = 0; index < courts.length; index++) {
    const data = courts[index];
    element.push(normaliceData(data)); //Filtra solo los datos que nos interesan
  }
  return element;
}

function normaliceData(data){                         //Acomoda y filtra los datos a nuestro gusto
  return {
    id: data._id,
    name: data.name,
    numberOfCourts: data.numberOfCourts,
    address:{
            city: data.address.city,
            street: data.address.street,
            number: data.address.number
        },
    locationID: data.locationID,
    image: data.image
    }
}

async function dataShow(court){                                    //devuelve un solo elemento con todos los datos juntos
  const locationID = court.locationID;                             //que necesitemos mostrar
        const data = await getCurrentConditions(locationID);
        let suggestion = {"suggestion":"none"};
        const temperature = data.temperature;
        const hasPrecipitation = data.precipitation;  //devuelve un valor boleano si hay indice de precipitacion
        const tempMin = 16;
        const tempMax = 31;
        if(temperature>tempMin && temperature<tempMax && !hasPrecipitation){  //devuelve una segerencia segun los datos del clima
            suggestion = {"suggestion":"Today is a good day to play soccer"};
        }
        else{
            suggestion = {"suggestion":"better stay at home"};
        }
        const merge = { ...court, ...data, ...suggestion};
        return merge;
}
  
module.exports = {saveCourt, getCourts, dataShow, normaliceData, updateCourt};
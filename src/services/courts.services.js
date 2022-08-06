const Court = require('../models/courts.model');
const {getCurrentConditions} = require('./cities.services');

async function saveCourt(data){
  const court = new Court(data);
  const saveFile = await court.save()
  return saveFile;
}

async function updateCourt(id, data){
  Court.findByIdAndUpdate(id, data, function (err, docs) {
    if (err){
        throw err;
    }
})
const result = await Court.findById(id);
console.log(result);
const getData = await normaliceData(result);
console.log(getData);
return getData;
}

async function getCourts(data){
  const courts = await data.find({});
  const element = [];

  for (let index = 0; index < courts.length; index++) {
    const data = courts[index];
    element.push(normaliceData(data));
  }
  return element;
}

function normaliceData(data){
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

async function dataShow(court){
  const locationID = court.locationID;
        const data = await getCurrentConditions(locationID);
        let suggestion = {"suggestion":"none"};
        const temperature = data.temperature;
        const hasPrecipitation = data.precipitation;
        const tempMin = 16;
        const tempMax = 31;
        if(temperature>tempMin && temperature<tempMax && !hasPrecipitation){
            suggestion = {"suggestion":"Today is a good day to play soccer"};
        }
        else{
            suggestion = {"suggestion":"better stay at home"};
        }
        const merge = { ...court, ...data, ...suggestion};
        return merge;
}
  
module.exports = {saveCourt, getCourts, dataShow, normaliceData, updateCourt};
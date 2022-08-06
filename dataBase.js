const mongoose = require('mongoose');

function setUpMongoDB(stringConnection){
  mongoose.connect(stringConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => console.log("connected to MONGO-DB"))
    .catch((err) => {
    console.error(err);
    throw err;
    });
}

module.exports = setUpMongoDB;
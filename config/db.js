const mongoose = require('mongoose');

const Database = mongoose.connect(process.env.MONGO_DB).then(()=>{
    console.log("Database Connected");
}).catch((err)=>{
    console.log("Error to connect Database",err);
})

module.exports = Database
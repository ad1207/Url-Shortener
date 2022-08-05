const mongoose  = require('mongoose')

module.exports = {
    async connect(){
        try{
            mongoose.connect(process.env.MONGO_DB_URL,
            { useNewUrlParser:true, useUnifiedTopology:true},
            () => {
                console.log("Datebase connected")
            })
        }
        catch(err){
            console.log(err)
        }
    }
}
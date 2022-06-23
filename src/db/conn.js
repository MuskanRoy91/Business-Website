const mongoose = require("mongoose")

//creating a database
mongoose.connect("mongodb://localhost:27017/muskandynamic",{
    
    useNewUrlParser:false,
    useUnifiedTopology:false
}).then(() => {
    console.log("connection successful");
}).catch((error) => {
    console.log(error);
})
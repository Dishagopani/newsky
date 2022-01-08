const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://dishipatel:<password>@cluster0.muven.mongodb.net/test").then(() =>{
    console.log("connection successfull");
}).catch((e) => {
    console.log("no connection");
})

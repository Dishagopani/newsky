const express = require("express");
const path = require("path");
const router = require("router");

const db = require("./src/db/conn");
const user = require("./src/models/cntct");
const users = require("./routes/route")


const app = express();
app.set('view engine','hbs');
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(users);




app.listen(3000, () =>{
    console.log("server is started ");
})
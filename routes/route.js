const express = require("express");
const router = new express.Router;
const user = require("../src/models/cntct")

router.get('/',(req,res)=>{
    res.render('index');
}) 

router.get('/contact',(req,res)=>{
    res.render('contact');
})


router.get('/abtus',(req,res)=>{
    res.render('abtus');
})

router.post('/contact', async(req,res) => {
    try{
        const userSchema = new user({
           name:req.body.name,
           phone:req.body.phone,
           email:req.body.email,
           country:req.body.country,
           message:req.body.message 
        })
        console.log("the success part" + userSchema);

        const users = await userSchema.save();
        res.status(201).render("index");
        
    }catch(error){
        res.status(400).send(error);
    }
})

module.exports = router;
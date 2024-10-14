const express = require('express')
const app = express()
const userModel = require('./usermod');
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))


app.get('/create',async (req, res) => 
   {
   let createdusr = await userModel.create({
        name:"siddhi",
        username:"siddhi",
        email:"sidfref@gmail.com"
    })
    res.send(createdusr);
   })
  

   app.get('/update', async (req, res) => {
    try {
        let newusr = await userModel.findOneAndUpdate(
            { username: "sido" },   // Find the document with username 'sido'
            { name: "shekhar" },     // Update the 'name' field to 'shekhar'
            { new: true }            // Return the updated document
        );
        
        res.send(newusr);            // Send the updated user as a response
    } catch (error) {
        res.status(500).send(error); // Handle any errors that occur
    }
});
app.get('/update', async (req, res) => {
    try {
        let newusr = await userModel.findOneAndUpdate(
            { username: "sido" },   // Find the document with username 'sido'
            { name: "shekhar" },     // Update the 'name' field to 'shekhar'
            { new: true }            // Return the updated document
        );
        
        res.send(newusr);            // Send the updated user as a response
    } catch (error) {
        res.status(500).send(error); // Handle any errors that occur
    }
});


    app.get('/read',async (req,res)=>{
        let users = await userModel.find();
        res.send(users);
    })

    app.get('/delete',async (req,res)=>{
        let users = await userModel.findOneAndDelete({username:"siddhi"});
        res.send(users);
    })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
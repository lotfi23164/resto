//import express module
const express = require('express');
const bodyParser = require("body-parser");
const User = require('./models/user');
const Chef = require('./models/chef');
const Users = require('./models/user');
const bcrypt = require('bcrypt');

//create express app
const app= express();
const mongoose = require('mongoose');//importer mongoose
mongoose.connect('mongodb://localhost:27017/restodb', {useNewUrlParser: true, useUnifiedTopology: true});


//securite configuration

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
  });

  
  
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post("/signup", ( req, res)=>{
    bcrypt.hash(req.body.pwd, 10).then((cryptedpwd) =>{
      //traitement logique de signup
      console.log("i am here in signup request", req.body);  
      const user = new User ({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        pwd: cryptedpwd,
        confirmPwd: req.body.confirmPwd ,
        role: res.body.role
      });
        user.save();
      //fonction tab3a l mongoose pour l'enregistrement
      
   
    });
  });

  
  app.post("/login", (req, res) => {
    console.log('login body', req.body);
    User.findOne({email: req.body.email}).then(
      findedUser => {

        if (!findedUser) {
          res.status(200).json({
            message: '0'
          })
        }
        return bcrypt.compare(req.body.pwd, findedUser.pwd )
      }
    ).then(
      data => {
        if (!data) {
          res.status(200).json({
            message: '1'
          })
        }
        User.findOne({email:req.body.email}).then(
          user => {
            userToSend = {
              firstName: user.firstName,
              lastName: user.lastName,
              email:user.email
            }
            res.status(200).json({
              message: '2',
              user: userToSend
            })
          }
        )
      }
    )
  });
  app.post("/addchef", ( req, res)=>{
    
    console.log("i am here in add chef request", req.body)  ;
    const chef = new Chef ({
      experience: req.body.experience,
      name: req.body.name,
      speciality: req.body.speciality
     
  });
    chef.save();

  } );
  app.get('/chefs', (req,res)=> {
    Chef.find((err, docs) =>{
      if (err) {
        console.log('Error');
      } else {
        res.status(200).json({
          chefs:docs
        })
      }
    });
  });
  app.get("/users", (req, res) => {
    User.find((err, docs) => {
      if (err) {
        console.log("Error");
      } else {
        res.status(200).json({
          users: docs,
        });
      }
    });
  });

  app.delete('/chefs/:id', (req,res) => {
    Chef.deleteOne({_id: req.params.id}).then(
      result => {
        if (result) {
          res.status(200).json({
            message: 'Chef deleted successfully'
          })
        }
      }
    )
  });
  
app.get('/chefs/:id',(req,res)=> {
Chef.findOne({_id: req.params.id}).then(result => {
  if (result){
    res.status(200).json({
      chef:result
    })
  }
}
)
});

app.get('/plats/:id',(req,res)=> {
  Plat.findOne({_id: req.params.id}).then(result => {
    if (result){
      res.status(200).json({
        plat:result
      })
    }
  }
  )
  });

app.put("/chefs",(req,res) => {
  chef= new Chef({
    _id:req.body._id,
    name: req.body.name,
    experience: req.body.experience,
    speciality: req.body.speciality
  })
  Chef.updateOne({_id:req.body._id}, chef).then(
    resultat => {
      if (resultat){
        res.status(200).json({
          message: 'update successfully'
        })
      }
    }
  )
});

app.put("/plats",(req,res) => {
  chef= new Plat({
    _id:req.body._id,
    name: req.body.name,
    experience: req.body.experience,
    speciality: req.body.speciality
  })
  Plat.updateOne({_id:req.body._id}, plat).then(
    resultat => {
      if (resultat){
        res.status(200).json({
          message: 'update successfully'
        })
      }
    }
  )
});


//export app
module.exports= app;  



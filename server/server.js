import express from 'express'
import mongoose from 'mongoose'
import dbCards from './dbCards.js'
import  Cards from  './dbCards.js'

//config the app
const app = express()
const port = process.env.PORT || 8001
const connection_url = '' //put url from MongoDB
//config middleware

//config db
mongoose.connect(connection_url,{
    userNewUrlParser: true,
    userCreateIndex: true,
    userUnifiedTopology: true
})

//api endpoints
app.get("/",(req,res) => res.status(200).send("Hello The Web Dev"))
app.post('riding/cards', (req,res)=>{
   const dbCards = req.body
   Cards.create(dbCard, (err, data)=>{
    if(err){
        res.status(500).send(err)
    }
    else{
        res.status(201).send(data)
    }
   })
})

app.get('/riding/cards', (req, res) =>{
    Cards.find((err,data) =>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
})


//Lister
app.listen(port, () => console.log(`Listening on local host: ${port}`))
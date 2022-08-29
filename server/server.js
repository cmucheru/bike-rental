import express from 'express'
import mongoose from 'mongoose'
<<<<<<< HEAD
<<<<<<< HEAD
import Cors from 'cors' //Cors mods need install
=======
import dbCards from './dbCards.js'
import  Cards from  './dbCards.js'
>>>>>>> 13537e9026c5b665e830276bab5eb2f11adfcd9f
=======
import dbCards from './dbCards.js'
import  Cards from  './dbCards.js'
>>>>>>> bceb563 (added imports)

//config the app
const app = express()
const port = process.env.PORT || 8001
<<<<<<< HEAD
<<<<<<< HEAD

//config middleware to parse incoming JSON object from db
app.use(express.json())
app.use(Cors())
=======
=======
>>>>>>> bceb563 (added imports)
const connection_url = '' //put url from MongoDB
//config middleware
>>>>>>> 13537e9026c5b665e830276bab5eb2f11adfcd9f

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
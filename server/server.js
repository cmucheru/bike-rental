import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors' //Cors mods need install

//config the app
const app = express()
const port = process.env.PORT || 8001

//config middleware to parse incoming JSON object from db
app.use(express.json())
app.use(Cors())

//config db

//api endpoints
app.get("/",(req,res) => res.status(200).send("Hello The Web Dev"))


//Lister
app.listen(port, () => console.log(`Listening on local host: ${port}`))
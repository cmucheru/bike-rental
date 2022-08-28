import express from 'express'
import mongoose from 'mongoose'

//config the app
const app = express()
const port = process.env.PORT || 8001

//config middleware

//config db

//api endpoints
app.get("/",(req,res) => res.status(200).send("Hello The Web Dev"))


//Lister
app.listen(port, () => console.log(`Listening on local host: ${port}`))
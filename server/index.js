const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('../db/queries.js')
const port = 3000


const path = require('path');
const LOADER_PATH = path.resolve(__dirname,'/loaderio-5489b4920a3a288e58b9cd8803be04b3.txt');


app.use(express.json())
app.use('/loaderio-5489b4920a3a288e58b9cd8803be04b3.txt', express.static(LOADER_PATH))


app.get('/api/products', db.getAllProducts)
app.get('/api/products/:id/related', db.getRelated)
app.get('/api/products/:id', db.getProduct)
//combination of features
app.get('/api/products/:id/styles', db.getStyles)
//combination of photos/skus


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
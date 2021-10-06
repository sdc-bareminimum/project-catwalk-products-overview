const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('../db/queries.js')
const port = 3000


const path = require('path');
const LOADER_PATH = path.resolve(__dirname,'/loaderio-c09ceb5f960d4664752827e37b8b9368.txt');


app.use(express.json())
app.use('/loaderio-c09ceb5f960d4664752827e37b8b9368.txt', express.static(LOADER_PATH))


app.get('/api/products', db.getAllProducts)
app.get('/api/products/:id/related', db.getRelated)
app.get('/api/products/:id', db.getProduct)
//combination of features
app.get('/api/products/:id/styles', db.getStyles)
//combination of photos/skus


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
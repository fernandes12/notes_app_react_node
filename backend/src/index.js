const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()
require('./config/dbConfig')

app.use(cors()) //To allow other applications to interact with our api
app.use(express.json())
app.use(routes)

app.listen(3333)
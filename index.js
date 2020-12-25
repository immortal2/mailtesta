const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser');
const db = require('./db')
const path = require('path')

const mailRouter = require('./routes/mail-routerr')


const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerDoc = require("./swagger.json");
const quotes = require('./constants/quotes');

const app = express()
const apiPort = 3000
app.use(express.static(path.join(__dirname,'/utils/templates/')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
    cors({
        origin: [
            'http://localhost:3000',
            'http://localhost:8000'
        ],
        credentials: true,
    }))

app.use(cookieParser());
app.use(bodyParser.json())
//app.use(fileUpload());

app.get('/', (req, res) => {
    res.send('What up my man?')
})

app.use('/api', mailRouter)

// for Swagger
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDoc));


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
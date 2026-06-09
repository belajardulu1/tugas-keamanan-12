const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT;
const menuController = require('./menu/menu.controllers')
app.use(express.json())

app.listen(PORT, () => {
    console.log('app berjalan di port', PORT)
})
app.use('/menu', menuController)


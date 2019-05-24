require("dotenv").config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const app = express()

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365
    }
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log(`DB SET!`, db.listTables())
    app.listen(SERVER_PORT, () => {
        console.log(`Magic is happening on ${SERVER_PORT}`)
    })
})


app.get('/api/houses', (req, res) => {
    req.app.get('db')
    .getAllHouses()
    .then(houses => {
        res.status(200).send(houses)
    })
})

app.post('/api/houses', (req, res) => {
    req.app.get('db')
    .addHouse()
    .then(houses => {
        res.status(200).send(houses)
    })
})

app.put('/api/houses/:id', (req, res) => {
    req.app.get('db')
    .updateProperty()
    .then(houses => {
        res.status(200).send(houses)
    })
})

app.delete('/api/houses/:id', (req, res) => {
    req.app.get('db')
    .deleteProperty()
    .then(houses => {
        res.status(200).send(houses)
    })
})
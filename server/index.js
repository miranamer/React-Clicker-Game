const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql')

app.use(cors())
app.use(express.json())

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'clickerdb'
})

app.get("/", (req, res) => {
    const sqlQuery = "INSERT INTO clickernames (Name) VALUES ('miran');"
    db.query(sqlQuery, (err, result) => {
        res.send("hello there!");
    })
})

app.listen(3001, () => {
    console.log("Running...")
})
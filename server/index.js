const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql')

app.use(cors())
app.use(express.json())

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"password",
    database:"clickerdb",
    port:3001
})

app.get('/', (req, res) => {
    const q = "SELECT * FROM clickertable"
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.listen(3002, () => {
    console.log("Running...")
})
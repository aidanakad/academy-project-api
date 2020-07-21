
const express = require('express')
const app = express()
const port =process.env.PORT || 1717
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const defaultData = require('./defaultData')
const adapter = new FileSync('db.json')
const db = low(adapter)
const shortid = require('shortid')
const cors = require('cors')

app.use(cors())

db.defaults(defaultData).write()

app.use(express.json())

app.get('/guides', (req,res) => {
    const guides = db.get('guides')
    res.send(guides)
})

app.get('/guides/:id', (req,res) => {
    const id = req.params.id
    const guide = db.get('guides').find({id}).value()
    if(!guide) return res.status(404).json('this guide is not found')
    res.send(guide)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
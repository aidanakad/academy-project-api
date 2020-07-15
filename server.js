
const express = require('express')
const app = express()
const port = 1717
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

app.post('/add-phone', (req,res)=>{
    if(!req.body.name) return res.status(400).json("name is required")
    if(req.body.name.length < 3 ) return res.status(400).json("name is too short")
    const id = shortid.generate()
    db.get('phones').push({id, ...req.body}).write()
    res.status(200).json('success').end()
})

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

app.delete('/delete-phone/:id', (req,res)=>{
    const id = req.params.id
    const phone = db.get('phones').find({id}).value()
    if(!phone) return res.status(404).json('this phone not found')
    db.get('phones').remove({id}).write()
    res.status(200).json('success delete').end()
})

app.put('/edit-phone/:id', (req,res)=>{
    const id = req.params.id
    const body = req.body
    const phone = db.get('phones').find({id}).value()
    if(!phone) return res.status(404).json('this phone not found')
    db.get('phones').find({id}).assign(body).write()
    res.status(200).json('success edit').end()
})

app.post('/login', (req,res)=>{
    const {username, password} = req.body
    if(!username) return res.status(400).json("username is required")
    if(!password) return res.status(400).json("password is required")
    const user = db.get('users').find({username, password}).value()
    if(!user) return res.status(404).json("login is incorrect")
    res.send({token:user.token, id: username.id, username: user.username})
    // const id = shortid.generate()
    // db.get('phones').push({id, ...req.body}).write()
    // res.status(200).json('success').end()
})

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
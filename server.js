
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
const transporter = require('./config');
const dotenv = require('dotenv');
dotenv.config();

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

app.post('/about-us', (req, res) => {
    try {
      const mailOptions = {
        name: req.body.name,
        from: req.body.email,
        to: process.env.email,
        subject: req.body.subject,
        html: req.body.message
      };
  
      transporter.sendMail(mailOptions, function(err, info) {
        if (err) {
          res.status(500).send({
            success: false,
            message: 'Something went wrong. Try again later'
          });
        } else {
          res.send({
            success: true,
            message: 'Thanks for contacting us. We will get back to you shortly'
          });
        }
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: 'Something went wrong. Try again later'
      });
    }
  })
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
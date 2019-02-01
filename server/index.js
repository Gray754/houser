require('dotenv').config()
const express = require('express')
const {json} = require('body-parser')
const massive = require('massive')
const app = express()
const {getHouse, postHouse, updateHouse, deleteHouse} = require('./controller')

app.use(json())

massive(process.env.CONNECTION_STRING)
.then(dbInstance=>{
    // console.log(dbInstance)
    app.set('db', dbInstance)
})
.catch(err=>{
    console.log(err)
})

app.get('/api/houses', getHouse)
// app.post()
// app.put()
// app.delete()

port = 3001
app.listen(port, console.log(`Listening on port ${port}`))
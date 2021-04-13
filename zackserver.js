const express = require('express');
// const { kMaxLength } = require('node:buffer');
const path = require('path');
​
const app = express();
const PORT = 8080;
​
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
​
​
let tables = []
let waitlist = []
​
​
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
    // res.end("Welcome to the reservation site")
})
​
app.get('/reserve', (req,res) => {
    // res.sendFile(path.join(__dirname, 'reserve.html'))
    res.end("Welcome to the reservation page of this site")
})
​
app.get('/tables', (req,res) => {
     // res.sendFile(path.join(__dirname, 'tables.html'))
    res.end("Welcome to the tables page of this site")
})
​
app.get('/api/tables', (req,res) => {
    res.json(tables)
})
​
app.get('/api/waitlist', (req,res) => {
    res.json(waitlist)
})
​
app.post('/api/tables', (req,res) => {
    let reserveRequest = req.body;
    console.log(reserveRequest)
    if(tables.length < 5){
        tables.push(reserveRequest)
        res.end(JSON.stringify(true))
    } else {
        waitlist.push(reserveRequest)
        res.end(JSON.stringify(false))
    }
})
​
​
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
Collapse







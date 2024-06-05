const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const EmployeeMode1 = require('./models/employee')
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:2701/employee")

app.post('/register',(req,res)=>{
 EmployeeMode1.create(req,body)
 .then(Employee=> res.json(employees))
 .catch(err => res.json(err))
})

app.listen(3001,()=>{
console.log("server is running")
})
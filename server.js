const route=require('./route/userRoute')
const cors=require('cors')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
const express=require('express')
const app=express()

const port=process.env.PORT
const url=process.env.URL
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect(url,(err)=>{
    if(err) throw err;
    console.log("Database connected");
})
app.use('/',route);

app.listen(port,function(){
    console.log("localhost connected at "+port);
})
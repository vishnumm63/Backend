const mongoose=require('mongoose')

const schema={
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    }
}
const collection={
    collection:'users',
    timeStamp:true
}

const User=new mongoose.Schema(schema,collection)

module.exports=mongoose.model('User',User)
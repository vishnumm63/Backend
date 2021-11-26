const User=require('../model/userModel')
const bcrypt=require('bcrypt')
const userCtrl={
    register:async(req,res)=>{
        try {
                const{email,password,name,mobile}=req.body;

                const user=await User.findOne({email})

                if(user){
                    return res.status(400).json({msg:'User already exist'})
                }

                if(password<6){
                    return res.status(400).json({msg:"password must contain atleast 6 character"})
                }


                const passHash=await bcrypt.hash(password,10)

                const newUser=new User({
                    email,password:passHash,mobile,name
                })
                await newUser.save()

                res.json(newUser)
            } 
        catch (error) {
            res.status(500).json({msg:error.message})
            }



    },
    login:async(req,res)=>{
      try {
            const {email,password}=req.body

            const user=await User.findOne({email})
            if(!user){
                return res.status(500).json({msg:"user doesn't exist"})
            }
            const isMatch=await bcrypt.compare(password,user.password)

            if(!isMatch){
                return res.status(500).json({msg:"Incorret password"})
            }
            res.json("Login success")
        } 
        
        catch (error) {
            res.status(500).json({msg:error.message})
        }
    },
    logout:async(req,res)=>{}
}

module.exports=userCtrl;
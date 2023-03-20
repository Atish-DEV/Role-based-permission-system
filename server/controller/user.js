//require user model and jwt dependency
const User=require('../model/users');
const jwt=require('jsonwebtoken');
//controller for createUser
module.exports.createUser=async function(req,res){
    try{
    const user=await User.findOne({email:req.body.email});
   if(!user){
        const user=await User.create(req.body);
        return res.status(200).json({
            message:'User Created'
        })
   }else{
    return res.status(409).json({
        message:'User alredy exist'
    })
   }
}catch(err){
    return res.status(404).json({
        message:'Error Occur'
    });
}
}
//controller for create session
module.exports.createSession=async function(req,res){
    try{
    let user=await User.findOne({email:req.body.email});
        if(!user){
            return res.status(404).json({
                message:'User not found',
            })
        }
        else{
        if(user.password!=req.body.password){
            return res.status(404).json({
                message:'Username/Password is wrong',
            })
        }
        return res.status(200).json({
            message:'Successfull',
            data:{
                token:jwt.sign({id:user._id,role:user.role},'somethingSecret',{expiresIn:100000})
            }
        })
    }
        
    }catch(err){
        return res.json(422,{
            message:'Error Happening in catch'
        });
    }
}
//module for profile page
module.exports.getProfile=async function(req,res){
    if (req.headers && req.headers.authorization) {
        try{
        let authorization = req.headers.authorization.split(' ')[1];
        let decoded=jwt.verify(authorization,'somethingSecret');
         console.log(decoded);
        let userId=decoded.id;
        let user=await User.findById(userId);
        if(user){
            return res.json(200,{
                message:'Ok',
                data:{
                    name:user.name,
                    email:user.email,
                    role:user.role
                }
            });
        }else{
            return res.json(404,{
                message:'Not Ok'
            });
        }
    }catch(err){
        res.send('Unauthorised Entry');
    }
    }else{
        res.send('Unauthorised Entry');
    }
}
//controller for invidiual role'page
module.exports.getPage=async function(req,res){
    if (req.headers && req.headers.authorization) {
        try{
            let authorization = req.headers.authorization.split(' ')[1];
            let decoded=jwt.verify(authorization,'somethingSecret');
            console.log(decoded);
            let userId=decoded.id;
            let user=await User.findById(userId);
            if(user){
                if(user.role==req.params.role){
                    return res.status(200).json({
                        message:'You are Authorised'
                    })
                }else{
                    return res.status(404).json({
                        message:'You are not authorised'
                    })
                }
            }else{
                return res.json(404,{
                    message:'Unauthorised User'
                });
            }
    }catch(err){
        res.send('Unauthorised Entry');
    }
}else{
    res.send('Unauthorised Entry');
}
}
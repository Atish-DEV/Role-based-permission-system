//require express and passport
const express=require('express');
const passport=require('passport');
const router=express.Router();
//require user controller
const userController=require('../controller/user');
//Testing route
router.get('/',function(req,res){
    console.log('Home Page Visit');
    res.status(200).json({
        message:'Home Page Visit'
    });
});
//route and handler for signup
router.post('/signup',userController.createUser);
//route and handler for signin
router.post('/signin',userController.createSession);
//route and handler for profile
router.get('/profile',userController.getProfile);
//route and handler for profile's role page
router.get('/profile/:role',userController.getPage);
module.exports=router;
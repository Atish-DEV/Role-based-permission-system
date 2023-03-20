//require all dependency
const passport=require('passport');
const jwtStategy=require('passport-jwt').Strategy;
const extractJwt=require('passport-jwt').ExtractJwt;
const User=require('../model/users');

//set opts for JWT extraction
const opts={
    jwtFromRequest:extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:'somethingSecret'
}
//set the JWT strategy in action
passport.use(new jwtStategy(opts,function(jwtPayload,done){
    User.findById(jwtPayload._id,function(err,user){
        if(err){
            console.log(err);
            return
        }
        if(user){
            return done(null,user);
        }else{
            return done(null,false);
        }
    })
}));
module.exports=passport;
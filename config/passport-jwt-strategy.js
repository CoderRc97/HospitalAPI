const passport= require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const Doctor = require('../models/doctor');

let opts = {
    jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey:'hospitalAPI',
}
passport.use(new JWTStrategy(opts, async function(jwtPayLoad, done){
    try{
        let doctor=await Doctor.findById(jwtPayLoad._id);
        if(doctor) {
            //if doctor found
            return done(null, doctor);
        }else {
            //if doctor not found
            return done(null, false);
        }
    }
    catch(error){
            console.log('Error in finding user from Passport JWT');
            return done(err);
    }
      
        
        
    }));

module.exports = passport;



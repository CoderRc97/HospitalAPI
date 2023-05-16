const Doctor = require('../models/doctor');
const Patient = require('../models/patient');
const jwt = require('jsonwebtoken');
module.exports.register = async function(req,res){
    try {
        let doctor = await Doctor.findOne({ email: req.body.email }); //checking if doctor alreadr exists
        if (doctor) {
            //if doctor exists
            return res.status(409).json( {
                success: false,
                message: 'Doctor already exists!'
            });
        } else {
            doctor = await Doctor.create(req.body); //creating a new doctor account
            return res.status(201).json({
                success:true,
                message: 'Doctor created successfully!'
            })
        }
    } catch {
        //catching errors
        
        return res.status(500).json( {
            success:false,
            message: 'Internal Server Error'
        })
    }
}

module.exports.doctorLogin = async function(req,res){
   try{
    let doctor = await Doctor.findOne({ email: req.body.email });
    if (!doctor || doctor.password != req.body.password) {
        //if doctor dosen't exist or invalid password
        return res.status(422).json( {
            success:false,
            message: 'Invalid username/password'
        });
    }
    return res.json(200,{
        message : 'Sign in successful',
        data:{
            token:jwt.sign(doctor.toJSON(),'hospitalAPI',{ expiresIn: '7200000' })
        }
    })
   }
   catch(error){
    return res.status(500).json( {
        success:false,
        message: 'Internal Server Error'
    })
   }

}
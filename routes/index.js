const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorcontroller');

console.log("Router Loaded");
router.post('/register',doctorController.register)
router.post('/doctorLogin',doctorController.doctorLogin);
router.use('/patient', require('./patient'));
router.use('/report',require('./report'));
module.exports = router;
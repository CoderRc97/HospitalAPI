const express = require('express');
const passport = require('passport');
const PatientController = require('../controllers/patientcontroller');
const router = express.Router();

router.post('/patientregister', passport.authenticate('jwt', { session: false }),PatientController.patientregister);
router.post('/:id/create_report', passport.authenticate('jwt', { session: false }), PatientController.CreateReport);
router.get('/:id/all_reports', passport.authenticate('jwt', { session: false }), PatientController.AllReports);

module.exports=router;
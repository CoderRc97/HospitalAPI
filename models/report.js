const mongoose = require('mongoose');

const ReportSchema = mongoose.Schema({
    //the doctor who is creating the report
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },

    //the patient whose report is being made
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },

    //status of the report
    status: {
        type: String,
        // enum: ['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit'],
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now()
    }
   
});

const Report = mongoose.model('Report', ReportSchema); //modelling the schema
module.exports = Report;

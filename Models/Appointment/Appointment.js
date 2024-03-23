const Mongoose = require("mongoose");

const Appointment_schema = new Mongoose.Schema({ 
    
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    email:{
        type: String
    },
    gender:{
        type: String
    },
    phone:{
        type: String
    },
    dateOfBirth:{
        type: String
    },
    problem:{
        type: String
    },
    sessionTime:{
        type: String
    },
    sessionDate:{
        type: String
    },
  
    // Doctors_id:{
    //     type: Mongoose.Schema.Types.ObjectId,
    //     ref: 'area'
    //   }
  
});

module.exports = Mongoose.model("Appointment", Appointment_schema);
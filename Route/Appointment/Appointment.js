const Express = require("express");
const MyRouter = Express.Router();

const appointment = require("../../Models/Appointment/Appointment");
const appointmentSchema = require("../../Schema/Appointment/Appointment");


//get All
MyRouter.get("/", async (req, res) => {
    const C = await appointment.find();
    try {
        res.send(C);
    } catch (err) {
        res.send("Error: " + err);
    }
});

// Add New Data
MyRouter.post("/Add", async (req, res) => {
    const NewAppointment = req.body;

    const { error } = appointmentSchema(NewAppointment);
    // if (error) return res.status(400).send(error.details[0].message);

    if (error) {
        res.status(404).send({ message: error.details[0].message });
    }
    else {

        try {
            const UpdateAppointment = await appointment.findOne({ sessionTime: NewAppointment.sessionTime, sessionDate: NewAppointment.sessionDate });
            if (UpdateAppointment) {
                res.status(404).send({ message: "Already booked" });
            }
            let AddAppointment = new appointment(NewAppointment);
            AddAppointment = await AddAppointment.save();
            res.send(AddAppointment);
        } catch (error) {
            console.error(error);
            res.status(500).send({ message: "Internal server error" });
        }
    }
});

// Update Data 
MyRouter.patch("/Update/:id", async (req, res) => {
    const UpdateAppointment = await appointment.findOne({ _id: req.params.id });
    // console.log(UpdateAppointment);
    UpdateAppointment.appointment = req.body.appointment

    try {
        const C = await UpdateAppointment.save();
        res.send(C);
    } catch (err) {
        res.send("Error: " + err);
    }
});

// Delete Data
MyRouter.delete("/Delete/:id", async (req, res) => {
    const deleteAppointment = appointment.findOne({ _id: req.params.id });
    try {
        const C = await deleteAppointment.remove();
        res.send(C);
    } catch (Error) {
        res.send("Error: " + Error);
    }
});

module.exports = MyRouter;

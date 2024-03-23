const Joi = require("joi");

const appointmentSchema = (appointment) => {
  const schema = Joi.object({
    firstName: Joi.string(),
    lastName: Joi.string(),
    email: Joi.string(),
    gender: Joi.string(),
    phone: Joi.string(),
    dateOfBirth: Joi.string(),
    problem: Joi.string(),
    sessionTime: Joi.string(),
    sessionDate: Joi.string(),

  });
  return schema.validate(appointment);
};

module.exports = appointmentSchema;

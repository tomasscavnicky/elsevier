const Patient = require('../models').Patient;
const Appointment = require('../models').Appointment;

module.exports = {
  create(req, res) {
    return Patient
      .create({
        forename: req.body.forename,
        surname: req.body.surname,
        phone_number: req.body.phone_number,
        email: req.body.email
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Patient
      .findAll({
        include: [{
          model: Appointment,
          as: 'appointments',
        }]
      })
      .then(todos => res.status(200).send(todos))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Patient
      .findById(req.params.patientId, {
        include: [{
          model: Appointment,
          as: 'appointments',
        }],
      })
      .then(patient => {
        if (!patient) {
          return res.status(404).send({
            message: 'Patient Not Found',
          });
        }
        return res.status(200).send(patient);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Patient
      .findById(req.params.patientId, {
        include: [{
          model: Appointment,
          as: 'appointments',
        }],
      })
      .then(patient => {
        if (!patient) {
          return res.status(404).send({
            message: 'Patient Not Found',
          });
        }
        return patient
          .update({
            forename: req.body.forename || patient.forename,
            surname: req.body.surname || patient.surname,
            phone_number: req.body.phone_number || patient.phone_number,
            email: req.body.email || patient.email,
          })
          .then(() => res.status(200).send(patient))  // Send back the updated patient.
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return Patient
      .findById(req.params.patientId)
      .then(patient => {
        if (!patient) {
          return res.status(400).send({
            message: 'Patient Not Found',
          });
        }
        return patient
          .destroy()
          .then(() => res.status(200).send({message: 'Patient deleted succesfully.'}))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
};
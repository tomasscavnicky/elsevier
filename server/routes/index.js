const patientsController = require('../controllers').patients;
const appointmentsController = require('../controllers').appointments;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/patients', patientsController.create);
  app.get('/api/patients', patientsController.list);
  app.get('/api/patients/:patientId', patientsController.retrieve);
  app.put('/api/patients/:patientId', patientsController.update)
  app.delete('/api/patients/:patientId', patientsController.destroy)
  
  app.post('/api/:patientId/appointment', appointmentsController.create)
};

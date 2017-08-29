const Appointment = require('../models').Appointment;

module.exports = {
  create(req, res) {
    return Appointment
      .create({
        time: req.body.time,
        patientId: req.params.patientId,
      })
      .then(appointment => res.status(201).send(appointment))
      .catch(error => res.status(400).send(error));
  },
  // update(req, res) {
  //     return TodoItem
  //       .find({
  //           where: {
  //             id: req.params.todoItemId,
  //             todoId: req.params.todoId,
  //           },
  //         })
  //       .then(todoItem => {
  //         if (!todoItem) {
  //           return res.status(404).send({
  //             message: 'TodoItem Not Found',
  //           });
  //         }

  //         return todoItem
  //           .update(req.body, { fields: Object.keys(req.body) })
  //           .then(updatedTodoItem => res.status(200).send(updatedTodoItem))
  //           .catch(error => res.status(400).send(error));
  //       })
  //       .catch(error => res.status(400).send(error));
  //   },
  //   destroy(req, res) {
  //     return TodoItem
  //       .find({
  //           where: {
  //             id: req.params.todoItemId,
  //             todoId: req.params.todoId,
  //           },
  //         })
  //       .then(todoItem => {
  //         if (!todoItem) {
  //           return res.status(404).send({
  //             message: 'TodoItem Not Found',
  //           });
  //         }

  //         return todoItem
  //           .destroy()
  //           .then(() => res.status(204).send())
  //           .catch(error => res.status(400).send(error));
  //       })
  //       .catch(error => res.status(400).send(error));
  //   },
};
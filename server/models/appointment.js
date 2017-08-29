'use strict';
module.exports = function(sequelize, DataTypes) {
  var Appointment = sequelize.define('Appointment', {
    time: DataTypes.DATE,
    length: DataTypes.INTEGER,
    info: DataTypes.STRING,
  });
  
  Appointment.associate = function(models) {
    Appointment.belongsTo(models.Patient, {
      foreignKey: 'patientId',
      onDelete: 'CASCADE'
    });
  };
  return Appointment;
};
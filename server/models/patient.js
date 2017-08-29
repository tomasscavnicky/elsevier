'use strict';
module.exports = function(sequelize, DataTypes) {
  var Patient = sequelize.define('Patient', {
    forename: {
      type: DataTypes.STRING,
      allowNull: false
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
  Patient.associate = function(models) {
    Patient.hasMany(models.Appointment, {
      foreignKey: 'patientId',
      as: 'appointments'
    });
  };
  return Patient;
};
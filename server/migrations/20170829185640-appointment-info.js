'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.addColumn('Appointments',
      'info',
      {
        type: Sequelize.STRING,
        defaultValue: ""
      }
    );
  },
  down: (queryInterface/*, Sequelize*/) => queryInterface.removeColumn('Appointments', 'info')
};

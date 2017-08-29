'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.addColumn('Appointments',
      'length',
      {
        type: Sequelize.INTEGER,
        defaultValue: 60
      }
    );
  },
  down: (queryInterface/*, Sequelize*/) => queryInterface.removeColumn('Appointments', 'length')
};

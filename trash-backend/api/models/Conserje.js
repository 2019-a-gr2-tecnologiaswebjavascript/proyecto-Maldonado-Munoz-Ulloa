/**
 * Conserje.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    cedula_conserje:{
      type: 'string',
      minLength: 10,
      required: true
    },
    nombre_conserje:{
      type: 'string',
      required: true
    },
    apellido_conserje:{
      type: 'string',
      required: true
    },
    arregloAsignacion:{
      collection: 'asignacion',
      via: 'fkConserje'
    },
  },

};


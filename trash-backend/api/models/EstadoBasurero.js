/**
 * EstadoBasurero.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombreEstado: {
      type:'string',
      required:true
    },

    arregloTipoBasureros: {
      collection:'basurero',
      via:'fkEstadoBasurero',
    }
  },

};


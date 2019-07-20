/**
 * Localizacion.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes :{
    nombreLocalizacion:{
      type: 'string',
      required: true
    },
    latitudLocalizacion:{
      type: 'number',
      required: true
    },
    longitudLocalizacion:{
      type: 'number',
      required: true
    },
    arregloBasureros:{
      collection:basurero,
      via:,
    }


  }

};


/**
 * Basurero.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    tagBasurero:{
      type: 'string',
      required: true,
      max: 255
    },
    maxLlenoBasurero:{
      type: 'number',
      required: true
    },
    pisoBasurero:{
      type: 'number',
      required: true,
    },
    ubicacionBasurero:{
      type: 'string',
      required: true
    },
    arregloHistorico:{
      collection: 'historico',
      via: 'fkBasurero'
    },
    arregloAsignacion:{
      collection: 'asignacion',
      via: 'fkAsignacion'
    },
    fkTipoBasura:{
      model: 'tipoBasura',
      required:true
    },
    fkEstadoBasurero:{
      model: 'estadoBasurero',
      required: true
    },
    fkLocalizacion:{
      model: 'localizacion',
      required:true
    }

   
  },

};


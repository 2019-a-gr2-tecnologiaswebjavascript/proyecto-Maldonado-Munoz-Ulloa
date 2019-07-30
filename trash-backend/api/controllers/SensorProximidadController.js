/**
 * SensorProximidadController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const axios = require('axios')
module.exports = {
  
    leerSensor: async (req, res) =>{
        const parametros = req.allParams();
        if(parametros.idSensor){
            const url = ''
            try{
                const respuesta = await axios.post(url, {
                    idSensor: parametros.idSensor
                });
                console.log(respuesta);
                return res.ok({mensaje: 'Ok'});
            }catch(error){
                error
            }
        }
    }

};


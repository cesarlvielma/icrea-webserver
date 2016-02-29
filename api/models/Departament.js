/**
 * Departament.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {


        name: 
        {
            type: 'string',
            required: true
        },

        users: 
        {
            collection: 'user',
            via: 'departament_info'
        },

        director_info: 
        {
            model: 'user',
            required: true
        },

        place_info:
        {
            model: 'place',
            required: true
        }

  }
};


/**
 * Person.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {



        first_name: 
        {
            type: 'string',
            required: true
        },

        last_name: 
        {
            type: 'string',
            required: true
        },

        id_number:
        {
        	type: 'string',
            required: true	
        },
        age:
        {
            type: 'integer',
        },
        gender:
        {
            type: 'string',
        },
        email:
        {
            type: 'string',
            required: true,
            email: true,
        },

        phone:
        {
            type: 'string',
            required: true
        },
        address:
        {
            type: 'string',
        },




  }
};


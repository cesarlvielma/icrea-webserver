/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

        // id: 
        // {
        //     type: 'integer',
        //     autoIncrement: true,
        //     primaryKey: true,    
        //     unique: true
        // },

        person_info: 
        {
            model: 'person',
            required: true
        },

		task_info: 
        {
            model: 'task',
        },

        departament_info: 
        {
            model: 'departament',
        },

        disponibility: 
        {
            type: 'boolean',
            required: true
        },

        visibility: 
        {
            type: 'string',
            required: true,
            defaultsTo : 'default'
        },


  }
};

// 

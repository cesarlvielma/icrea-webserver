/**
 * Task.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {


        flight_info: 
        {
            model: 'flight',
            required: true
        },

        name:
        {
        	type: 'string',
        	required: true
        },

        description:
        {
        	type: 'string',
        	required: true
        },

        state: 
        {
			type: 'string',
			enum: ['planing', 'in_action', 'finished', 'template'],
			defaultsTo: 'template'
        },

        optional: 
        {
            type: 'boolean',
            required: true
        },

        dependent_tasks: {
            collection: 'task'
        },

        departament_info: {
            model: 'departament',
            required: true
        },

        users: {
            collection: 'user',
            via: 'task_info'
        },

        priority: 
        {
            type: 'integer',
            required: true
        },  

        priority: 
        {
            type: 'integer',
            required: true
        },

        start_time: 
        {
            type: 'datetime',
            required: true   
        },

        finish_time: 
        {
            type: 'datetime',
            required: true   
        }

  }
};


/**
 * Flight.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = 
{

    attributes: {
    
        // id: 
        // {
        //     type: 'integer',
        //     autoIncrement: true,
        //     primaryKey: true,    
        //     unique: true
        // },

        name: 
        {
            type: 'string',
            required: true
        },

        description: 
        {
            type: 'string',
        },

        flight_creator_info: 
        {
            model: 'user',
            required: true
        },

        creation_date: 
        {
            type: 'datetime',
        },

        tasks: {
            collection: 'task',
            via: 'flight_info'
        },

        arrival_place_info: 
        {
            model: 'place',
            required: true
        }, 

        departure_place_info: 
        {
            model: 'place',
            required: true
        }, 

        departure_time: 
        {
            type: 'datetime',
            required: true   
        },

        arrival_time: 
        {
            type: 'datetime',
            required: true   
        },

        aircraft_info: 
        {
            model: 'aircraft',
            required: true
        }    

    
  }
};

# icrea-webserver

  1) Person :
    
    Create
      POST localhost:1337/icrea-webserver/person
        first_name 
        last_name 
        id_number
        age
        gender
        email
        phone
        address
          
    Show all persons
      GET localhost:1337/icrea-webserver/person

    Show 1 person
      GET localhost:1337/icrea-webserver/person/id

  2) User :

    Create
      POST localhost:1337/icrea-webserver/user
        person_info: 
		    task_info: 
        departament_info: 
        disponibility: 
        visibility: 


    Show all users
      GET localhost:1337/icrea-webserver/users

    Show 1 user
      GET localhost:1337/icrea-webserver/users/id


  3) Departament :

    Create
      POST localhost:1337/icrea-webserver/departament
        name: 
        users: 
        director_info: 
        place_info:


    Show all departament
      GET localhost:1337/icrea-webserver/departament

    Show 1 departament
      GET localhost:1337/icrea-webserver/departament/id
      
  4) Aircraft :

    Create
      POST localhost:1337/icrea-webserver/aircraft
        identifier


    Show all aircraft
      GET localhost:1337/icrea-webserver/aircraft

    Show 1 aircraft
      GET localhost:1337/icrea-webserver/aircraft/id
      
      
  5) place :

    Create
      POST localhost:1337/icrea-webserver/place
        name:
        departaments: 
        director_info: 

    Show all place
      GET localhost:1337/icrea-webserver/place

    Show 1 place
      GET localhost:1337/icrea-webserver/place/id
      
  6) task :

    Create
      POST localhost:1337/icrea-webserver/task
        flight_info: 
        name:
        description:
        state: 
			      enum: ['planing', 'in_action', 'finished', 'template'],
        optional: 
        departament_info: 
        priority: 
        start_time: 
        finish_time: 


    Show all task
      GET localhost:1337/icrea-webserver/task

    Show 1 task
      GET localhost:1337/icrea-webserver/task/id 
      
  7) flight :

    Create
      POST localhost:1337/icrea-webserver/flight
        name: 
        description: 
        flight_creator_info: 
        creation_date: 
        tasks: {
        arrival_place_info: 
        departure_place_info: 
        departure_time: 
        arrival_time: 
        aircraft_info: 

    Show all flight
      GET localhost:1337/icrea-webserver/flight

    Show 1 flight
      GET localhost:1337/icrea-webserver/flight/id  

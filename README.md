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

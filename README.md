# GuestBook

DataBase ==> Mongodb

BackEnd ==> Node JS 

Frontend ==> React 

/*---------------*/

In Database : 
i use mongodb .. i connect server node js with server mongo...

- install "mongodb" package.

- install"mongoose" package.

- i also use "mongoose-auto-increment" package to make id of each schema autoincrement.

/*--------------*/

In Node JS : 

- i use "Express" package to make local server on port 8080 

- i use "morgan" middleware that return the status of request 

- i make the basic routes in folder Routers to add Auhentication Routers [/login - /register]

- i make model of user to allow me to save data in mongodb 

- in Models i use "joi" package to validate data of user[username - password - email - phone - birthyear].

- i use "encrypt" package to hash password of user before save it in database. 

- i use "gravatar" package to add an avatar to user in registeration.

- i use "body-parser" to parse data that sent from react. 

- i make the same in messages .. i make router for messages [/messages/add - /messages/edit- messages/list -messages/delete - /messages/addreply].. after this i made model of messages .

- i use "POSTMAN" to test backend.

- i use "cors" package to connect with frontend

/*-----------------*/

IN React :

- i make a folder inside myproject called it "client"

- inside the folder i make react application

- i use "Bootstrap CDN"

- i make folder components and add all components inside it 

- i use "react-router-dom" to use the Link

- i use "axios" package to fetch urls of backend to send and receive data.

- i use "jwt-decode" to make session for users.


 /*------------------------------*/

#To Run project

- you must install npm and all packeges in file "package.json"

- open mongodb server using command "mongod" and you may use "Robo3t" to show changes in    database .

- open node server using command "nodemon app.js".

- inside client folder open terminal and run command "npm start" to open server of react.

- react server automatically open url in browser ..Now , The application works.. 

/*-------------------------------*/

That is all "Hadeer Elsaeed" 

# GuestBook

DataBase ==> Mongodb

BackEnd ==> Node JS 

Frontend ==> React 

/*---------------*/

In Database : 
i use mongodb .. i connect server node js with server mongo...

1- install "mongodb" package.

2- install"mongoose" package.

3- i also use "mongoose-auto-increment" package to make id of each schema autoincrement.

/*--------------*/
 In Node JS : 

1- i use "Express" package to make local server on port 8080 

2- i use "morgan" middleware that return the status of request 

3- i make the basic routes in folder Routers to add Auhentication Routers [/login - /register]

4- i make model of user to allow me to save data in mongodb 

5- in Models i use "joi" package to validate data of user[username - password - email - phone - birthyear].

6- i use "encrypt" package to hash password of user before save it in database. 

7- i use "gravatar" package to add an avatar to user in registeration.

8- i use "body-parser" to parse data that sent from react. 

9- i make the same in messages .. i make router for messages [/messages/add - /messages/edit- messages/list -messages/delete - /messages/addreply].. after this i made model of messages .

10- i use "POSTMAN" to test backend.

11- i use "cors" package to connect with frontend

/*-----------------*/

IN React :
1- i make a folder inside myproject called it "client"

2- inside the folder i make react application

3- i use "Bootstrap CDN"

4- i make folder components and add all components inside it 

5- i use "react-router-dom" to use the Link

6- i use "axios" package to fetch urls of backend to send and receive data.

7- i use "jwt-decode" to make session for users.


 /*------------------------------*/
 #To Run project
- you must install npm and all packeges in file "package.json"

1- open mongodb server using command "mongod" and you may use "Robo3t" to show changes in    database .

2- open node server using command "nodemon app.js".

3- inside client folder open terminal and run command "npm start" to open server of react.

4- react server automatically open url in browser ..Now , The application works.. 
/*-------------------------------*/
That is all "Hadeer Elsaeed" 

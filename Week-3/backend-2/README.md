1.Generate package.json
2.create express server//not actually creating http server//it internally contains http server and other features that help us to build the backend
3.install mangoose and connect to mongodb server
rest API----MongoDB native drive->DB Server
rest API-----Mongoose ODM object document mapping tool->DB server
6.actual implementation of backend application
-----Build USER REST API......here resource is user and we perform crud operations
------------create user
-------------read user
-------------read a user by id
-------------update a user by id
-------------delete user by id
7.Create Schema and Model of the Resource(user)
8.Create USER API and define routes

9.refining the routes for robustness
---1.handling unavailaable resources----using return and if statement in the userApp.get---same for userApp.delete

---2.validators during update-------while updatin the user the conditions are not truely matched---use runValidators:true

---3.hashing passwords
bcryptjs module is available in nodejs for this purpose

---4.unique fields


---5.refined version of error handling middleware


there are two types of route
by default the routes are public routes
public route
protected routes

###user authentication(Login)
--submit credentials and get token
req---->public routes(by anyone)
req------>middleware---->protected routed(by authenticated users only)



###cross site resource forging(csrf) access token and refresh token
###css 
we should never store tokens on localStorage or session Storage
because frontend application/browser can easily read that data..
hence local,session and cookie all behave same
if we enable http only in cookie...browser cannot read the data to avoid cross site scripting attacks



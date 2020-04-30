# eat-the-burger
Eating burger app

### About my app
This is a simple logger app that user can input the burgers that they like and devoured them.

This is fairly simple app but shows case the connection between MySQL, Node, Express, Handlebars and a homemade ORM. 

### How this app is built?

The app follow MCV (Model Controller View) 

1. Model: In model section we have

- Database (mySQL)
- connection.js
- orm.js
- burger.js

First, this section creates connection between server and database. Also, it also serve as a model as data must follow when connect with database.

2. Controller contains:

- burgers_controller.js

This is routing and direct api routes using express.

3. View contains:

- main and index handlebars files
- burgers.js

Their role are to take care of front end browser where all html is being display to viewer. They are using jquery and ajax to communication with server and handlebars to generate HTML.

### Heroku Demo
[Eat-Da-Burger](https://nameless-badlands-10287.herokuapp.com/burgers)

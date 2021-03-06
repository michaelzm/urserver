//server started off as todo list server, so dont be confused with weird namegiving

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose')
  Task = require('./api/models/todoListModel')//created model loading here
  Ranking = require('./api/models/rankingModel') //ranking model
  Gamification = require('./api/models/gamificationModel') //gamification Formular model
  Basic = require('./api/models/basicModel') //basic Formular model
  bodyParser = require('body-parser');
  var cors = require('cors')
  app.use(cors())

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongodb:mongodb1@ds243344.mlab.com:43344/heroku_td2jrh07'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route
console.log(routes)


app.listen(port);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + '. This index-site does not provide any data. The stored data can be found either under urserver.herokuapp.com/gamification or urserver.herokuapp.com/basic.'})
});


console.log('RESTful API server started on: ' + port);
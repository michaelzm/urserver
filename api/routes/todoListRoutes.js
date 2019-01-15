'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');
  var ranking = require('../controllers/rankingController');
  var gamification = require('../controllers/gamificationController');

  // todoList Routes
  app.route('/formular')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);

  app.route('/formular/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);


  app.route('/ranking')
  .get(ranking.list_all_tasks)
  .post(ranking.create_a_task);


  app.route('/gamification')
    .get(gamification.list_all_tasks)
    .post(gamification.create_a_task);


  };

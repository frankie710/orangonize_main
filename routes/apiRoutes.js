var db = require("../models");
// var request = require("request");
// var parser = require("xml2json");

module.exports = function (app) {

    app.get("/api/todos", function (req, res) {
        db.Todo.findAll({
        }).then(function (dbTodo) {
            res.json(dbTodo);
        })
    })

    app.get("/api/todos/:id", function(req, res) {
        db.Todo.findOne({
          where: {
            id: req.params.id
          },
        }).then(function(dbTodo) {
          res.json(dbTodo);
        });
      });
    

    app.post("/api/todos", function (req, res) {
        db.Todo.create({
            task: req.body.task,
            completion: false
        }).then(function (dbTodo) {
            res.send(dbTodo);
        });
    });

    app.delete("/api/todos/:id", function(req, res) {
        db.Todo.destroy({
          where: {
            id: req.params.id
          }
        }).then(function(dbTodo) {
          res.json(dbTodo);
        });
      });
    
      app.put("/api/todos", function(req, res) {
        db.Todo.update({
            complete: req.body.complete
        }, {
            where: {
              id: req.body.id
            }
          }).then(function(dbTodo) {
          res.json(dbTodo);
        });
      });

      

};
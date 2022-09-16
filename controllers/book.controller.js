'use strict';
var sql = require('../config/db');
var Book1 = require('../models/book.model');

var mysql = require('mysql');

exports.CreateBook = (req, res) => {
    sql.query('insert into books set ?', req.body, function (err, records, fields) {
    
        if (err) {
            console.log(err)
            res.send({
                status: 500,
                result: 'failure',
                response: 'failed to insert record' + err.code,
                
            })
        }
        else {
            if (records.affectedRows > 0) {
                res.send({
                    status: 200,
                    response: req.body.title + ' added successfully',
                    result: 'success'
                })
            }
            else {
                res.send({
                    status: 500,
                    result: 'failure',
                    response: 'failed to insert record'
                })
            }
        }
    });
    }

    exports.list_all_books = (req, res) => {
        console.log("get all books");
        sql.query('select * from books', function (err, records, fields) {
          if (err) {
              throw err
          } else {
              if (records.length > 0) {
                  res.send({
                      status: 200,
                      result: 'success',
                      response: records
                  })
              } else {
                  res.send({
                      status: 404,
                      result: 'failure',
                      response: 'no Records found'
                  })
              }
          }
      })
      }
    
      exports.updatebook = (req, res) => {
        console.log(req.body);
               sql.query('update books set? where author="' + req.params.author + '"', req.body, function (err, records, fields) {
                 console.log(err);
                 if (err) {
                   res.send({
                     status: 500,
                     result: 'failure',
                     response: 'failed to update record ' + err.code
                   })
                 }
                 else {
                   if (records.affectedRows > 0) {
                     res.send({
                       status: 200,
                       response: req.params.author + ' updated successfully',
                       result: 'success'
                     })
                   }
                   else {
                     res.send({
                       status: 500,
                       result: 'failure',
                       response: 'failed to update record'
                     })
                   }
                 }
     
               })
     }   

     exports.deletebook = (req, res) => {
        sql.query('delete from books where title="' + req.params.title + '"', function (err, records, fields) {
          
          if (!err) {
            res.send({
              status: 200,
              result: 'success',
              response: 'Record deleted'
            })
    
          } else {
            res.send({
              status: 404,
              response: 'Deletion Failed',
              result: 'failure'
            })
          }
        })
      }
      





 

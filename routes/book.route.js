'use strict';

var express = require('express');
var router = express.Router();

module.exports = (app) => {
    
    console.log("loading...book routes...");
    var booksList = require('../controllers/book.controller');

  
    router.post('/insertbook', booksList.CreateBook);
    router.get('/getallbook', booksList.list_all_books);
    router.put('/updatebook/:author', booksList.updatebook);
    router.delete('/deletebook/:title', booksList.deletebook);







    app.use('/api/books', router);
   
    
};
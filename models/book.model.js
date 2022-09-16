//Book OBJECT CONSTRUCTOR
var Book = function (book) {
  this.title=book.title;
  this.author=book.author;
  this.numberPages=book.numberPages;
  this.publisher=book.publisher;
    };

module.exports = Book;
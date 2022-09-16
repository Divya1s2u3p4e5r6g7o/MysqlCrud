
 var chai = require("chai");
 var should = chai.should();
 var expect = chai.expect;
 var server = require("../server");

let chaiHttp = require("chai-http");
chai.use(chaiHttp);


 /**
     * Test the GET route
     */
  describe("GET API", () => {
    it("It should GET all the tasks", (done) => {
        chai.request(server) .get("/api/books/getallbook") .end((err, res) => {
            expect(res).to.have.status(200);
               
            done();
            });
    });
    it("It should NOT GET all the tasks", (done) => {
        chai.request(server)
            .get("/api/booksgetallbook")
            .end((err, res) => {
                res.should.have.status(404);
                res.body.json;
            done();
            });
    });
})
/**
     * Test the POST route
     */

describe("POST API", () => {
    it("It should POST a new Book", (done) => {
      
        chai.request(server)                
           .post("/api/books/insertbook")
           .send({
            title:"Java",
            author:"Matt Frisbie",
            numberPages:"900",
            publisher:"india"
          }
        )
           .end((err, res) => {
               res.should.have.status(200);
          
              
                           
           done();
            });
   });

})


/**
     * Test the PUT route
     */

describe("TEST PUT API", () => {
    it("It should PUT an existing task", (done) => {
        const author = 'balaguruswamy';
        
        chai.request(server)                
            .put("/api/books/updatebook/" + author)
            .send({
                title:"Angular"
                
              })
            .end((err, response) => {
                response.should.have.status(200);
                
            done();
            });
    });
})

/**
     * Test the DElETE route
     */


 describe("TEST DELETE API ", () => {
    it("It should DELETE an existing task", (done) => {
        const title = 'ngular 2 Cookbook';
        chai.request(server)                
            .delete("/api/books/deletebook/" + title)
            .end((err, response) => {
                response.should.have.status(200);
            done();
            });
    });
})


var chai = require("chai");
 var should = chai.should();
 var expect = chai.expect;
 var server = require("../server");
let chaiHttp = require("chai-http");
chai.use(chaiHttp);
/*** Test the POST route*/
 describe("POST API", () => {
    it("It should POST a new Book", (done) => {
      
        chai.request(server)                
           .post("/api/books/insertbook")
           .send({
            title:"Java",
            author:"Balaguruswamy",
            numberPages:"900",
            publisher:"india"  })
           .end((err, res) => {
               res.should.have.status(200);               
                done();
            }); });})
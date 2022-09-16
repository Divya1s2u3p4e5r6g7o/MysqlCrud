
 var chai = require("chai");
 var should = chai.should();
 var expect = chai.expect;
 var server = require("../server");
let chaiHttp = require("chai-http");
chai.use(chaiHttp);
 /*** Test the GET route */
  describe("GET API", () => {
    it("It should GET all the tasks", (done) => {
        chai.request(server) .get("/api/books/getallbook") .end((err, res) => {
            expect(res).to.have.status(200);   
            done();
            });
    });
});
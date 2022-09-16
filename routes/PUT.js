var chai = require("chai");
var should = chai.should();
var expect = chai.expect;
var server = require("../server");
let chaiHttp = require("chai-http");
chai.use(chaiHttp);
/*** Test the PUT route*/
describe("TEST PUT API", () => {
    it("It should PUT an existing Book", (done) => {
        const author = 'balaguruswamy';
          chai.request(server)                
            .put("/api/books/updatebook/" + author)
            .send({
                title:"C"
                })
            .end((err, response) => {
                response.should.have.status(200);
                 done();
            }); });})
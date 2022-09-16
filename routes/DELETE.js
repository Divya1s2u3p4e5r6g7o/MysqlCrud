var chai = require("chai");
var should = chai.should();
var expect = chai.expect;
var server = require("../server");

let chaiHttp = require("chai-http");
chai.use(chaiHttp);

describe("TEST DELETE API ", () => {
    it("It should DELETE an existing Book", (done) => {
        const title = 'C';
        chai.request(server)                
            .delete("/api/books/deletebook/" + title)
            .end((err, response) => {
                response.should.have.status(200);
            done();
            });
    });
})
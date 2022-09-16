var assert = require('assert');

describe('Mathematical Operations - Test Suite', function(){
    var a = 10;
    var b = 10;

  it.only('Addition of two numbers', function(done){
    var c = a+b;
    assert.equal(c,20);
    done();
});
})
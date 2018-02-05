var flay = require('../index'),
    flay = flay.flay;

var sinon = require('sinon');
var assert = require('assert');

var anObject = [
    {
        "_id": "5a782d22d771d9ca54640427",
        "index": 0,
        "guid": "b3d96e8d-6343-4278-bac1-2ca0de93d789",
        "isActive": false,
        "balance": "$2,002.87",
        "picture": "http://placehold.it/32x32",
        "age": 27,
        "eyeColor": "brown",
        "name": "Hood Dillard",
        "gender": "male",
        "company": "KIDGREASE",
        "email": "hooddillard@kidgrease.com",
        "phone": "+1 (992) 563-2831",
        "address": "355 Crawford Avenue, Ribera, New Mexico, 7728",
        "about": "Incididunt laborum esse velit eu tempor sint. Velit nulla sint aliqua sint officia ipsum. Aliquip est irure duis incididunt consequat mollit reprehenderit excepteur occaecat duis. Proident commodo proident in Lorem excepteur amet incididunt. Cupidatat culpa est est officia labore culpa dolor fugiat quis eiusmod tempor sunt eu ullamco. Nulla proident ad dolor deserunt incididunt fugiat eiusmod nulla excepteur esse nisi in. Cupidatat consectetur ea velit ea veniam magna pariatur.\r\n",
        "registered": "2016-02-18T05:06:48 -01:00",
        "latitude": 27.648908,
        "longitude": 57.062805
    }
];

var aString = 'Incididunt laborum esse velit eu tempor sint.';

var aNumber = 123;

var aBoolean = true;

describe('#flay', function() {
    it('logs the object content', function() {
        var spy = sinon.spy(console, 'log');
        flay(anObject);
        assert(spy.calledWith(JSON.stringify(anObject)));
        spy.restore();
    });

    it('logs string from variable', function() {
        var spy = sinon.spy(console, 'log');
        flay(aString);
        assert(spy.calledWith(aString));
        spy.restore();
    });

    it('logs number from variable', function() {
        var spy = sinon.spy(console, 'log');
        flay(aNumber);
        assert(spy.calledWith(aNumber));
        spy.restore();
    });

    it('logs boolean from variable', function() {
        var spy = sinon.spy(console, 'log');
        flay(aBoolean);
        assert(spy.calledWith(aBoolean));
        spy.restore();
    });

    it('logs data directly', function() {
        var spy = sinon.spy(console, 'log');
        flay('log me');
        assert(spy.calledWith('log me'));
        spy.restore();
    });

    it('logs multiple', function() {
        var spy = sinon.spy(console, 'log');
        flay('log me: ' + aString);
        assert(spy.calledWith('log me: ' + aString));
        spy.restore();
    });

    it('logs error if no parameter is provided', function() {
        var spy = sinon.spy(console, 'log');
        flay();
        assert(spy.calledWith('Error, no parameter provided.'));
        spy.restore();
    });
});

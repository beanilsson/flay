# flay

Type less, log more.
Tired of typing `console.log(JSON.stringify(anObject));`? Lo and behold, here is flay!

## Installation
`npm install flay --save`

## Usage
`var flay = requrie('flay'),
flay = flay.flay;`

```javascript
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
```

`flay(anObject);`

## Tests
`npm test`

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release

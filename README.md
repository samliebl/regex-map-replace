# regex-map-replace #

Run a text string through an array of individual match-replace regular expressions.

## Overview ##

This is a simple npm module built to clean up text strings. It's a single function that takes two parameters: `str` and `map`. `str` is a string of text. `map` is an array of objects, each with two properties: `match` and `replace`. These two properties are a dictionary, with `match` being the actual regular expression for your desired matching substring; `replace` being a string you want to replace it with.

## Installation ##

```sh
$ npm install regex-map-replace
```

## Example ##

```js
var regexMapReplace = require('regex-map-replace');

var map = [{
    match: /Lorum/,
    replace: 'Lorem'
},{
    match: /doler/,
    replace: 'dolor'
},{
    match: /amit/,
    replace: 'amet'
}];

var test = regexMapReplace('Lorum ipsum doler sit amit.', map);

console.log(test);
// Expected result: 'Lorem ipsum dolor sit amet.'
```
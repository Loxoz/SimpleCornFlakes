# SimpleCornFlakes

Create random keys/ids for each user/objects... without duplicated keys/ids like discord do

[![Build Status](https://travis-ci.com/Loxoz/SimpleCornFlakes.svg?branch=master)](https://travis-ci.com/Loxoz/SimpleCornFlakes)

### Import:
##### node.js:
```javascript
const CornFlake = require("./libs/SimpleCornFlakes.js");
/* or (from npm) */
const CornFlake = require("simplecornflakes");
```
#### public packages: [npm](https://www.npmjs.com/package/simplecornflakes) or [github](https://www.github.com/Loxoz/SimpleCornFlakes)

### Example & Tutorial:
```javascript
/* 
 * This object is not required by default, but the goal of SimpleCornFlakes
 * is to create unique keys/IDs for each users,
 * so we create an object for the users:
 */
var users = {};

/*
 * Create a new CornFlake:
 * syntax: ({type} name = default value)
 *  SimpleCornFlakes(
 *   {Array,Object}} keysarray = [],
 *   {Integer} keySize = 16,
 *   {Array,String} chars = this.defaultChars
 *  )
 */
var userID = CornFlake(Object.keys(users), 16);
/* or */
var userID = CornFlake(users, 16);

/* Using custom chars: */
var userIDtwo = CornFlake([], 4, "ABCD");
/* -> Will generate a key of 4 chars only containing the chars "A" "B" "C" or "D" */

/* Then, we can do anything with it, like storing data and stuff: */
users[userID] = {
    some: "data",
    name: "guest"
}

/* This is easy as that! */
```

> #### Hope you ❤️Enjoy my work, Leave a ⭐️Star if you found it useful to support me

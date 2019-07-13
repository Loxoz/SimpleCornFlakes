# SimpleCornFlakes

[![Build Status](https://travis-ci.com/Loxoz/SimpleCornFlakes.svg?branch=master)](https://travis-ci.com/Loxoz/SimpleCornFlakes)

Create random keys/ids for each user/objects... without duplicated keys/ids like discord do

### Import:
##### node.js:
```javascript
const CornFlake = require("./libs/SimpleCornFlakes.js");
/* or (from npm) */
const CornFlake = require("simplecornflakes");
```
([npm](https://www.npmjs.com/) import for node.js not avalible for the moment)

### Examples & tutorial:
```javascript
// This is not required by default, but it's the goal of SimpleCornFlakes to create unique Ids for each users,
// so we create an object for the users:
var users = {};

// Create a new CornFlake:
// SimpleCornFlakes(array[of cornflakes] = [], idCharsSize = 16)
var userId = CornFlake(Object.keys(users), 16); // We use 'Object.keys' to create an array from an object

// Then we can do anything with it, like storing data and stuff:
users[userId] = {
  some: "data",
  name: "guest"
}

// This is easy as that!
```

> #### Hope you'll enjoy my work ❤️ leave a ⭐️ if you found it useful to support me

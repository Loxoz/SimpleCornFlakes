# SimpleCornFlakes

Helps creating unique keys/ids for users or else, inspired by discord cornflakes

[![Build Status](https://travis-ci.com/Loxoz/SimpleCornFlakes.svg?branch=master)](https://travis-ci.com/Loxoz/SimpleCornFlakes)
[![NPM version](https://img.shields.io/npm/v/simplecornflakes.svg)](https://npmjs.org/package/simplecornflakes)

### Import:
```javascript
const { CornFlake } = require('simplecornflakes');
/* or */
import { CornFlake } from 'simplecornflakes'
```
```html
<script src="https://unpkg.com/simplecornflakes@latest"></script>
<!-- minified -->
<script src="https://unpkg.com/simplecornflakes@latest/dist/SimpleCornFlakes.min"></script>
<!-- or with jsdelivr -->
<script src="https://cdn.jsdelivr.net/npm/simplecornflakes@latest"></script>
<!-- warn: those builds uses es modules -->
```

### Usage

```js
CornFlake(options: CornFlakeOptions): string
```
see [Options](#Options) section for options.

```js
/* 
 * Creating an object to store already existing users,
 * this is completely optional and is here for the purpose of this example,
 * can be also any type of database response.
 */
var users = {};

function createUser(name, data) {
    /* 
     * creating a new id for the user with a length of 42
     * taking care of existing users
     */
    let id = CornFlake({ keys: Object.keys(users), keysize: 42 });
    /* or directly */
    id = CornFlake({ keys: users, keysize: 42 });
    /*
     * the users object will automatically converted from its keys
     * to an Array, same as doing Object.keys(users) as seen above
     */
    users[id] = {
        name,
        data,
        extra: "info"
    }
}

createUser("guest", { some: "data" });
```
```js
/** Using custom chars **/
let other_id = CornFlake({ chars: ["A", "B", "C", "D"], keysize: 4 });
/* or directly */
other_id = CornFlake({ chars: "ABCD", keysize: 4 });
/* Will generate a key of 4 characters only containing
 * "A", "B", "C" and "D"
 */
```
```js
/** Using keysize as function **/
let min_size = 8;
let max_size = 16;
let random__key = CornFlake({
    keysize: () => min_size + Math.floor(Math.random() * (max_size - min_size) )
});
/*
 * Will generate a key with a random size
 * between 8 to 16
 */
```
```js
/** Using the filter option **/
let filtered_id = CornFlake({
    chars: "abcz",
    filter: (key) => !(key.indexOf("z") >= 0)
});
/*
 * Will generate a key that cannot contain
 * the character "z" given in the chars
 */
```

**Note:** examples were tested, see tests for those example [here](https://github.com/Loxoz/SimpleCornFlakes/tree/master/test/examples)

## Options

- `keys` (default: `undefined`) — `Array<string>` or `Object<string, any>` — existing keys object/array

- `chars` (default: see `SimpleCornFlakes.defaultOptions.chars`) — `Array<string>` or `string` — characters used to generate the key

- `keysize` (default: `16`) — `number` or `function(key: string): number` — output keysize

- `filter` (default: `undefined`) — filter function for each key, will not pass the current key if it returns false

see files in `test/` [here on github](https://github.com/Loxoz/SimpleCornFlakes/tree/master/test) for more usecases.

# Contributing

see [CONTRIBUTING.md](https://github.com/Loxoz/SimpleCornFlakes/tree/master/CONTRIBUTING.md)

## Issues

Please open an issue on [Github Issues](https://github.com/Loxoz/SimpleCornFlakes/issues), or consider contributing to the project.

## License

[MIT licensed](http://opensource.org/licenses/MIT).

> Give me a ⭐️ Star on [github](https://github.com/Loxoz/SimpleCornFlakes) ☕

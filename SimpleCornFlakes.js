var preChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function genkey(keysize = 16, chars = preChars) {
    var key = '';
    for (i_ = 0; i_ < keysize; i_ ++) {
        key += chars[Math.floor(Math.random() * chars.length)];
    }
    return key;
}

/**
 * Create new CornFlake (random key/id)
 *
 *  Examples:
 * 
 *     CornFlake([], 16);
 * 
 * @param {object} [keysarray] Array or Object of the existing keys
 * @param {number} [keysize] Size/Length of the key
 * @param {object} [chars] Array or String of chars to use to generate the key
 * @return {String} Generated key string
 */
var scf = (keysarray = [], keysize = 16, chars = preChars) => {
    if (typeof keysarray != "object") {
        throw new Error("provided keysarray is not an Array neither an Object");
    }
    keysize = parseInt(keysize)
    if (isNaN(keysize)) {
        throw new Error("provided keysize is not an Integer");
    }
    if (!Array.isArray(keysarray)) {
        keysarray = Object.keys(keysarray);
    }
    if (typeof chars == "string") {
        chars = chars.split("");
    }
    if (!Array.isArray(chars)) {
        throw new Error("provided chars is not an Array neither a String");
    }

    var cornflake = genkey(keysize, chars);
    if (keysarray != undefined) {
        while (keysarray.hasOwnProperty(cornflake)) {
            cornflake = genkey(keysize, chars);
        }
    }
    return cornflake;
};

module.exports = scf;
module.exports.defaultChars = preChars;

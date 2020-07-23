/**
 * @typedef {Object} CornFlakeOptions
 * @property {Object<string, any>|Array<string>} [keys] existing keys object/array
 * @property {Array<string>|string|function} [chars] characters used to generate the key
 * @property {number|function() => number} [keysize] output keysize
 * @property {function(string) => boolean} [filter] filter function (false = not passing)
 */
const defaultOptions = {
    chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    keysize: 16
}

/**
 * Creates a new CornFlake
 * @param {CornFlakeOptions} options
 * @returns {String} generated key
 */
function CornFlake(options) {
    /* options check */
    /** @type {CornFlakeOptions} */
    let opts = Object.assign(Object.create(defaultOptions), options);
    /* keys */
    if (opts.keys != null && typeof opts.keys != 'object') throw new Error("options - keys is neither an Array or an Object");
    if (opts.keys != null && !Array.isArray(opts.keys)) opts.keys = Object.keys(opts.keys);
    /* chars */
    if (typeof opts.chars == 'string') opts.chars = opts.chars.split('');
    if (!Array.isArray(opts.chars)) throw new Error("options - chars is neither an Array or a string");
    /* keysize */
    if (['number', 'function'].indexOf(typeof opts.keysize) < 0) throw new Error("options - keysize is neither a number or a function");
    /* filter */
    if (opts.filter != null && typeof opts.filter != 'function') throw new Error("options - filter is not a function");

    /* generate */
    function gen() {
        let keysize = typeof opts.keysize == 'function' ? opts.keysize() : opts.keysize;
        if (typeof keysize != 'number') throw new Error("options - keysize (as function) did not return a number");
        return genKey(opts.chars, keysize);
    }

    let cornflake = gen();
    const hasKeys = (opts.keys != null && opts.keys.length > 0);
    const hasFilter = (opts.filter != null);
    if (hasKeys || hasFilter) {
        function check(cornflake) {
            let keysCheck = hasKeys ? (opts.keys.indexOf(cornflake) >= 0) : false;
            let filterCheck = hasFilter ? (opts.filter(cornflake) == false) : false;
            return keysCheck || filterCheck;
        }

        while (check(cornflake)) {
            cornflake = gen();
        }
    }
    return cornflake;
}

/**
 * @param {Array<string>} chars
 * @param {number} size
 * @private
 */
function genKey(chars, size) {
    let key = '';
    for (let i = 0; i < size; i ++) {
        key += chars[Math.floor(Math.random() * chars.length)];
    }
    return key;
}

module.exports.CornFlake = CornFlake;
module.exports.defaultOptions = defaultOptions;

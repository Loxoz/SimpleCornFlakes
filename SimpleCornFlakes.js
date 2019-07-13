var preChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('');

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
 * @param {object} existing_arr
 * @param {number} keysize
 * @param {object} preChars
 * @return {string}
 */
var scf = (existing_arr = [], keysize = 16, chars = preChars) => {
    var cornflake = genkey(keysize, chars);
    if (existing_arr != undefined) {
        while (existing_arr.hasOwnProperty(cornflake)) {
            cornflake = genkey(keysize, chars);
        }
    }
    return cornflake;
};

module.exports = scf;
module.exports.defaultChars = preChars;

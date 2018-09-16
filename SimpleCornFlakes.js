var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('');

function genkey(keysize = 16) {
    var key = '';
    for (i_ = 0; i_ < keysize; i_ ++) {
        key += chars[Math.floor(Math.random() * chars.length)];
    }
    return key;
}

var scf = (existing_arr = [], keysize = 16) => {
    var cornflake = genkey(keysize);
    if (existing_arr != undefined) {
        while (existing_arr.hasOwnProperty(cornflake)) {
            cornflake = genkey(keysize);
        }
    }
    return cornflake;
};

module.exports = scf;

/**
 * Checks if an array only contains elements of another array
 * @param {Array<string>|string} array input array/stringarray to check
 * @param {Array<string>|string} expected expected array/stringarray in the input array
 * @returns {boolean}
 */
function containOnly(array = [], expected = []) {
    if (typeof array == "string") array = array.split("");
    if (!Array.isArray(array)) throw new Error("provided array is not an Array or String");
    
    if (typeof expected == "string") expected = expected.split("");
    if (!Array.isArray(expected)) throw new Error("provided expected is not an Array or String");

    for (let v of array) {
        if (expected.indexOf(v) < 0) return false;
    }
    return true;
}

module.exports = containOnly;

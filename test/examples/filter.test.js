const { CornFlake } = require('../..');
const containOnly = require('../utils/containOnly');

function runCode() {
    /** Using the filter option **/
    let filtered_id = CornFlake({
        chars: "abcz",
        filter: (key) => !(key.indexOf("z") >= 0)
    });
    /*
     * Will generate a key that cannot contain
     * the character "z" given in the chars
     */

    /* example test export */
    return { filtered_id };
}

describe("SimpleCornFlakes (example: user)", () => {
    it(`should not throw`, () => {
        expect(runCode).not.toThrow();
    });
    it(`should not contain a "z" character`, () => {
        for (let i = 0; i < 5; i++) {
            expect(runCode().filtered_id).not.toContain("z")
        }
    });
});
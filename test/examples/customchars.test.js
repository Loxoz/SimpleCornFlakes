const { CornFlake } = require('../..');
const containOnly = require('../utils/containOnly');

function runCode() {
    /** Using custom chars **/
    let other_id = CornFlake({ chars: ["A", "B", "C", "D"], keysize: 4 });
    /* or directly */
    other_id = CornFlake({ chars: "ABCD", keysize: 4 });
    /* Will generate a key of 4 characters only containing
     * "A", "B", "C" and "D"
     */

    /* example test export */
    return { other_id };
}

describe("SimpleCornFlakes (example: user)", () => {
    it(`should not throw`, () => {
        expect(runCode).not.toThrow();
    });
    it(`should generate a key that only contains "ABCD"`, () => {
        for (let i = 0; i < 10; i++) {
            expect( containOnly(runCode().other_id, "ABCD") ).toBeTruthy();
        }
    });
});
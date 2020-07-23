const { CornFlake } = require('../..');

function runCode() {
    /** using keysize as function **/
    let min_size = 8;
    let max_size = 16;
    let random__key = CornFlake({
        keysize: () => min_size + Math.floor(Math.random() * (max_size - min_size) )
    });
    /*
     * Will generate a key with a random size
     * between 8 to 16
     */

    /* example test export */
    return { random__key };
}

describe("SimpleCornFlakes (example: user)", () => {
    it(`should not throw`, () => {
        expect(runCode).not.toThrow();
    });
    it(`should generate a key with a length between 8 to 16`, () => {
        for (let i = 0; i < 10; i++) {
            let { random__key } = runCode();
            expect(random__key.length >= 8 && random__key.length <= 16).toBeTruthy();
        }
    });
});
const { CornFlake, defaultOptions } = require('../dist/SimpleCornFlakes');
const containOnly = require('./utils/containOnly');

describe(`SimpleCornFlakes (source)`, () => {
    it(`approve test util function: containOnly`, () => {
        expect( containOnly() && containOnly(["A", "B", "C"], ["A", "B", "C"]) && containOnly("ABC", "ABC") && containOnly("ABC", "ABCD") && !containOnly("ABCD", "ABC") ).toBeTruthy();
    });

    it(`should be a function`, () => {
        expect(CornFlake).toBeInstanceOf(Function);
    });
    it(`should return a string`, () => {
        expect(typeof CornFlake() == 'string').toBeTruthy();
    });
    it(`should return a string with a length of 16`, () => {
        expect( CornFlake() ).toHaveLength(16);
    });
    it(`should return a string with a length of 4 when custom keysize is provided`, () => {
        expect( CornFlake({ keysize: 4 }) ).toHaveLength(4);
    });
    it(`should return a string with a length of 8 with custom chars provided as a string`, () => {
        expect( CornFlake({ keysize: 8, chars: "ABCD" }) ).toHaveLength(8);
    });
    it(`should return a string with only the provided chars as an array`, function() {
        let key = CornFlake({ keysize: 4, chars: ["A", "B", "C", "D"] });
        expect( containOnly(key, "ABCD") ).toBeTruthy();
        expect( key ).toHaveLength(4);
    });
    it(`should return a string with the same chars as the default ones`, () => {
        expect( containOnly( CornFlake({ keysize: 4 }) , defaultOptions.chars) ).toBeTruthy();
    });
    it(`should return a string with value of "A" and not "B" when keys are provided`, () => {
        for (let i = 0; i < 5; i++) {
            expect( containOnly( CornFlake({ keys: ["B"], keysize: 1, chars: "AB" }), "A" ) ).toBeTruthy();
        }
    });
    it(`should return a string with value of "A" and not "B" when custom filter is provided`, () => {
        for (let i = 0; i < 5; i++) {
            expect( containOnly( CornFlake({ filter: (key) => key != "B", keysize: 1, chars: "AB" }), "A") ).toBeTruthy();
        }
    });
    it(`should return a string with a length of 6 when keysize provided as function`, () => {
        expect( CornFlake({ keysize: () => 6 }) ).toHaveLength(6);
    });
});

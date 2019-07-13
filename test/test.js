const CornFlake = require('..');
const containOnly = require('./containOnly');

describe('SimpleCornFlakes', () => {
    it('approve test util function: containOnly', () => {
        expect( containOnly() && containOnly(["A", "B", "C"], ["A", "B", "C"]) && containOnly("ABC", "ABC") && containOnly("ABC", "ABCD") && !containOnly("ABCD", "ABC") );
    });
    it('should be a function', () => {
        expect(CornFlake instanceof Function);
    });
    it('should return a random String with a length of 16', () => {
        expect(CornFlake().length == 16);
    });
    it('should return a random String with a length of 16 (with paramter provided)', () => {
        expect(CornFlake([], 16).length == 16);
    });
    it('should return a random String with a length of 4', () => {
        expect(CornFlake([], 4).length == 4);
    });
    it('should return a random String with a length of 4 (with special chars provided)', () => {
        expect(CornFlake([], 4, ["A", "B", "C", "D"]).length == 4);
    });
    it('should return a random String with only A, B, C and D in int and a length of 4', function() {
        var cf = CornFlake([], 4, "ABCD");
        expect(containOnly(cf, "ABCD") && cf.length == 4);
    });
    it('should return a random String with the same result as first test', () => {
        var cf = CornFlake([], 4, CornFlake.defaultChars);
        expect(containOnly(cf, CornFlake.defaultChars) && cf.length == 4);
    });
});

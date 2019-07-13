const CornFlake = require('..');

describe('SimpleCornFlakes', function() {
    it('should be a function', function() {
        expect(CornFlake).toBeInstanceOf(Function);
    });
    it('should return a random String with a length of 16', function() {
        expect(CornFlake([], 16).length).toBe(16);
    }); 
});

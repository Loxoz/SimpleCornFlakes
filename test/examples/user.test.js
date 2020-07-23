const { CornFlake } = require('../..');

function runCode() {
    /* 
     * Creating an object to store already existing users,
     * this is completely optional and is here for the purpose of this example,
     * can be also any type of database response.
     */
    var users = {};

    function createUser(name, data) {
        /* 
         * creating a new id for the user with a length of 42
         * taking care of existing users
         */
        let id = CornFlake({ keys: Object.keys(users), keysize: 42 });
        /* or directly */
        id = CornFlake({ keys: users, keysize: 42 });
        /*
         * the users object will automatically converted from its keys
         * to an Array, same as doing Object.keys(users) as seen above
         */
        users[id] = {
            name,
            data,
            extra: "info"
        }
    }

    createUser("guest", { some: "data" });

    /* example test export */
    return { users };
}

describe("SimpleCornFlakes (example: user)", () => {
    it(`should not throw`, () => {
        expect(runCode).not.toThrow();
    });
    it(`should have one user`, () => {
        expect(Object.keys(runCode().users)).toHaveLength(1);
    });
    it(`should have one user with the name "guest"`, () => {
        let { users } = runCode();
        let id = Object.keys(users)[0];
        let user = users[id];
        expect(user).toHaveProperty("name", "guest");
    });
});
"use strict";
class Users {
    constructor() {
        this.name = '';
        this.email = '';
    }
    addUser(user) {
        return `${user} is added`;
    }
}
let user1 = new Users;
let result = user1.addUser("Jay");
console.log(result);

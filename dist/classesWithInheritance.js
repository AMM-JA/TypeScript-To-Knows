"use strict";
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangableName = firstName;
    }
    changeUnchangableName() {
    }
    getFullname() {
        return this.firstName + " " + this.lastName;
    }
}
User.maxAge = 50;
const some = new User("Monster", "lessons");
console.log(some.firstName);
console.log(User.maxAge);
//# sourceMappingURL=classesWithInheritance.js.map
"use strict";
// Problem 2 — Tuple & Interface Validation
// Detailed Problem Statement
// Define:
// Implement:
// createUser(name, age)
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = createUser;
exports.parseTuple = parseTuple;
function createUser(name, age) {
    // TODO: Return a user object with the given name and age
    // TODO: Validate at compile time that name is string and age is number ≥ 0
    if (typeof (name) === "string" && age >= 0) {
        return {
            name: name,
            age: age
        };
    }
}
function parseTuple(tuple) {
    // TODO: Convert tuple into a user object
    // TODO: Ensure tuple length is exactly 2 and types are validated at compile time
    var name = tuple[0], age = tuple[1];
    if (typeof (name) === "string" && age >= 0) {
        return {
            name: name,
            age: age
        };
    }
}
console.log(createUser("botsa", 22));
console.log(parseTuple(["botsa", 22]));

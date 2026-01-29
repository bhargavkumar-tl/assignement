"use strict";
//  Problem 3 — Union Status Handler (Optional Chaining + Nullish Coalescing)
// Detailed Problem Statement
// Define:
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleStatus = handleStatus;
function handleStatus(status, data) {
    var _a;
    // TODO: Return "Unknown" if status is null or undefined
    // TODO: Otherwise return data?.message if defined, else status in uppercase
    // TODO: Use optional chaining (?.) and nullish coalescing (??)
    if (status === null || status === undefined) {
        return "unknown";
    }
    else
        return (_a = data === null || data === void 0 ? void 0 : data.message) !== null && _a !== void 0 ? _a : status.toUpperCase();
}
console.log(handleStatus("loading"));

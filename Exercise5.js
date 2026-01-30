// Problem 5 — API Response Parser with Type Assertion
// Detailed Problem Statement
// Implement:
// export function parseApiResponse(
//   response
// ){ }
function parseApiResponse(response) {
    // Validate response is a non-null object
    if (typeof response !== "object" || response === null) {
        return null;
    }
    // Narrow the type for property access
    var obj = response;
    // Validate properties
    if (typeof obj.id !== "number" || typeof obj.title !== "string") {
        return null;
    }
    // Safe type assertion after validation
    return obj;
}
console.log(parseApiResponse({ id: 1, title: "Hello" }));
console.log(parseApiResponse({ id: "1", title: "Hello" }));

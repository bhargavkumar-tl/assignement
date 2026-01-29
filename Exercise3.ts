//  Problem 3 — Union Status Handler (Optional Chaining + Nullish Coalescing)
// Detailed Problem Statement
// Define:

// Implement:
// export function handleStatus(
//   status,
//   data
// )

// Rules:

// Return "Unknown" if status is null or undefined.
// If status === 'success' or 'error' or 'loading', return:data?.message ?? status.toUpperCase()
// Must use optional chaining and nullish coalescing.

// Constraints

// No if (data && data.message) allowed — must use ?. and ??.
// data?.message overrides upper-case status when available.

// Example Test Cases
// Valid

// Input	Output
// handleStatus("success")	"SUCCESS"
// handleStatus("error", { message: "Something failed" })	"Something failed"
// handleStatus("loading")	"LOADING"

// Code Snippet
// // Problem 3— Union Status Handler (Optional Chaining + Nullish Coalescing)

// TODO: Define a union type for status values (success, error, loading, null)
type Status = "success" | "error" | "loading" | null | undefined;
interface Data {
  message?: string;
}   

export function handleStatus(
  status:Status,
  data?:Data
):string {
  // TODO: Return "Unknown" if status is null or undefined
  // TODO: Otherwise return data?.message if defined, else status in uppercase
  // TODO: Use optional chaining (?.) and nullish coalescing (??)
  if(status===null || status===undefined){
    return "unknown"
;  }
else
  return data?.message ?? status.toUpperCase();
}
  console.log(handleStatus("loading"))
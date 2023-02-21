// Arrays check automatically based on what is inside the array if implicit.
// If you want to explicitally state it, add number[], etc.

let numbers: number[] = [1, 2, 3]

// TypeScript will show which built in JavaScript functions can be used for callbacks.
numbers.forEach(n => n.toFixed())
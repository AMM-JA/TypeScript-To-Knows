// ! Literal Types are exact and specfic

// You can combine Literal types and Union to create a system where only two outcomes are allowed.
// Good for status codes (?)
let quantity_one: 50 
let quantity_two: 50 | 100

// You can alternatively Type Aliases in junction with Literals.
type Quantity = 50 | 100 
//? type : number | string = literal
// ? (parameter: number | string) =  Union
let quantity_three: Quantity = 100;
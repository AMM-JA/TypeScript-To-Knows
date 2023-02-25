// ! Compiling error
// let test: [number, string] = [1, 'Mosh']

// With Tupling, you have to state what kind of values will be in the array.
// It can get hard to read, so try to keep it to key values.
let user: [number, string, number] = [1, 'Mosh', 0]
// *** Conclusion tuple is fix the type of type cast;

// However you can push objects into the array and cause an error.
// const user: (string | number)[] = [1, "hc"]
let tUser: [string, number, boolean]

tUser = ["hc", 131, true]

let rgb: [number, number, number] = [255, 123, 112]

type TupUser = [number, string]

const newTupUser: TupUser = [112, "example@google.com"]

newTupUser[1] = "hc.com" //? can assign but cant push
newTupUser.push('true')
























// export {}
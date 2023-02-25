// Arrays check automatically based on what is inside the array if implicit.
// If you want to explicitally state it, add number[], etc.

let numbers: number[] = [1, 2, 3]

// TypeScript will show which built in JavaScript functions can be used for callbacks.
numbers.forEach(n => n.toFixed())

// ! FreeCodeGram

const superHeros: string[] = [] // *** 1 (String array)
// const heroPower: number[] = []
const heroPower: Array<number> = [] // *** 2 same 1 (Number array)

type Person1 = {
    name: string
    isActive: boolean
}

const allPerson1: Person1[] = []

const MLModels: number[][] = [
    [255, 255, 255],
    []
]


superHeros.push("spiderman")
heroPower.push(2)

allPerson1.push({name: "", isActive: true}) //? push object to array
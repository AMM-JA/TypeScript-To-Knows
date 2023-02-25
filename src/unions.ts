// Union is giving a variable or paramater more than one type
// ! (parameter: number | string), example of Union
function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
    //   return weight * 2.2; // ! it will throw error because of this function need to return number
  }
}

kgToLbs(10);
kgToLbs("10kg");

// ! FreeCodeGram
let score: number | string = 33;
score = 44;
score = "55";

type UnionPerson = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let hitesh: UnionPerson | Admin = { name: "hitesh", id: 334 };

hitesh = { username: "hc", id: 334 };

// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is: ${id}`);

// }
getDbId(3);
getDbId("3");

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

//array

const data: number[] = [1, 2, 3]; // ? must be type of number in this array => number[]
const data2: string[] = ["1", "2", "3"]; // ? must be type of number in this array => string[]
const data3: (string | number | boolean)[] = ["1", "2", 3, true];

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment = "crew"

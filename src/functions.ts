// (taxYear?: number) means that there may be a case where the number is not used when calling the function.
// (variable = 2022) gives the default value when calling the function.

function calculateTax(
  income: number,
  taxYear?: number,
  variable = 2022
): number {
  if (income < 50_000) {
    return income * 1.2;
  }
  return income * 1.3;
}

// Strict on how many arguments gets passed.
calculateTax(10_000, 2022);

// ? if there are no use param
// "noUnusedParameters": true,

// ? If there are undefined returns, then it throws an error.
// "noImplicitReturns": true,

// ? If there are unused variables, throw Error
// "noUnusedLocals": true,

// ! FreeCodeGram
function addTwo(num: number): number {
  return num + 2;
  //return "hello"
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

let myValue = addTwo(5);
getUpper("hitesh");

signUpUser("hitesh", "hitesh@lco.dev", false);
loginUser("h", "h@h.com");

function getValue(myVal: number): any{
    if (myVal > 5) {
        return true
    }
    return "200 OK"
}

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3]

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

// export {}
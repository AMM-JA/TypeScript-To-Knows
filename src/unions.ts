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
  kgToLbs('10kg')
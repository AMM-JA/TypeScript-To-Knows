
// (taxYear?: number) means that there may be a case where the number is not used when calling the function.
// (variable = 2022) gives the default value when calling the function.

function calculateTax(income: number, taxYear?: number, variable = 2022): number{
    if (income < 50_000) {
      return income * 1.2;
    }
    return income * 1.3;
  }
  
  // Strict on how many arguments gets passed.
  calculateTax(10_000, 2022)

  // ? if there are no use param
  // "noUnusedParameters": true,
  
  // ? If there are undefined returns, then it throws an error.
  // "noImplicitReturns": true, 
  
  // ? If there are unused variables, throw Error
  // "noUnusedLocals": true,  
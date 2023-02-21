// If your function requires the use of null as a parameter, then instead of configuring tsconfig.json, we can use Unions to create a proper return on null.
// ... the same goes with undefined.

function greet(name: string | null | undefined) {
    if (name) {
      console.log(name.toUpperCase());
    } else {
      console.log("Hola!");
    }
  }
  
  greet(null);
const scores: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  //? if you gave me string it will give you string
  //? type give type given
  return val;
}

// identityThree('true')

function identityFour<T>(val: T): T {
  //** same like upper */
  return val;
}
identityFour("same");

interface Bootle {
  brand: string;
  type: number;
}

// identityFour<Bootle>({
//   brand: "string",
//   type: 1,
// });

function getSearchProducts<T>(products: T[]): T {
  console.log(products.length); //? if you want length type case with array because of value should be array
  // do some database operations
  const myIndex = 3;
  return products[myIndex]; //? must return from products
}

// function test<E>(product: E[]): E {
//   return product[1];
// }

const getMoreSearchProducts = <T>(products: T[]): T => {
  //do some database operations
  const myIndex = 4;
  return products[myIndex];
};

interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

// anotherFunction(3, {
//   connection: "string",
//   username: "string",
//   password: "string",
// });

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}

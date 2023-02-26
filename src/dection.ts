function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 3;
}

// ! tpye of guard (https://www.typescriptlang.org/docs/handbook/2/narrowing.html#typeof-type-guards)

function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide ID");
    return;
  }
  id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

interface User3 {
  name: string;
  email: string;
}

interface Admin3 {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: User3 | Admin3) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  } else {
    return "default"; // ! if i didn't return else value i got (Not all code paths return a value.) ERROR
  }
}

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "fish food";
  } else {
    pet;
    return "bird Food";
  }
}

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
  side: number;
}

type Shapes = Circle | Square | Rectangle;

function getTrueShapes(shape: Shapes){
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    }
    // return 'default';
    return shape?.side * shape?.side
}

function getArea(shape: Shapes) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;

    case "square":
      return shape.side * shape.side;
    case "rectangle":
      return shape.length * shape.width;

    default:
      const _defaultforshape: never = shape;
      return _defaultforshape;
  }
}

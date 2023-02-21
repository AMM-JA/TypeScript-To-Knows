// This works, but not scalable.
// ! readonly means that you cannot edit them.(cannot reassign the value)
// age?: ... the question mark means that the value is optional for usage.
let employee_one: {
  readonly id: number;
  name: string;
  age?: number;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Mosh",
  retire: (date: Date) => {
    console.log(Date);
  },
};

// ! Aliases
//  You can reuse Type Aliases (method) instead for scalable object properties
type Employee = {
  readonly id: number;
  name: string;
  age?: number;
  retire: (date: Date) => void;
};

let employee_two: Employee = {
  id: 2,
  name: "Takuya",
  retire: (date: Date) => {
    console.log(Date);
  },
};

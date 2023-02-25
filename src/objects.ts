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


// ! FreeCodeGram
// const User = {
//     name: "hitesh",
//     email: "hitesh@lco.dev",
//     isAvtive: true
// }

function createUser(user : {name: string, isPaid: boolean}){}

let newUser = {name: "hitesh", isPaid: false, email: "h@h.com"}

createUser(newUser)



function createCourse():{name: string, price: number}{
    return {name: "reactjs", price: 399}
}


// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }


// function createUser(user: User): User{
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})


type Person = {
  readonly _id: string
  name: string
  email: string
  isActive: boolean
  credcardDetails?: number
}

let myPerson: Person = {
  _id: "1245",
  name: "h",
  email: "h@h.com",
  isActive: false
}

type cardNumber = {
  cardnumber: string
}

type cardDate = {
  cardDate: string
}

type cardDetails = cardNumber & cardDate & {
  cvv: number
}


myPerson.email = "h@gmail.com"
// myPerson._id = "asa" //? readonly cannot assign








// export {}
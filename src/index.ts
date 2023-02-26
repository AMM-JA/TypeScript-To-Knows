// let age: number = 20;
// if (age < 50) age += 10;
// console.log(age)

// ! FreeCodeCamp
// class User {
//     public email: string
//     private name: string
//     readonly city: string = "Jaipur"
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name
//     }
// }
class UserIndex {

    protected _courseCount = 1 //? protected mean can't use form public but can use in class inheritance
    readonly city: string = "Jaipur"
    constructor(
        public email: string, 
        public name: string,
        // private userId: string
        ){
    }
    // private deleteToken(){ //? private can use within class
    //     console.log("Token deleted");
    // }

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

class SubUser extends UserIndex {
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}

const hiteshIndex = new UserIndex("h@h.com","hitesh")
// hitesh.name 

// hiteshIndex.deleteToken()
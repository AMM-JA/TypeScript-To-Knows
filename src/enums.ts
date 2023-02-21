// ? We don't have to make multiple of the same variables in TypeScript.
// const small = 1;
// const medium = 2;
// const large = 3;

// Enums have to be in PascalCase.
// Create a design system for values using enum.
// ! Use const in this case to create more readable and efficient code!
// *** Enum ဆိုတာ အစဉ်လိုက်ကိန်းကိုပြောတာ
const enum Size { Small = 4, Medium, Large}; //? if first enums is number (no need to assign other)
const enum TestText { Small = 's', Medium = 'm', Large = 'l'}; //? if first enums is string (need to assign other)


let mySize: Size = Size.Medium;
let myTestText: TestText = TestText.Large;
console.log(Size.Medium,myTestText)


"use strict";
function calculateTax(income, taxYear, variable = 2022) {
    if (income < 50000) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(10000, 2022);
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
let loginUser = (name, email, isPaid = false) => { };
let myValue = addTwo(5);
getUpper("hitesh");
signUpUser("hitesh", "hitesh@lco.dev", false);
loginUser("h", "h@h.com");
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
const getHello = (s) => {
    return "";
};
const heros = ["thor", "spiderman", "ironman"];
heros.map((hero) => {
    return `hero is ${hero}`;
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
//# sourceMappingURL=functions.js.map
"use strict";
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
kgToLbs(10);
kgToLbs("10kg");
let score = 33;
score = 44;
score = "55";
let hitesh = { name: "hitesh", id: 334 };
hitesh = { username: "hc", id: 334 };
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
const data = [1, 2, 3];
const data2 = ["1", "2", "3"];
const data3 = ["1", "2", 3, true];
let seatAllotment;
seatAllotment = "aisle";
//# sourceMappingURL=unions.js.map
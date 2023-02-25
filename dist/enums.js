"use strict";
let mySize = 5;
let myTestText = "l";
console.log(5, myTestText);
const statuses = {
    notStarted: 0,
    inProgress: 1,
    done: 2,
};
console.log(statuses.inProgress);
var Status;
(function (Status) {
    Status["NotStarted"] = "notStarted";
    Status["InProgress"] = "inProgress";
    Status["Done"] = "done";
})(Status || (Status = {}));
let notStrartedStatus = Status.NotStarted;
notStrartedStatus = Status.Done;
console.log(Status.InProgress);
//# sourceMappingURL=enums.js.map
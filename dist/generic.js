"use strict";
const searchStr = "foo";
const addId = (obj) => {
    const id = Math.random().toString(16);
    return Object.assign(Object.assign({}, obj), { id });
};
//# sourceMappingURL=generic.js.map
const _=require("lodash");
const item=[1,[2,[3,[4]]]];
const newItem=_.flattenDeep(item);
console.log(newItem);
var list = [1, 2, 3];
var categories = ['Sport', 'IT', 'Car'];
// console.log('list');
// list.forEach((num) =>
//     console.log(num.toFixed(2))
// );
// console.log('categries');
// categories.forEach((str) =>
//     console.log(str.toLocaleUpperCase())
// );
// const listSquare = list.map(num => num * num);
// console.log(listSquare)
// const result = categories.filter(str => str.length > 2)
// console.log(result);
var x;
// Initialize it
x = ["hello", 10, "world", 2019, "huyitto", 25]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error
console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1));
// Error, Property 'substr' does not exist on type 'number'.
x[2] = "world";
// // OK, 'string' can be assigned to 'string | number'
x[5] = 100.25;
console.log(x[5].toString());

let arr = [true, false, "cat"];
console.log(arr);
arr.push("dog");
console.log(arr);
let lastElement = arr.pop();
console.log(lastElement);
console.log(arr);
let spliced = arr.splice(1, 1);
// console.log(arr);
console.log(spliced);

arr.forEach(val => {
    console.log(val);
});
for (let val of arr) {
    console.log(val);
}
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
let i = 0; 
while(i < arr.length) {
    console.log(arr[i]);
    i++;
}








let arr2 = [1, 2, 3, 4, 5, 6, 7, 2];
// let lessThan3 = arr.filter(el => {
//     if (el < 3) {
//         return true;
//     } else {
//         return false;
//     }
// });
let lessThan3 = arr.filter(el => el < 3);
console.log(lessThan3);

let addTen = arr.map(el => el + 10);
console.log(addTen);
// function addTenToArray(arr) {
//     let newArray = [];
//     for (let val of arr) {
//         newArray.push(val + 10);
//     }
//     return newArray;
// }
// let addTen =addTenToArray(arr)



let randNumbers = [];
for (let i = 0; i < 100; i++) {
    randNumbers.push(Math.random());
}
randNumbers.sort( (a, b) => b - a);
console.log(randNumbers);


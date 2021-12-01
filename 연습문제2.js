let arr = [11, 22, 33, 111, 2];

let str = arr.join("");

let newArr = str.split("");

let numberArr = newArr.map((el) => parseInt(el));

let result = numberArr.reduce((acc, cur) => acc + cur);
console.log(result);

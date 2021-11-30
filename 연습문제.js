let arg = "5, 4, 10, 2, 5";

let arr = arg.split(", ");

let newArr = arr.map((el) => {
  return parseInt(el, 10);
});

let result = newArr.reduce((acc, cur) => {
  return acc + cur;
});

let answer = result / newArr.length;

console.log(answer);

let ss = (5 + 4 + 10 + 2 + 5) / 5;

console.log(ss);

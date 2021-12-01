console.log(add1(10, 20));
console.log(add2(10, 20));
// 호이스팅 되어서 위로 올라갑니다!

function add1(x, y) {
  return x + y;
}

console.log(mul(10, 20));
let mul = function (a, b) {
  return a * b;
};

function add2(x, y) {
  return x + y;
}

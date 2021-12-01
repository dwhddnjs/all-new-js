// let k = 10;
// function viewk() {
//   console.log(k);
// }
// function changek() {
//   k += 10;
//   console.log(k);
// }
// viewk();
// changek();
// viewk();

let k = 10;
function viewk() {
  console.log(k);
}
function changek() {
  let k = 20;
  console.log(k);
}
viewk();
changek();
viewk();


function add(a = 100, b = 200) {
    return a + b;
}

add(10, 20);
30
add(10);
210
add();
300
add(b=300)
500
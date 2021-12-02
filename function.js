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
30;
add(10);
210;
add();
300;
add((b = 300));
500;


//함수
//함수의 입력 출력 기능을 하나로 묶어 재사용 할 수 있도로 만드는 것
//자바스크립트의 실행코드들을 들어 있는 독립 블록 단위의 객체인 함수를 사용

// 기본적 구조 : function(){}



function myFunction(x, y) {
  z = x + y;
  return z;
}

myFunction(10, 20)

//function: 함수 선언 키워드
//myFunction: 함수명
//(x, y): input
// x, y : 파라미터
//{ } : 함수 범위
// z = x + y : 함수의 기능
// return z : output

// 10, 20 : 알규먼트
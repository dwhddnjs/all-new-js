let result = 0;

for (let x = 0; x < 101; x++) {
  if (x % 3 === 0 || x % 5 === 0) {
    result = result + x;
  }
}

console.log(result);

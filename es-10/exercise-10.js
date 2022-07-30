function sumUntil(maxValue) {
  let total = 0;

  for(let i=1; i <= maxValue; i++) {
    total += i;
  }
  return total
}

//1+2+3+4+5=15

console.log(sumUntil(5));
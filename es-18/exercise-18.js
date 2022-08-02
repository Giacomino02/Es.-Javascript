function memoize(fn) {
  let cache = {};
  return function (number) {
    if(cache[number]){
      return 'Fetching from cache for ' + cache[number];
    }
    else {
      let fact = fn(number);
      cache[number] = fact;
      return fact;
    }
  }
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }
  
  return x * factorial(x - 1);
  
}


factorial = memoize(factorial);
console.log('Calculating result for ' + factorial(10));
console.log(factorial(6));
console.log(factorial(5));
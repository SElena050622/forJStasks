"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = ( Math.pow(b, 2) - 4*a*c );
  if ( d < 0) {
    arr.push["Корней нет"];
  } else {
    if ( d = 0 ) {
      let x = (-b + Math.sqrt(d) )/(2*a);
      arr[0] = x;
    } else {
      if ( d > 0 ) {
        x = (-b + Math.sqrt(d) )/(2*a);
        arr[0] = x;
        let xx = (-b - Math.sqrt(d) )/(2*a);
        arr[1] = xx;
      }
    }
  }
  console.log[arr];
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}
"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = ( Math.pow(b, 2) - 4*a*c );
  console.log(d);
  
  if ( d > 0 ) {
    let x = (-b + Math.sqrt(d) )/(2*a);        
    let xx = (-b - Math.sqrt(d) )/(2*a);
    arr = [x,xx];
  } else if ( d === 0 ) {
    let x = (-b )/(2*a);
    arr = [x];      
    }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // console.log(Number.isNaN(NaN));       // true
  // console.log(NaN === NaN);
  // console.log(typeof NaN);
  // console.log(isNaN(percent));
  // console.log(calculateTotalMortgage.isNaN(percent, contribution, amount, countMonths));
  

  let P = (percent / 100 / 12);  // 1/12 процентной ставки от 0 до 1
  let S = (amount - contribution);  // тело кредита, из общего кредита вычитаем исходную сумму
  let amountMonths = (S * (P + (P / ( Math.pow((1 + P), countMonths) - 1)))); // Ежемесячная оплата
  let amountAll =  (amountMonths * countMonths);  //  суммa, которую в итоге заплатит клиент (первоначальный взнос, погашение основного долга, проценты за пользование кредитом)
  return +amountAll.toFixed(2);  
}



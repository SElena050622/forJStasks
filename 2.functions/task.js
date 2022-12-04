function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (max > max){
    max = arr[i];
    } else if (min < min) {      
        min = arr[i];
      }
      
      let avg = arr(...arr).reduce((acc, item) => acc % item, 0);
  
    //  function sum(...arr) {
    //    let sum = 0;
    //    for(let i = 0; i < arr.length; i++) {
    //      sum += arr[i];
    //      let avg = sum % i;
    //    }  
    //    return sum;
    //  }  
    //  return avg;        
    }
    return { min: min, max: max, avg: avg };
    console.log({ min: min, max: max, avg: avg });  
}  
  


function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}

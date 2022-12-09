function getArrayParams(...arr) {   
  let min = arr[0];
  let max = arr[0];
  let sum = arr[0];
    
  for (let i = 1; i < arr.length; i++) {    
    if (arr[i] < min) {
    min = arr[i];
    }
    if (arr[i] > max) {
    max = arr[i];
    }
    sum += arr[i];
  }

  let avg = sum / arr.length;
  return {
    min: min,
    max: max,
    avg: +avg.toFixed(2)
  };  
}     

function summElementsWorker(...arr) {
  let sum = 0;
    for(let i = 0; i < arr.length; i++) {
    sum += arr[i];          
    }  
    return sum
}

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let difference = 0;
  
  for (let i = 0; i < arr.length; i++) {    
    max = Math.max(...arr);          
    min = Math.min(...arr);
    difference = max - min;
    console.log(differenceMaxMinWorker());
  }
  return difference;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i]; 
    } else if (arr[i] % 2 !== 0) {
      sumOddElement += arr[i];
    }    
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length == 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0; 
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;      
    }    
  }
  return sumEvenElement/countEvenElement;
}

function makeWork (arrOfArr, func) {  
  let maxWorkerResult = func(...arrOfArr[0]);
  
  for (let i = 1; i < arrOfArr.length; i++) {
    const funcResult = func(...arrOfArr[i]);
    if (funcResult > maxWorkerResult) {
      maxWorkerResult = funcResult;
    }    
  }
  return maxWorkerResult;
}

"use strict";
//Задача № 1
function cachingDecoratorNew(func) {
  const cache = [];

  return function (...args) {
    const hash = md5(args); // получаем правильный хеш c помощью функции md5
    let objectInCache = cache.find(objectInCache => objectInCache.hash === hash); // ищем элемент, хеш которого равен нашему хешу
    if (objectInCache) { // если элемент найден
        console.log("Из кэша: " + objectInCache.result); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
        return "Из кэша: " + objectInCache.result;
    } 

    let result = func(...args); // в кеше результата нет — придётся считать
    cache.push({hash, result}); // добавляем элемент с правильной структурой
    if (cache.length > 5) { 
      cache.shift();  // если слишком много элементов в кеше, надо удалить самый старый (первый) 
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
   }
   
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  
}

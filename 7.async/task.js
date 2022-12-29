"use strict";
class AlarmClock {
    constructor() { // выделяет память для объекта
        this.alarmCollection = []; // хранение коллекции звонков
        this.intervalId = null; // хранение id таймера без начального значения
    }
    addClock(time = null, callback = null) { // добавляет новый звонок в коллекцию существующих
        if (!time || !callback) {    
            throw new Error ('Отсутствуют обязательные аргументы')
        }
        
        if (time in this.alarmCollection) {   
        console.warn ('Уже присутствует звонок на это же время')
        }
        
        this.alarmCollection.push({time, callback, canCall: true});        
    }
    
    removeClock(time) { // удаляет звонки по определённому времени        
        this.alarmCollection = this.alarmCollection.filter(removedClock => removedClock.time !== time);             
    }

    getCurrentFormattedTime() {  // возвращает текущее время в строковом формате HH:MM
        return new Date().toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"});
    }

    start() { // запускает будильник
        if (this.intervalId !== null) {
          return; 
        }
        let func = () => this.alarmCollection.forEach(alarm => {
            
          if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
            alarm.canCall = false;
            alarm.callback();
          }
        });
        this.intervalId = setInterval(func, 1000);
    }

    stop() { // останавливает выполнение интервала будильника
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() { // сбрасывает возможность запуска всех звонков
        this.alarmCollection.forEach(alarm => alarm.canCall = true);
    }

    clearAlarms() { // удаляет все звонки
        stop();
        this.alarmCollection = [];
    }

}   
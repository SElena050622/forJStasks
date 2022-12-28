"use strict";
class AlarmClock {
    constructor(alarmCollection = [], intervalId = null) { // выделяет память для объекта
        this.alarmCollection = alarmCollection; // хранение коллекции звонков
        this.intervalId = intervalId; // хранение id таймера без начального значения
    }
    addClock(time = null, callback = null) { // добавляет новый звонок в коллекцию существующих
        this.time = time;
        this.callback = callback;
       
        if (!time || !callback) {    
            throw new Error ('Отсутствуют обязательные аргументы')
        }
        
        if (time in this.alarmCollection) {   
        console.warn ('Уже присутствует звонок на это же время')
        }
        
        this.alarmCollection.push({time: time, callback: callback, canCall: true});        
    }
    
    removeClock(time) { // удаляет звонки по определённому времени        
        this.alarmCollection = this.alarmCollection.filter(removedClock => removedClock.time !== time);             
    }

    getCurrentFormattedTime() {  // возвращает текущее время в строковом формате HH:MM
        /*let fmt = t => ("" + t).padStart(2, '0');
        let currFormattedTime = fmt(new Date().getHours()) + ":" + fmt(new Date().getMinutes());
        return currFormattedTime;*/
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
        this.stop;
        this.alarmCollection = [];
    }

}   
"use strict"
// задача 1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }
// улучшить состояние испорченного издания
    fix() {
        this.state *= 1.5;
    }
// «сеттер» для свойства state
    set state (state) {
        if(state < 0) {
            this._state = 0;            
        } else if (state > 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    }
// «геттер», который позволит читать значение свойства state    
    get state() {
        return this._state;
    }    
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}
// задача 2
class Library {
    constructor (libraryName) {
        this.name = libraryName;
        this.books = [];
    }
// метод добавляет книгу в хранилище
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
// Метод должен возвращать книгу в случае успеха и null, если запрошенная книга не была найдена.
    findBookBy(type, value) {
        return this.books.find(book => book[type] === value) || null;
    }
// метод по названию книги, запрошенной читателем
    giveBookByName(bookName) {
        const bookToGive = this.findBookBy('name', bookName);        
        if (bookToGive) {
            const indexBookToGive = this.books.indexOf(bookToGive);
            this.books.splice(indexBookToGive, 1);
            return bookToGive;
        }
        return null;
    }
}

// задача 3
class Student {
    constructor (name, marks = {}) {
        this.name = name;
        this.marks = marks;
    }
// метод добавляет оценку по предмету 
    addMark (mark, subject) {
        if (mark < 2 || mark > 5) {
            return;
        }
        if (subject in this.marks) {
            this.marks[subject].push(mark);
        } else {
            this.marks[subject] = [mark];
        }
    }
// метод возвращает среднюю оценку по одному предмету
    getAverageBySubject(subject) {
        if (this.marks[subject] === undefined) {
            return 0;
        }
        return this.marks[subject].reduce((acc, item) => acc + item) / this.marks[subject].length;
    }
// метод возвращает общую среднюю оценку по всем предметам
    getAverage () {
        if (Object.keys(this.marks).length === 0) {
            return 0;
        }
        let sum = 0;
        for (let key of Object.keys(this.marks)) {
            sum += this.getAverageBySubject(key);
        }
        return sum / Object.keys(this.marks).length;
    }
}


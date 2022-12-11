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
        return this.state *= 1.5;
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
    constructor(name, releaseDate, pagesCount, state) {
        super (name, releaseDate, pagesCount, state);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, author) {
        super (name, releaseDate, pagesCount, state);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, state, author) {
        super(name, releaseDate, pagesCount, state, author);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, state, author) {
        super(name, releaseDate, pagesCount, state, author);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, state, author) {
        super(name, releaseDate, pagesCount, state, author);
        this.type = "detective";
    }
}
// задача 2
class Library {
    constructor (name, books = []) {
        this. name = name;
        this.books = books;
    }
// метод добавляет книгу в хранилище
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
// Метод должен возвращать книгу в случае успеха и null, если запрошенная книга не была найдена.
    findBookBy(type, value) {
        if (books[type] === value){
           return this.book.push(type); 
        } else {
            return null;
        }
    }
// метод по названию книги, запрошенной читателем
    giveBookByName(bookName) {
        if (bookName === null){
           return null;
        } else {
            this.books.slice(bookName);  
            return this.book.push(bookName);
        }
    }
}



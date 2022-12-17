// задача 1
function parseCount (number) {
    const result = Number.parseFloat(number);
    if (isNaN(result)) {
        throw new Error ('Невалидное значение')
    }
    return result;
}

function validateCount(number) {
    try {
        return parseCount(number)
    } catch (error) {
        return error
    }
}

// задача 2
class Triangle {
    constructor(a, b, c) {
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error ("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
        this.perimeter = a + b + c;        
    }
    get perimeter() {
        return this.a + this.b + this.c;
    }
    set perimeter(perimeter){
        this._perimeter = perimeter;
    }
    get area() {
        const halfP = this.perimeter / 2;
        return Number(Math.sqrt(halfP * (halfP - this.a) * (halfP - this.b) * (halfP - this.c)).toFixed(3));
    }
    set area(area) {
        this._area = area;
    }
}

function getTriangle (a, b, c) {
    try {
        return new Triangle (a, b, c);
    } catch (error) {
        return Triangle= {
            get perimeter() {
                return "Ошибка! Треугольник не существует"
            },
            get area() {
                return "Ошибка! Треугольник не существует"
            }
        }
    }

}


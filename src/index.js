"use strict";
function greet(name) {
    return `Hello, ${name}!`;
}
const user = "NETbuilder";
console.log(greet(user));
let age = 22;
let myName = "Ben";
let isTired = false;
console.log(`Age: ${age},  name: ${myName},  isTired:  ${isTired}`);
let multiplyTwoNumbers = (x, y) => {
    return x * y;
};
let calculateArea = (width, height = 10) => {
    return width * height;
};
let myMovie = { title: "Flushed Away", director: "Ben",
    releaseYear: 2007,
    isAvailableOnStreaming: true
};
console.log(myMovie);
let testProduct = { title: "Flushed Away", director: "Ben",
    releaseYear: 2007,
    isAvailableOnStreaming: true,
    propertyId: 2
};
//testProduct.propertyId = 5;
class Course {
    constructor(_title, _duration) {
        this.title = _title;
        this.duration = _duration;
    }
    describe() {
        console.log(`title: ${this.title}, duration: ${this.duration}`);
    }
}
class Shape {
    constructor(_color) {
        this.color = _color;
    }
    describe() { }
    ;
}
class Rectangle extends Shape {
    constructor(_color, _width, _height) {
        super(_color);
        this.width = _width;
        this.height = _height;
    }
    calcuateArea() {
        return this.width * this.height;
    }
}
let rectangle = new Rectangle("red", 5, 5);
console.log(rectangle.describe());
console.log(rectangle.calcuateArea());
class Vehicle {
}
class Car extends Vehicle {
    drive() {
        console.log("drivinggg");
    }
}
let car = new Car();
car.drive();

function greet(name : string): string{
    return `Hello, ${name}!`;
}

const user = "NETbuilder";
console.log(greet(user));


let age : number = 22;
let myName : string = "Ben";
let isTired : boolean = false;

console.log(`Age: ${age},  name: ${myName},  isTired:  ${isTired}`)

let multiplyTwoNumbers = (x : number, y:number) :number =>
{
    return x*y;
}

let calculateArea = (width: number, height: number = 10):number =>
{
    return width * height;
}   

interface Movie
{
    title: string,
    director: string,
    releaseYear: number,
    isAvailableOnStreaming: boolean
}

let myMovie : Movie = {title: "Flushed Away", director: "Ben",
    releaseYear: 2007,
    isAvailableOnStreaming: true
}

console.log(myMovie);


interface Product extends Movie
{
    category?: string,
    readonly propertyId: number
}

let testProduct : Product = {title: "Flushed Away", director: "Ben",
    releaseYear: 2007,
    isAvailableOnStreaming: true,
    propertyId:  2
}

//testProduct.propertyId = 5;


class Course
{
     public title: string;
     public duration: string

     constructor(_title: string, _duration: string)
     {
        this.title = _title;
        this.duration = _duration
     }

    describe(): void
    {
        console.log(`title: ${this.title}, duration: ${this.duration}`) 
    }
}


class Shape
{
    color: string;

    constructor(_color: string)
    {
       this.color = _color;
    }

    describe(): void{};
}

class Rectangle extends Shape{
    width: number;
    height: number;

    constructor(_color: string, _width: number, _height: number)
    {
       super(_color);
       this.width = _width;
       this.height = _height;
    }

    calcuateArea() : number
    {
        return this.width*this.height;
    }
}

let rectangle: Rectangle = new Rectangle("red", 5,5);
console.log(rectangle.describe());
console.log(rectangle.calcuateArea());


abstract class Vehicle
{
    abstract drive():void;
}

class Car extends Vehicle
{
    drive() : void
    {
        console.log("drivinggg");
    }
}

let car: Car = new Car();
car.drive();


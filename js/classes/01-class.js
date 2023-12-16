// Оголошення

// class Cars {

// }

// console.dir(Cars)

// const carInstance = new Cars();

// console.log(carInstance);

class Car {
    static description = "Клас, який описує автомобіль";
    
    constructor({ brand, model, price } = {}) {
        this._brand = brand;
        this._model = model;
        this._price = price;
    }
    get brand(){ return this._brand};
    set brand(arg) {this._brand = arg};

    get model(){ return this._model};
    set model(arg) {this._model = arg};

    get price(){ return this._price};
    set price(arg) {this._price = arg};
}

const carInstance = new Car({ brand:"Audi", model:"Q7", price:"Дофига" });

console.log(carInstance);
console.log(carInstance._price);
carInstance._price = "Много";
console.log(carInstance._price);

const newCar = new Car({ brand:"trivia", model:"V1", price:"Больше чем дофига" } )
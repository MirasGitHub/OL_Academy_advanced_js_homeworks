'use strict';

function Car(make, model, year){
    this.make = make;
    this.model = model; 
    this.year = year;

    this.getCarInfo = () => {
        return `${this.make} ${this.model} released in ${this.year}.`;
    }
    this.owners = [];

    this.addOwner = (owner) => {
        this.owners.push(owner);
    };

    this.removeOwner = (owner) => {
        this.owners.splice(this.owners.indexOf(owner), 1);
    };

    this.getOwnersCount = () => {
        return this.owners.length;
    };

    this.getOwnerNames = () => {
        return this.owners.map(owner => owner.fullName());
    };

    this.getFullInfo = function() {
        return `${this.make} ${this.model} from ${this.year}. ${this.getOwnersCount()} ${this.getOwnersCount() > 1 ? 'people' : 'person'} owns this car. These are - ${this.getOwnerNames().join(", ")}`; 
    }
    
}


function Person(name, surname, age, gender, cars = []){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
    this.cars = cars;

    this.fullName = () => `${this.name} ${this.surname}`;

    this.countCars = () => {
        return this.cars.length;
    };

    this.buysCar = (car) => {
        this.cars.push(car);
        car.addOwner(this);
    };

    this.sellsCar = (car) => {
        this.cars = this.cars.filter((c) => c !== car);
        car.removeOwner(this);
    };

    this.getAllCarsInfo = function() {
        return `${this.name} owns these cars: ${this.cars.map((car) => car.getCarInfo()).join(", ")}.;`
    };

}
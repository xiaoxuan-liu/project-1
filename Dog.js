import Animal from './Animal.js';

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
        this.species = 'Dog';
    }
    speak() {
       return "Woof! Woof!";
    }
}

export default Dog;
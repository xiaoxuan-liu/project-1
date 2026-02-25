import Animal from './Animal.js';

class Cat extends Animal {
    constructor(name) {
        super(name);
        this.species = 'Cat';
        this.isSleeping = false;
    }
    speak() {
        return "Meow~ I am a happy cat.";
    }
}

export default Cat;
class Animal {
    constructor(name) {
        this.name = name;
        this.energy = 100;
    }
    eat() {
        this.energy += 10;
        return `${this.name} is eating. Energy: ${this.energy}`;
    }
}

export default Animal;
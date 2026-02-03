console.log("Script loaded successfully!");

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

const nameInput = document.getElementById('petName');
const displayArea = document.querySelector('#petDisplay');
const allButtons = document.querySelectorAll('.btn');

function createPetCard(petObject) {
    const card = document.createElement('div');
    card.className = 'pet-card';

    card.innerHTML = `
        <h3>${petObject.name}</h3>
        <p>Species: ${petObject.species}</p>
        <p><i>${petObject.speak()}</i></p>
    `;
    displayArea.appendChild(card);
}

document.getElementById('adoptDog').addEventListener('click', function(evt) {
    console.log("Button clicked:" + evt.target.id);

    const name = nameInput.value || 'Buddy';
    const newDog = new Dog(name, 'Golden Retriever');
    createPetCard(newDog);
});

document.getElementById('adoptCat').addEventListener('click', function(evt) {
    const name = nameInput.value || "Kitty";
    const newCat = new Cat(name);
    createPetCard(newCat);
});
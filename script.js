console.log("Script loaded successfully!");

import Dog from './Dog.js';
import Cat from './Cat.js';

const nameInput = document.getElementById('petName');
const displayArea = document.querySelector('#petDisplay');
const allButtons = document.querySelectorAll('.btn');
const errorDisplay = document.getElementById('errorOutput');

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
    try {
            const name = nameInput.value.trim(); 

            if (name === "") {
                throw new Error("Please enter a name for your dog!");
            }

            errorDisplay.textContent = ""; 
            const newDog = new Dog(name, 'Golden Retriever');
            createPetCard(newDog);

        } catch (err) {
            errorDisplay.textContent = err.message; 
            errorDisplay.style.color = "red"; 
            console.log("Error caught: " + err.message);
        }
});

document.getElementById('adoptCat').addEventListener('click', function(evt) {
    try {
            const name = nameInput.value.trim();

            if (name === "") {
                throw new Error("The cat needs a name to be adopted!");
            }

            errorDisplay.textContent = "";
            const newCat = new Cat(name);
            createPetCard(newCat);

        } catch (err) {
            errorDisplay.textContent = err.message;
            errorDisplay.style.color = "red";
        }
});
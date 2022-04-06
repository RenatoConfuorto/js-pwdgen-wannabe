const firstNameDisplay = document.getElementById('first-name');
const lastNameDisplay = document.getElementById('last-name');
const favColorDisplay = document.getElementById('fav-color');
const passwordDisplay = document.getElementById('password');

const firstName = prompt('inserisci il tuo nome');
const lastName = prompt('inserisci il tuo cognome');
const favColor = prompt('inserisci il tuo colore preferito');

firstNameDisplay.innerHTML = firstName;
lastNameDisplay.innerHTML = lastName;
favColorDisplay.innerHTML = favColor;

const password = firstName + lastName + favColor + '21';
passwordDisplay.innerHTML = password;
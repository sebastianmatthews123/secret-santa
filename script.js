
const secret = "eyJNb25pa2EiOiJCZW4iLCJEYXJyZW4iOiJUb2J5IiwiU2FyYWgiOiJNb25pa2EiLCJCZW4iOiJTZWIiLCJTZWIiOiJTYXJhaCIsIlphcmEiOiJEYXJyZW4iLCJUb2J5IjoiWmFyYSJ9";

const assignments = JSON.parse(atob(secret));

const params = new URLSearchParams(window.location.search);
const person = (params.get("person") || "").toLowerCase();

const card = document.querySelector(".card");

const names = Object.keys(assignments);
const personName = names.find(name => name.toLowerCase() === person);

if (personName) {
    card.innerHTML = `
        <h1> Secret Santa</h1>
        <p>Hello ${personName}!</p>
        <h2>You're buying a present for:</h2>
        <h1>${assignments[personName]}</h1>
        <p>Keep it secret! </p>
    `;
} else {
    card.innerHTML = `
        <h1> Secret Santa</h1>
        <p>Please open your personal Secret Santa link.</p>
    `;
}

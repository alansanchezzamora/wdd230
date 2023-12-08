const url =
  "https://raw.githubusercontent.com/alansanchezzamora/wdd230/main/scoots/data/vehicles.json";
const cards = document.querySelector("#cards");

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data.prophets);
  displayProphets(data.vehicles);
}

const displayProphets = (vehicles) => {
  vehicles.forEach((vehicle) => {
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let halfReserv = document.createElement("h4");
    let fullReserv = document.createElement("h4");
    let halfWalk = document.createElement("h4");
    let fullWalk = document.createElement("h4");

    fullName.textContent = `${vehicle.rental - type}`;

    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute("alt", `Portrait of ${prophet.fullName}`);
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");

    birthDate.textContent = `Date of birth: ${prophet.birthdate}`;

    birthPlace.textContent = `Place of birth : ${prophet.birthplace}`;

    card.appendChild(fullName);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(portrait);

    cards.appendChild(card);
  });
};
getProphetData();

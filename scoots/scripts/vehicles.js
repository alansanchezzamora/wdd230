const url =
  "https://raw.githubusercontent.com/alansanchezzamora/wdd230/main/scoots/data/vehicles.json";
const cards = document.querySelector("#cards");

async function getVehicleData() {
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

    name.textContent = `${vehicle.type}`;
    halfReserv.textContent = `${vehicle.half - day - reserv - price}`;

    card.appendChild(name);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(portrait);

    cards.appendChild(card);
  });
};
getVehicleData();

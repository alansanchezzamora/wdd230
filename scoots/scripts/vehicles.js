const url =
  "https://raw.githubusercontent.com/alansanchezzamora/wdd230/main/scoots/data/vehicles.json";
const cards = document.querySelector("#cards");

async function getVehicleData() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data.vehicles);
  displayVehicles(data.vehicles);
}

const displayVehicles = (vehicles) => {
  vehicles.forEach((vehicle) => {
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let halfReserv = document.createElement("h4");
    let fullReserv = document.createElement("h4");
    let halfWalk = document.createElement("h4");
    let fullWalk = document.createElement("h4");

    name.textContent = `${vehicle.type}`;
    halfReserv.textContent = `${vehicle.halfDayReserv}`;
    fullReserv.textContent = `${vehicle.fullDayReserv}`;
    halfWalk.textContent = `${vehicle.halfDayWalkin}`;
    fullWalk.textContent = `${vehicle.fullDayWalkin}`;

    card.appendChild(name);
    card.appendChild(halfReserv);
    card.appendChild(fullReserv);
    card.appendChild(halfWalk);
    card.appendChild(fullWalk);

    cards.appendChild(card);
  });
};
getVehicleData();

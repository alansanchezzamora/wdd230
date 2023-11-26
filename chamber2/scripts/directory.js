const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
  // example using arrow function
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}

const url = "data/members.json";
const cards = document.querySelector("#cards");

async function getBusinessesData() {
  const response = await fetch(url);
  const data = await response.json();
  displayBusinesses(data.businesses);
}

const displayBusinesses = (businesses) => {
  businesses.forEach((business) => {
    let card = document.createElement("section");
    let bName = document.createElement("h2");
    let logo = document.createElement("img");
    let memberSince = document.createElement("p");
    let bDescription = document.createElement("p");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let website = document.createElement("a");
    let membership = document.createElement("h4");

    logo.setAttribute("src", business.logo);
    logo.setAttribute("alt", `Logo of ${business.name}`);
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("width", "340");
    logo.setAttribute("height", "440");

    bName.textContent = `Name : ${business.name}`;

    card.appendChild(bName);
    card.appendChild(memberSince);
    card.appendChild(bDescription);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(membership);

    cards.appendChild(card);
  });
};

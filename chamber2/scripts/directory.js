const url1 =
  "https://raw.githubusercontent.com/alansanchezzamora/wdd230/main/chamber2/data/members.json";
const cards = document.querySelector("#cards");

async function getBusinessesData() {
  const response = await fetch(url1);
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

    bName.textContent = `${business.name}`;
    memberSince.textContent = `Member Since: ${business.member - since}`;

    card.appendChild(bName);
    card.appendChild(memberSince);
    card.appendChild(bDescription);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(membership);
    card.appendChild(logo);

    cards.appendChild(card);
  });
};
getBusinessesData();

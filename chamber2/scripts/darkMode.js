const modeButton = document.querySelector("#mode");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const section1 = document.querySelector("#current-events");
const section2 = document.querySelector("#weather-card");
const section3 = document.querySelector("#company-spotlights");
const section4 = document.querySelector("#section5");
const section5 = document.querySelector("#section6");
const nav = document.querySelector("nav");
const menu = document.querySelector(".navigation");

modeButton.addEventListener("click", () => {
  if (modeButton.textContent.includes("🌝")) {
    main.style.background = "#000";
    header.style.background = "#000";
    footer.style.background = "#000";
    section1.style.background = "#333333";
    section1.style.color = "#f9f9f9";
    section2.style.background = "#333333";
    section2.style.color = "#f9f9f9";
    section3.style.background = "#333333";
    section3.style.color = "#f9f9f9";
    section4.style.background = "#333333";
    section4.style.color = "#f9f9f9";
    section5.style.background = "#333333";
    section5.style.color = "#f9f9f9";
    menu.style.background = "#000";
    modeButton.textContent = "Light Mode 💡";
  } else {
    main.style.background = "#fff";
    header.style.background = "#333333";
    footer.style.background = "#333333";
    section1.style.background = "#f9f9f9";
    section1.style.color = "#000";
    section2.style.background = "#f9f9f9";
    section2.style.color = "#000";
    section3.style.background = "#f9f9f9";
    section3.style.color = "#000";
    section4.style.background = "#f9f9f9";
    section4.style.color = "#000";
    section5.style.background = "#f9f9f9";
    section5.style.color = "#000";
    menu.style.background = "#333333";
    modeButton.textContent = "Dark Mode 🌝 ";
  }
});

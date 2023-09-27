let oLastModif = new Date(document.lastModified);
document.querySelector("#lastModified").textContent = oLastModif;

const options = {
    year: "numeric"
};
document.querySelector("#yearDate").innerHTML =  new Date().toLocaleDateString("en-US", options);



//HAMBURGUER BUTTON//
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});
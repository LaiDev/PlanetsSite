
let mercuryStructure = () => {

//Get a reference to the planet image and change it to the one showing the planet structure 

let mercuryImg = document.querySelector("#mercuryImg");

mercuryImg.src = "../assets/planet-mercury-internal.svg";



//Get a reference to the planet description and change it to the text about the internal planet structure

let planetDescription = document.querySelector("#planetDescription").childNodes[3];

planetDescription.innerText = "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density."

}
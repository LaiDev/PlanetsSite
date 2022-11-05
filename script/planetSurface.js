
let mercurySurface = () => {

  //Makes the geology marker visible

  let geologyImg = document.querySelector(".geology");

  geologyImg.style.display = "block";


  let mercuryImg = document.querySelector("#mercuryImg");

  mercuryImg.src = "../assets/planet-mercury.svg";

  //Get a reference to the planet description and changes it to the text about the internal planet structure

  let planetDescription =
    document.querySelector("#planetDescription").childNodes[3];

  planetDescription.innerText =
    "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.";
};

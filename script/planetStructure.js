let planetDescription =
  document.querySelector("#planetDescription p" );

let hideGeologyMarker = () => {
  //Hides the geology marker

  let geologyImg = document.querySelector(".geology");

  geologyImg.style.display = "none";
};

let mercuryStructure = () => {
  //Get a reference to the planet image and change it to the one showing the planet structure

hideGeologyMarker();

  let mercuryImg = document.querySelector("#mercuryImg");

  mercuryImg.src = "../assets/planet-mercury-internal.svg";

  //Get a reference to the planet description and change it to the text about the internal planet structure

  

  planetDescription.innerText =
    "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.";
};

let venusStructure = () => {
  hideGeologyMarker();

  let venusImg = document.querySelector("#venusImg");

  venusImg.src = "../assets/planet-venus-internal.svg";

  planetDescription.innerText =
    "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.";
};

let earthStructure = () => {
  hideGeologyMarker();

  let earthImg = document.querySelector("#earthImg");

  earthImg.src = "../assets/planet-earth-internal.svg";

  planetDescription.innerText =
    "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.";
};

let marsStructure = () => {
  hideGeologyMarker();

  let marsImg = document.querySelector("#marsImg");

  marsImg.src = "../assets/planet-mars-internal.svg";

  planetDescription.innerText =
    "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.";
};

let jupiterStructure = () => {
  hideGeologyMarker();

  let jupiterImg = document.querySelector("#jupiterImg");

  jupiterImg.src = "../assets/planet-jupiter-internal.svg";

  planetDescription.innerText =
    "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.";
};
let saturnStructure = () => {
  hideGeologyMarker();

  let saturnImg = document.querySelector("#saturnImg");

  saturnImg.src = "../assets/planet-saturn-internal.svg";

  planetDescription.innerText =
    "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.";
};

let uranusStructure = () => {
  hideGeologyMarker();

  let uranusImg = document.querySelector("#uranusImg");

  uranusImg.src = "../assets/planet-uranus-internal.svg";

  planetDescription.innerText =
    "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.";
};

let neptuneStructure = () => {
  hideGeologyMarker();

  let neptuneImg = document.querySelector("#neptuneImg");

  neptuneImg.src = "../assets/planet-neptune-internal.svg";

  planetDescription.innerText =
    "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.";
};

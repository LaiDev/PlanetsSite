

let showGeologyMarker = () => {
    //Makes the geology marker visible
    
    let geologyImg = document.querySelector(".geology");
    
    geologyImg.style.display = "block";
    
}

let mercurySurface = () => {
showGeologyMarker();

  let mercuryImg = document.querySelector("#mercuryImg");

  mercuryImg.src = "../assets/planet-mercury.svg";

  //Get a reference to the planet description and changes it to the text about the internal planet structure

  

  planetDescription.innerText =
    "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.";
};

let venusSurface = () => {

showGeologyMarker();

    let venusImg = document.querySelector("#venusImg");

    venusImg.src = "../assets/planet-venus.svg"

    planetDescription.innerText = "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii."
}

let earthSurface = () => {
    showGeologyMarker();
    
      let earthImg = document.querySelector("#earthImg");
    
      earthImg.src = "../assets/planet-earth.svg";
    
      //Get a reference to the planet description and changes it to the text about the internal planet structure
    
      
    
      planetDescription.innerText =
        "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.";
    };

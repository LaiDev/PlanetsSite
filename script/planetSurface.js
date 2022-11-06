

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

    let marsSurface = () => {
        showGeologyMarker();
        
          let marsImg = document.querySelector("#marsImg");
        
          marsImg.src = "../assets/planet-mars.svg";
        
          //Get a reference to the planet description and changes it to the text about the internal planet structure
        
          
        
          planetDescription.innerText =
            "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.";
        };

        let jupiterSurface = () => {
            showGeologyMarker();
            
              let jupiterImg = document.querySelector("#jupiterImg");
            
              jupiterImg.src = "../assets/planet-jupiter.svg";
            
              //Get a reference to the planet description and changes it to the text about the internal planet structure
            
              
            
              planetDescription.innerText =
                "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.";
            };

            let saturnSurface = () => {
                showGeologyMarker();
                
                  let saturnImg = document.querySelector("#saturnImg");
                
                  saturnImg.src = "../assets/planet-saturn.svg";
                
                  //Get a reference to the planet description and changes it to the text about the internal planet structure
                
                  
                
                  planetDescription.innerText =
                    "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust. ";
                };

                let uranusSurface = () => {
                    showGeologyMarker();
                    
                      let uranusImg = document.querySelector("#uranusImg");
                    
                      uranusImg.src = "../assets/planet-uranus.svg";
                    
                      //Get a reference to the planet description and changes it to the text about the internal planet structure
                    
                      
                    
                      planetDescription.innerText =
                        "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.";
                    };

                    let neptuneurface = () => {
                        showGeologyMarker();
                        
                          let neptuneImg = document.querySelector("#neptuneImg");
                        
                          neptuneImg.src = "../assets/planet-neptune.svg";
                        
                          //Get a reference to the planet description and changes it to the text about the internal planet structure
                        
                          
                        
                          planetDescription.innerText =
                            "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.";
                        };
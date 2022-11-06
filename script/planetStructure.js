let planetDescription = document.querySelector("#planetDescription").childNodes[3];

let hideGeologyMarker = () => {
//Hides the geology marker

let geologyImg = document.querySelector(".geology");
    
geologyImg.style.display = "none"
}

let mercuryStructure = () => {

//Get a reference to the planet image and change it to the one showing the planet structure 

let mercuryImg = document.querySelector("#mercuryImg");

mercuryImg.src = "../assets/planet-mercury-internal.svg";



//Get a reference to the planet description and change it to the text about the internal planet structure

let planetDescription = document.querySelector("#planetDescription").childNodes[3];

planetDescription.innerText = "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density."

}

let venusStructure = () => {
hideGeologyMarker();

let venusImg = document.querySelector("#venusImg");

venusImg.src = "../assets/planet-venus-internal.svg";

planetDescription.innerText = "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate."

}

let earthStructure = () => {
    hideGeologyMarker();
    
    let earthImg = document.querySelector("#earthImg");
    
    earthImg.src = "../assets/planet-earth-internal.svg";
    
    planetDescription.innerText = "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle."
    }

    let marsStructure = () => {
        hideGeologyMarker();
        
        let marsImg = document.querySelector("#marsImg");
        
        marsImg.src = "../assets/planet-mars-internal.svg";
        
        planetDescription.innerText = "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur."
        }
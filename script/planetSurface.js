
let mercurySurface = () => {

    //Get a reference to the planet image and change it to the one showing the planet structure 
    
    let mercuryImg = document.querySelector("#mercuryImg");
    
    let surfaceImg = document.createElement("img")

    surfaceImg.src = "../assets/geology-mercury.png";
    
    
    surfaceImg.classList.add("work")
    
    mercuryImg.appendChild(surfaceImg)

    console.log(surfaceImg)

    
    
    //Get a reference to the planet description and change it to the text about the internal planet structure
    
    let planetDescription = document.querySelector("#planetDescription").childNodes[3];
    
    planetDescription.innerText = "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s."
    
    }
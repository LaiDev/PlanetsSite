
let topNav = document.querySelector('.navLinks')

function toggleNavBar(){

    let geologyImg = document.querySelector(".geology");
    
geologyImg.style.display = "none"


    if (topNav.style.display === "none") {
        topNav.style.display = "block";
        } else {
            topNav.style.display = "none";
          }
}
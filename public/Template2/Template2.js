// const currentAd = localStorage.getItem("adNum");

function addElements () {
    if (ads[localStorage.getItem("adNum")].photos.length != 0)
    for (let i = 0; i < ads[localStorage.getItem("adNum")].photos.length; i++) {
        const newDiv = document.createElement("div");
        newDiv.className= "card";
        newDiv.style.backgroundImage ="url('"+ads[localStorage.getItem("adNum")].photos[i]+"')";
      
        const currentDiv = document.getElementById("div1");
        document.getElementById("list").insertBefore(newDiv, currentDiv);
    }

    if (ads[localStorage.getItem("adNum")].texts.length != 0)
    for (let i = 0; i < ads[localStorage.getItem("adNum")].texts.length; i++) {
        const newDiv = document.createElement("span");
        newDiv.className= "textLine";
        newDiv.textContent = ads[localStorage.getItem("adNum")].texts[i];
      
        const currentDiv = document.getElementById("span1");
        document.getElementById("text").insertBefore(newDiv, currentDiv);
    }

}

addElements ()
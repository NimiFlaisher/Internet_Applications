// const currentAd = localStorage.getItem("adNum");

function addElements () {
    const getter = ads.find( a => a.id == localStorage.getItem("adNum"));
    if (getter.photos.length != 0)
    for (let i = 0; i < getter.photos.length; i++) {
        const newDiv = document.createElement("div");
        newDiv.className= "card";
        newDiv.style.backgroundImage ="url('"+getter.photos[i]+"')";
      
        const currentDiv = document.getElementById("div1");
        document.getElementById("list").insertBefore(newDiv, currentDiv);
    }

    if (getter.texts.length != 0)
    for (let i = 0; i < getter.texts.length; i++) {
        const newDiv = document.createElement("span");
        newDiv.className= "textLine";
        newDiv.textContent = getter.texts[i];
      
        const currentDiv = document.getElementById("span1");
        document.getElementById("text").insertBefore(newDiv, currentDiv);
    }

}

addElements ()
const currentAd = localStorage.getItem("adNum");
console.log(currentAd);

function addElements () {
    console.log(ads[currentAd].photos.length);
    if (ads[currentAd].photos.length != 0)
    for (let i = 0; i < ads[currentAd].photos.length; i++) {
        const newDiv = document.createElement("div");
        newDiv.className= "option";
        newDiv.style.backgroundImage ="url('"+ads[currentAd].photos[i]+"')";
      
        const currentDiv = document.getElementById("div1");
        document.getElementById("opt").insertBefore(newDiv, currentDiv);
    }

    if (ads[currentAd].texts.length != 0)
    for (let i = 0; i < ads[currentAd].texts.length; i++) {
        const newDiv = document.createElement("span");
        newDiv.className= "textLine";
        newDiv.textContent = ads[currentAd].texts[i];
      
        const currentDiv = document.getElementById("span1");
        document.getElementById("text").insertBefore(newDiv, currentDiv);
    }

}

addElements();

$(".option").click(function () {
    $(".option").removeClass("active");
    $(this).addClass("active");
 });
 
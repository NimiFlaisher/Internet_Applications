function addElements () {
    for (let i = 0; i < ads.ad_2.photos.length; i++) {
        const newDiv = document.createElement("div");
        newDiv.className= "option";
        newDiv.style.backgroundImage ="url('"+ads.ad_2.photos[i]+"')"
      
        const currentDiv = document.getElementById("div1");
        document.getElementById("opt").insertBefore(newDiv, currentDiv);
    }
}

addElements();

$(".option").click(function () {
    $(".option").removeClass("active");
    $(this).addClass("active");
 });
 
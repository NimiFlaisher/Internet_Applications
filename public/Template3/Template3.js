function addElements () {
  const getter = ads.find( a => a.id == localStorage.getItem("adNum"));
  
  if (getter.photos.length != 0)
  for (let i = 0; i < getter.photos.length; i++) {
      const newDiv = document.createElement("div");
      newDiv.className= "icon-cards__item";
      newDiv.style.backgroundImage ="url('"+getter.photos[i]+"')";
      const currentDiv = document.getElementById("div1");
      document.getElementById("container").insertBefore(newDiv, currentDiv);
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

addElements();


function classToggle() {
  var el = document.querySelector('.icon-cards__content');
  el.classList.toggle('step-animation');
}

document.querySelector('#toggle-animation').addEventListener('click', classToggle);
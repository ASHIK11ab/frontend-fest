let modal = document.getElementById("modal");
let form = document.getElementById("modal-form")
let contact = document.getElementById("contact-icon");
let closeBtn = document.getElementById("close-btn");

let home = document.getElementById("home");
let product = document.getElementById("product");
let contact_icon = document.getElementById("contact");

contact.addEventListener('click', function() {
  if(form.className == "closed") {
    form.style.top = "10%";
    form.className = "opened";
    modal.className = "bg-dark-viewport";
  }
});

function closeForm() {
  form.style.top = "-800px";
  form.className = "closed";
  modal.classList.remove('bg-dark-viewport');
}

window.addEventListener('click', function(event) {
  if(event.target == modal && form.className == "opened") {
    closeForm();
  }
});

closeBtn.addEventListener('click', closeForm);

function reset_highligts() {
  home.style.filter = "invert(50%) sepia(0%) saturate(40%) hue-rotate(176deg) brightness(105%) contrast(113%)";
  product.style.filter = "invert(50%) sepia(0%) saturate(40%) hue-rotate(176deg) brightness(105%) contrast(113%)";
  contact_icon.style.filter = "invert(50%) sepia(0%) saturate(40%) hue-rotate(176deg) brightness(105%) contrast(113%)";
}

function highlight(element) {
  element.style.filter = "invert(47%) sepia(100%) saturate(2069%) hue-rotate(173deg) brightness(102%) contrast(105%)";
}

home.onclick = function() {
  reset_highligts();
  home.style.filter = "invert(47%) sepia(100%) saturate(2069%) hue-rotate(173deg) brightness(102%) contrast(105%)";
}

product.onclick = function() {
  reset_highligts();
  product.style.filter = "invert(47%) sepia(100%) saturate(2069%) hue-rotate(173deg) brightness(102%) contrast(105%)";
}

contact_icon.onclick = function() {
  reset_highligts();
  contact_icon.style.filter = "invert(47%) sepia(100%) saturate(2069%) hue-rotate(173deg) brightness(102%) contrast(105%)";
}

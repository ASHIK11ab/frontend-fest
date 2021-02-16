let modal = document.getElementById("modal");
let form = document.getElementById("modal-form")
let contact = document.getElementById("contact-icon");
let closeBtn = document.getElementById("close-btn")

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
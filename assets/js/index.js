// Toggle Menu Functionaliy Start
$(document).ready(function () {
  $(".menu-toggle-btn").click(function () {
    $("body").addClass("menuToggle");
  });
  $(".menu-close-btn").click(function () {
    $("body").removeClass("menuToggle");
  });
});
// Toggle Menu Functionaliy End


// Header Scroll JS Start
$(document).ready(function () {
  $(window).scroll(function () {
    var header = $("header");
    header.toggleClass("fixed-header", $(window).scrollTop() > 0);
  });
});
// Header Scroll JS End

// AOS JS Start
AOS.init();
// AOS JS Start




// Newsletter Validations JS Start
function validateNews() {
  const emailInput = document.getElementsByClassName('email-signup-input').value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  if (!emailInput) {
    alert('E-Mail darf nicht leer sein');
  } else if (!emailRegex.test(emailInput)) {
    alert('Ungültige E-Mail-Adresse! Bitte geben Sie eine gültige Adresse ein.');
  } else {
    alert('Registrierung erfolgreich! DANKE.');
  }
}
// Newsletter Validations JS End



// Select all accordion headers
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    // Toggle active class for header
    header.classList.toggle("active");

    // Toggle visibility of the accordion body
    const body = header.nextElementSibling;
    if (body.style.display === "block") {
      body.style.display = "none";
    } else {
      body.style.display = "block";
    }
  });
});


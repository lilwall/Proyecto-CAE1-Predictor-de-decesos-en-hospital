/*!
* Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };
  
    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

  //Habilitar boton de Analizar
  function enableButton() {
    if (
      document.querySelector("#Gendera").value === "" ||
      document.querySelector("#Hypertensive").value === "" ||  
      document.querySelector("#Deficiencyanemias").value === "" || 
      document.querySelector("#Depression").value === "" ||
      document.querySelector("#Hyperlipemia").value === "" ||
      document.querySelector("#Renal_Failure").value === "" || 
      document.querySelector("#COPD").value === "" || 
      document.querySelector("#Temperature").value === "" ||
      document.querySelector("#RBC").value === "" ||
      document.querySelector("#MCHC").value === "" ||
      document.querySelector("#INR").value === "" || 
      document.querySelector("#Blood_calcium").value === "" || 
      document.querySelector("#Anion_gap").value === "" || 
      document.querySelector("#Magnesium_ion").value === "" || 
      document.querySelector("#PH").value === "" || 
      document.querySelector("#Lactic_acid").value === "")
    {
      document.querySelector("#detector-submit").disabled = true;
    } else { 
      document.querySelector("#detector-submit").disabled = false;
    }
  };

  document.querySelector("#Gendera").onchange = enableButton;
  document.querySelector("#Hypertensive").onchange = enableButton;
  document.querySelector("#Deficiencyanemias").onchange = enableButton;
  document.querySelector("#Depression").onchange = enableButton;
  document.querySelector("#Hyperlipemia").onchange = enableButton;
  document.querySelector("#Renal_Failure").onchange = enableButton;
  document.querySelector("#COPD").onchange = enableButton;
  document.querySelector("#Temperature").onkeyup = enableButton;
  document.querySelector("#RBC").onkeyup = enableButton;
  document.querySelector("#MCHC").onkeyup = enableButton;
  document.querySelector("#INR").onkeyup = enableButton;
  document.querySelector("#Blood_calcium").onkeyup = enableButton;
  document.querySelector("#Anion_gap").onkeyup = enableButton;
  document.querySelector("#Magnesium_ion").onkeyup = enableButton;
  document.querySelector("#PH").onkeyup = enableButton;
  document.querySelector("#Lactic_acid").onkeyup = enableButton;
});

$(document).ready(function() {
  $(".title").lettering();
  $(".button").lettering();
});

$(document).ready(function() {
  animation();
}, 1000);

$('.button').click(function() {
  animation();
});

function animation() {
  var title1 = new TimelineMax();
  title1.to(".button", 0, {visibility: 'hidden', opacity: 0})
  title1.staggerFromTo(".title span", 0.5, 
  {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
  {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
  title1.to(".button", 0.2, {visibility: 'visible' ,opacity: 1})
}
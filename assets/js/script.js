//init AOS
AOS.init();

// navbar scroll change
// Get navbar class and wrapper div
const navbar = document.querySelector(".navbar");
const wrapper = document.getElementById("wrapper");
const navBtns = document.querySelectorAll("#nav-btn");

// Wrapper event listener to check for scrolling
wrapper.addEventListener("scroll", () => {
  // if scrolled above 72px, add bg-primary class
  if (wrapper.scrollTop >= 72) {
    navbar.classList.add("bg-secondary");
    //navbar.classList.add("navbar-shrink");
    navBtns.forEach((btn) => {
      btn.classList.remove("btn-nav-landing");
      btn.classList.add("btn-nav-scrolling");
    });
  } else if (wrapper.scrollTop < 72) {
    navbar.classList.remove("bg-secondary");
    //navbar.classList.remove("navbar-shrink");
    navBtns.forEach((btn) => {
      btn.classList.remove("btn-nav-scrolling");
      btn.classList.add("btn-nav-landing");
    });
  }
  AOS.refresh();
});

// navbar icon change
const navHam = document.getElementById("navbar-hamburger");
const icons = document.querySelectorAll(".icon");

navHam.addEventListener("click", () => {
  navHam.disabled = true;

  icons.forEach((icon) => {
    icon.classList.toggle("active");
  });
  if (wrapper.scrollTop < 72) {
    navbar.classList.toggle("bg-secondary");
    navBtns.forEach((btn) => {
      btn.classList.toggle("btn-nav-landing");
      btn.classList.toggle("btn-nav-scrolling");
    });
  }

  setTimeout(() => {
    navHam.disabled = false;
  }, 400);
});

// Removing animation attributes from background

setTimeout(() => {
  const landingBg = document.getElementById("landing-bg");
  landingBg.removeAttribute("data-aos");
}, 2000);

// Checking for form validation

const form = document.querySelector(".needs-validation");

form.addEventListener("submit", (event) => {
  if (!event.target.checkValidity()) {
    console.log("form not valid");
    event.preventDefault();
    event.stopPropagation();
  } else {
    console.log("form valid");
    alert("Message was sent!");
  }
  form.classList.add("was-validated");
});

// Add a window resize event listener
window.addEventListener("resize", () => {
  // Define your breakpoint
  const breakpoint = 990;

  // Check if window width is less than or equal to the breakpoint
  if (window.innerWidth <= breakpoint) {
    navbar.classList.add("navbar-shrink");
    // Select all elements with class 'vr'
    const vrElements = document.querySelectorAll(".vr");

    // Loop through each 'vr' element
    vrElements.forEach((vrElement) => {
      // Create a new 'hr' element
      const hrElement = document.createElement("hr");

      // Copy the classes from the 'vr' element to the 'hr' element
      hrElement.className = "hul mb-5 mt-5 rvr";

      // Replace the 'vr' element with the 'hr' element in the DOM
      vrElement.parentNode.replaceChild(hrElement, vrElement);
    });
  } else if (window.innerWidth > breakpoint) {
    navbar.classList.remove("navbar-shrink");
    // Select all elements with class 'rvr'
    const rvrElements = document.querySelectorAll(".rvr");

    // Loop through each 'rvr' element
    rvrElements.forEach((rvrElement) => {
      // Create a new 'vr' element
      const vrElement = document.createElement("div");

      // Copy the classes from the 'rvr' element to the 'vr' element
      vrElement.className = "vr";

      // Replace the 'rvr' element with the 'vr' element in the DOM
      rvrElement.parentNode.replaceChild(vrElement, rvrElement);
    });
  }
});

// Check on DOMContentLoaded
window.addEventListener("DOMContentLoaded", () => {
  const breakpoint = 992;
  if (window.innerWidth <= breakpoint) {
    const vrElements = document.querySelectorAll(".vr");
    vrElements.forEach((vrElement) => {
      const hrElement = document.createElement("hr");
      hrElement.className = "hul mb-5 mt-5 rvr";
      vrElement.parentNode.replaceChild(hrElement, vrElement);
    });
  }
  if (wrapper.scrollTop >= 72) {
    navbar.classList.add("bg-secondary");
    navBtns.forEach((btn) => {
      btn.classList.remove("btn-nav-landing");
      btn.classList.add("btn-nav-scrolling");
    });
  }
});

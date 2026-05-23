function moveRight(button){

    const row = button.closest(".slider-row");

    const slider = row.querySelector(".menu-wrapper") 
                 || row.querySelector(".wrapper");

    let scrollAmount = 320;

    if(slider.classList.contains("wrapper")){
        scrollAmount = 350;
    }

    slider.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });
}


function moveLeft(button){

    const row = button.closest(".slider-row");

    const slider = row.querySelector(".menu-wrapper") 
                 || row.querySelector(".wrapper");

    let scrollAmount = 320;

    if(slider.classList.contains("wrapper")){
        scrollAmount = 350;
    }

    slider.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
    });
}

function toggleMenu() {
  const navbar = document.querySelector(".navbar");
  const menuIcon = document.querySelector(".menu-icon");

  navbar.classList.toggle("active");

  if (navbar.classList.contains("active")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  } else {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  }
}


function moveRight(button){

    const row = button.closest(".slider-row");

    const slider = row.querySelector(".menu-wrapper") 
                 || row.querySelector(".wrapper");

    slider.scrollBy({
        left: 350,
        behavior: "smooth"
    });
}

function moveLeft(button){

    const row = button.closest(".slider-row");

    const slider = row.querySelector(".menu-wrapper") 
                 || row.querySelector(".wrapper");

    slider.scrollBy({
        left: -350,
        behavior: "smooth"
    });
}
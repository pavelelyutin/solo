document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".header__nav");
  
    // Открыте и закрытие бургер-меню
    burger.addEventListener("click", function () {
      burger.classList.toggle("active");
      nav.classList.toggle("open");
      document.body.classList.toggle("body-hidden");
    });
  
    // Скрытие меню при нажатии на пункт меню
    nav.addEventListener("click", function (event) {
      if (event.target) {
        burger.classList.remove("active");
        nav.classList.remove("open");
        document.body.classList.remove("body-hidden");
      }
    });
})
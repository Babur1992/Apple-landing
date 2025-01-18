const burger = document.querySelector(".burger");
const menuList = document.querySelector(".menu-list");
burger.addEventListener("click", () => {
  // body

  burger.classList.toggle("active");
  menuList.classList.toggle("open");
});

// =========IMAGE GALLERY APPLE DESCTOP==========

const btnDecktop = document.querySelector(".btn-decktop");
const btnMacbook = document.querySelector(".btn-macbook");
const galleryDesctop = document.querySelector(".gallery-desctop");
const gallery = document.querySelector(".gallery");

btnDecktop.addEventListener("click", () => {
  // Показываем контейнер с картинками для десктопа
  galleryDesctop.style.display = "block";
  gallery.style.display = "none";
});

btnMacbook.addEventListener("click", () => {
  // Показываем контейнер с картинками для макбуков
  galleryDesctop.style.display = "none";
  gallery.style.display = "block";
  gallery.style.transitionDuration = 2;
});



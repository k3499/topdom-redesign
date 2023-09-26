window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  const logo = document.querySelector(".logo");

  // Проверяем, насколько пользователь прокрутил страницу вниз
  if (window.scrollY > 0) {
    // Добавляем новый класс к элементу
    header.classList.add("header-white");
    logo.classList.add("logo_black");
    logo.classList.remove("logo_white");
  } else {
    // Если пользователь прокрутил обратно вверх, удаляем класс
    header.classList.remove("header-white");
    logo.classList.remove("logo_black");
    logo.classList.add("logo_white");
  }
});

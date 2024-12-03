const btnDarkMode = document.querySelector(".dark-mode-btn");

// 1. Проверка темной темы на уровне системных настроек
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  btnDarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");
}

// 2. Проверка темной темы в localStorage
if (localStorage.getItem("darkMode") === "dark") {
  btnDarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
  btnDarkMode.classList.remove("dark-mode-btn--active");
  document.body.classList.remove("dark");
}

// Если меняются системные настройки, меняем тему
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    const newColorScheme = event.matches ? "dark" : "light";

    if (newColorScheme === "dark") {
      btnDarkMode.classList.add("dark-mode-btn--active");
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "dark");
    } else {
      btnDarkMode.classList.remove("dark-mode-btn--active");
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "light");
    }
  });

// Включение ночного режима по кнопке
btnDarkMode.onclick = function () {
  btnDarkMode.classList.toggle("dark-mode-btn--active");
  const isDark = document.body.classList.toggle("dark");

  if (isDark) {
    localStorage.setItem("darkMode", "dark");
  } else {
    localStorage.setItem("darkMode", "light");
  }
};

// Анимация появления элементов на странице "Skills"
document.addEventListener("DOMContentLoaded", function () {
  const skillItems = document.querySelectorAll(".content-list__item");
  skillItems.forEach((item, index) => {
    item.style.opacity = 0;
    item.style.transform = "translateY(20px)";
    setTimeout(() => {
      item.style.transition = "all 0.6s ease-out";
      item.style.opacity = 1;
      item.style.transform = "translateY(0)";
    }, index * 300);
  });
});

// Анимация для страницы "Project Page"
document.addEventListener("DOMContentLoaded", function () {
  const projectDetails = document.querySelector(".project-details");
  if (projectDetails) {
    projectDetails.style.opacity = 0;
    projectDetails.style.transform = "scale(0.9)";
    setTimeout(() => {
      projectDetails.style.transition = "all 0.8s ease-in-out";
      projectDetails.style.opacity = 1;
      projectDetails.style.transform = "scale(1)";
    }, 300);
  }
});

// Плавное проявление элементов на главной странице
document.addEventListener("DOMContentLoaded", function () {
  const headerTitle = document.querySelector(".header__title");
  const headerText = document.querySelector(".header__text");

  if (headerTitle && headerText) {
    [headerTitle, headerText].forEach((element, index) => {
      element.style.opacity = 0;
      setTimeout(() => {
        element.style.transition = "opacity 1s ease-in-out";
        element.style.opacity = 1;
      }, index * 500);
    });
  }
});

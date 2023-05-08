var languageSwitcher = document.querySelector(".language-switcher");
var languages = document.querySelector(".languages");
languageSwitcher.addEventListener("click", function () {
  languages.classList.toggle("show");
  //remove nav bar
  navTrigger.classList.remove("active");
  navBar.classList.remove("show");
  //remove whatsapp widget
  whatsappWidget.classList.remove("show");
});
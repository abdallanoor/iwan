import translations from "./translations.js";

const languageSelector = document.querySelectorAll(".language");
for (var i = 0; i < languageSelector.length; i++) {
  languageSelector[i].addEventListener("click", (e) => {
    setLanguage(e.target.value);
    localStorage.setItem("lang", e.target.value);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("lang") || "en";
  setLanguage(language);
  
  // if (localStorage.getItem("lang") == "ar") {
  //   var select = document.getElementById("languageselect");
  //   var option;
  //   for (var i = 0; i < select.options.length; i++) {
  //     option = select.options[i];
  //     if (option.value == "ar") {
  //       option.selected = true;
  //     }
  //   }
  // }
});

const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    element.textContent = translations[language][translationKey];
  });
  //Style
  //dir
  document.dir = language === "ar" ? "rtl" : "ltr";
  //dir - navbar
  var navBar = document.querySelector(".nav-bar");
  navBar.dir = language === "ar" ? "rtl" : "ltr";
  //letterSpacing - a
  var spaceOme = document.querySelectorAll("a");
  for (var i = 0; i < spaceOme.length; i++) {
    spaceOme[i].style.letterSpacing = language === "ar" ? "0" : "1px";
  }
  //Footer - h4
  var spaceTwo = document.querySelectorAll("h4");
  for (var i = 0; i < spaceTwo.length; i++) {
    spaceTwo[i].style.letterSpacing = language === "ar" ? "0" : "1.6px";
    spaceTwo[i].style.fontSize = language === "ar" ? "20px" : "16px";
  }
  //contactIcons - Margin
  var contactIcons = document.querySelectorAll(".contactIcons");
  for (var i = 0; i < contactIcons.length; i++) {
    contactIcons[i].style.marginLeft = language === "ar" ? "10px" : "0px";
    contactIcons[i].style.marginRight = language === "ar" ? "0px" : "10px";
  }
  //change font size in website > arabic
  var all = document.querySelector("*");
  all.style.fontSize = language === "ar" ? "17px" : "16px";

  //Simble In How Works
  // var simble = document.querySelectorAll("p");
  // for (var i = 0; i < simble.length; i++) {
  //   simble[i].style.letterSpacing = language === "ar" ? "0" : "2px";
  // }
};

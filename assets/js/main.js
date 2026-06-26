document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  var pills = document.querySelectorAll(".pill");
  var blocks = document.querySelectorAll(".product-category-block");
  pills.forEach(function (pill) {
    pill.addEventListener("click", function () {
      pills.forEach(function (p) { p.classList.remove("active"); });
      pill.classList.add("active");
      var target = pill.getAttribute("data-filter");
      blocks.forEach(function (block) {
        if (target === "all" || block.getAttribute("data-category") === target) {
          block.style.display = "";
        } else {
          block.style.display = "none";
        }
      });
    });
  });

  var lightbox = document.querySelector(".lightbox");
  if (lightbox) {
    var lightboxImg = lightbox.querySelector("img");
    var lightboxCaption = lightbox.querySelector(".lightbox-caption");
    document.querySelectorAll("[data-lightbox]").forEach(function (el) {
      el.addEventListener("click", function () {
        lightboxImg.src = el.getAttribute("data-lightbox");
        lightboxCaption.textContent = el.getAttribute("data-caption") || "";
        lightbox.classList.add("open");
      });
    });
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox || e.target.classList.contains("lightbox-close")) {
        lightbox.classList.remove("open");
      }
    });
  }

  var enquiryForm = document.querySelector("#enquiry-form");
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.querySelector("#f-name").value.trim();
      var phone = document.querySelector("#f-phone").value.trim();
      var message = document.querySelector("#f-message").value.trim();
      var text = "Hello Aditya Ayurved, my name is " + name + " (" + phone + "). " + message;
      window.open("https://wa.me/919837421428?text=" + encodeURIComponent(text), "_blank");
    });
  }
});

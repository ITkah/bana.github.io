$(".phone").on("input", function () {
  $(this).val(
    $(this)
      .val()
      .replace(/[A-Za-zА-Яа-яЁё]/, "")
  );
});

$("header ul li").each(function () {
  this_li = $(this);
  if ($(this_li).find("ul").length > 0) {
    $(this_li).append('<div class="arrow_mob"></div>');
  }
});

$(".arrow_mob").on("click", function () {
  $(this).siblings(".sub_menu").slideToggle(200);
});

$(".menu").on("click", function () {
  $(".mob_menu").toggleClass("active_menu");
});

$(".close").on("click", function () {
  $(".mob_menu").removeClass("active_menu");
});

$(".scrollto a").on("click", function (event) {
  event.preventDefault();

  var id = $(this).attr("href"),
    top = $(id).offset().top - 50;

  $("body,html").animate({ scrollTop: top }, 1200);
});

$(".acc-head").on("click", function () {
  $(".accordeon .acc-body").not($(this).next()).slideUp(200);
  $(this).next().slideToggle(200).parent().toggleClass("active_acc");
});

popupBooked = () => {
  const popup = document.getElementById("popup_overlay-booked");
  const popupCloseBtn = document.getElementById("btn_close");
  const popupOpenBtn = document.querySelectorAll(".uslugi_btn");

  popupOpenBtn.forEach(function (item) {
    item.addEventListener("click", function () {
      popup.classList.add("show");
      popup.classList.remove("hide");
    });
  });

  popupCloseBtn.addEventListener("click", function () {
    popup.classList.add("hide");
    popup.classList.remove("show");
  });
};
popupBooked();

popupReviews = () => {
  const popupReviews = document.getElementById("fixed_overlay-reviews");
  const popupCloseBtn = document.getElementById("btn_close");
  const popupOpenBtnReviews = document.getElementById("popup_open-reviews");

  popupOpenBtnReviews.addEventListener("click", function () {
    popupReviews.classList.add("show");
    popupReviews.classList.remove("hide");
  });

  popupCloseBtn.addEventListener("click", function () {
    popupReviews.classList.add("hide");
    popupReviews.classList.remove("show");
  });
};
popupReviews();


window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('.phone'), function(input) {
  var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});
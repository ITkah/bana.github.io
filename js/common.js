$('.phone').on('input', function() {
    $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
});

$("header ul li").each(function() {
    this_li = $(this);
    if ($(this_li).find("ul").length > 0) {
      $(this_li).append('<div class="arrow_mob"></div>')
    }
});

$(".arrow_mob").on("click", function(){
    $(this).siblings(".sub_menu").slideToggle(200);
});

$(".menu").on("click", function(){
    $(".mob_menu").toggleClass("active_menu");
});


$(".close").on("click", function(){
    $(".mob_menu").removeClass("active_menu");
});

$('.scrollto a').on('click', function() {

    event.preventDefault();

    var id  = $(this).attr('href'),
 
    top = $(id).offset().top - 50;

    $('body,html').animate({scrollTop: top}, 1200);
    
});


$('.acc-head').on("click", function() {
    $('.accordeon .acc-body').not($(this).next()).slideUp(200);
    $(this).next().slideToggle(200).parent().toggleClass("active_acc");
});
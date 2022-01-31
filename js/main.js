$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});


$('.owl-carousel').owlCarousel({
    margin: 32,
    items: 1,
    nav: false,
    resposiveClass: true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false,
        },
        1000:{
            items:1,
            nav: false,
        }
    }
});


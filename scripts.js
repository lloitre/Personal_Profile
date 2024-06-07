$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('.scroll-up-b').addClass("show");
        }else{
            $('.scroll-up-b').removeClass("show");
        }
    });

    //slide-up script.

    $('.scroll-up-b').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // Typing animation

    var typed = new Typed(".typing", {
        strings: ["IT Technician", "....& learning to code for fun :)", ""],
        typeSpeed: 10,
        backSpeed: 90,
        loop: true
    });

    //toggle menu-navbar script.
    
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

});

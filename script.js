$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("bg-rose-600");
            $('.navbar').addClass("pt-1");
            $('.navbarspan').removeClass("text-rose-600");
            $('ul li a').addClass("hover:text-blue-500");
            $('.go-to-top').removeClass("hidden");


            

        }
        else{
            $('.navbar').removeClass("bg-rose-600");
            $('.navbar').removeClass("pt-1");
            $('.navbarspan').addClass("text-rose-600");
            $('ul li a').removeClass("hover:text-blue-500");
            $('.go-to-top').addClass("hidden");
            
        }

    });

    

    

});

function menuBtn() {
    var element = document.getElementById("mobnav");
    var x = document.getElementsByClassName("menu-btn i");
    element.classList.toggle("active");
    x.classList.toggle("active");
  } 




  $('.owl-carousel').owlCarousel({
    
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

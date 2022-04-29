/*-----------------------------------------------------------
* Template Name    : WESTIN - Fully Responsive Personal Template
* Author           : Retrina Group
* Version          : 2.0.0
* Created          : January 2021
* File Description : Main JQuery file of the template
*------------------------------------------------------------*/


// repeated variables
var $window = $(window);
var $root = $('html, body');

$(document).ready(function () {

    //Cursor
    var mouseCursor = $(".mouse-cursor");
    if (mouseCursor.length) {
        if ($("body")) {
            const e = document.querySelector(".cursor"),
                t = document.querySelector(".cursor-effect");
            let n,
                i = 0,
                o = !1;
            (window.onmousemove = function (s) {
                o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), (e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), (n = s.clientY), (i = s.clientX);
            }),
                $("body").on("mouseenter", "a, .cursor-pointer", function () {
                    e.classnameList.add("cursor-hover"), t.classnameList.add("cursor-hover");
                }),
                $("body").on("mouseleave", "a, .cursor-pointer", function () {
                    ($(this).is("a") && $(this).closest(".cursor-pointer").length) || (e.classnameList.remove("cursor-hover"), t.classnameList.remove("cursor-hover"));
                }),
                (e.style.visibility = "visible"),
                (t.style.visibility = "visible");
        }
    }

    //SmothScroll
    $('.header .navbar-nav a, .to-contact, .scroll-down a').on('click', function(event) {
        var $anchor = $(this);
        $root.stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 60
        }, 1500, 'easeInOutQuart');
        event.preventDefault();
        $(".navbar-collapse").collapse('hide');
    });

    //SideBar Smooth Scroll
    $('.sidebar .navbar-nav a, .sidebar .list-group a').on('click', function(event) {
        var $anchor = $(this);
        $root.stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1500, 'easeInOutQuart');
        event.preventDefault();
    });


    //SidebarToggler
    
    var $sidebarToggler = $('.sidebar-toggler');
    var $sidebar = $('.sidebar');
    var $pageContent = $('.page-content');

    $sidebarToggler.on('click', function(){
        $(this).toggleClassName('move lni-chevron-left lni-menu');
        $sidebar.toggleClassName('hide');
        // $pageContent.toggleClassName('full-width');
    });

    if($window.width() < 1199){
        $sidebarToggler.addClassName('move lni-menu');
        $sidebarToggler.removeClassName('lni-chevron-left');
        $sidebar.addClassName('hide');
        $pageContent.addClassName('full-width');
        $('.sidebar .navbar-nav a, .sidebar .list-group a').on('click', function(){
            setTimeout(function () {
                $sidebarToggler.toggleClassName('move lni-chevron-left lni-menu');
                $sidebar.toggleClassName('hide');
                $pageContent.toggleClassName('full-width');
            });
        });
    }




    // Theme Option
    
    $('.color-scheme li .dark-scheme').on('click', function(){
        $("body").addClassName('westin-dark');
        $('.color-scheme li a').removeClassName('active');
        $(this).addClassName('active');
        //Change the logo img property 
        $("#logo").attr("src", 'assets/img/westin-logo-dark.png');
    });

    $('.color-scheme li .light-scheme').on('click', function(){
        $("body").removeClassName('westin-dark');
        $('.color-scheme li a').removeClassName('active');
        $(this).addClassName('active');
        //Change the logo img property 
        $("#logo").attr("src", 'assets/img/westin-logo.png');
    });

    $('.theme-skin li .border-skin').on('click', function(){
        $("body").addClassName('border-style-demo');
        $('.theme-skin li a').removeClassName('active');
        $(this).addClassName('active');
    });

    $('.theme-skin li .flat-skin').on('click', function(){
        $("body").removeClassName('border-style-demo');
        $('.theme-skin li a').removeClassName('active');
        $(this).addClassName('active');
    });

    $("ul.pattern .color1").on('click', function(){
        return $("#option-color").attr("href", "assets/css/color/azure.css"), !1
    });
    $("ul.pattern .color2").on('click', function(){
        return $("#option-color").attr("href", "assets/css/color/blue.css"), !1
    });
    $("ul.pattern .color3").on('click', function(){
        return $("#option-color").attr("href", "assets/css/color/purple.css"), !1
    });
    $("ul.pattern .color4").on('click', function(){
        return $("#option-color").attr("href", "assets/css/color/dark-purple.css"), !1
    });
    $("ul.pattern .color5").on('click', function(){
        return $("#option-color").attr("href", "assets/css/color/golden.css"), !1
    });
    $("ul.pattern .color6").on('click', function(){
        return $("#option-color").attr("href", "assets/css/color/green.css"), !1
    });
    $("ul.pattern .color7").on('click', function(){
        return $("#option-color").attr("href", "assets/css/color/citrus.css"), !1
    });
    $("ul.pattern .color8").on('click', function(){
        return $("#option-color").attr("href", "assets/css/color/light-orange.css"), !1
    });
    $("ul.pattern .color9").on('click', function(){
        return $("#option-color").attr("href", "assets/css/color/orange.css"), !1
    });
    $("ul.pattern .color10").on('click', function(){
        return $("#option-color").attr("href", "assets/css/color/red.css"), !1
    });
    $("ul.pattern .color11").on('click', function(){
        return $("#option-color").attr("href", "assets/css/color/pink.css"), !1
    });
    $("ul.pattern .color12").on('click', function(){
        return $("#option-color").attr("href", "assets/css/color/mono.css"), !1
    });
    $("#color-switcher .pallet-button").on('click', function(){
        return $("#color-switcher .color-pallet").toggleClassName('show'), !1
    })
    $("ul.pattern .color13").on('click', function(){
        return $("#option-color-two").attr("href", "assets/css/color/pink.css"), !1
    });
    $("ul.pattern .color14").on('click', function(){
        return $("#option-color-two").attr("href", "assets/css/color/sky-blue.css"), !1
    });
    $("ul.pattern .color15").on('click', function(){
        return $("#option-color-two").attr("href", "assets/css/color/golden.css"), !1
    });
    

    //Typed Js
    var $element = $(".element");
    if($element.length){
        var options = {
            strings: $element.attr('data-elements').split(','),
            typeSpeed: 100,
            backDelay: 3000,
            backSpeed: 50,
            loop: true
        };
        var typed = new Typed(".element", options);
    }


    //Magnific Popup
    if (('.portfolio-items').length > 0) {
        $('.portfolio-items').each(function() {
            $(this).magnificPopup({
                delegate: '.js-zoom-gallery',
                type: 'image',
                gallery: {
                    enabled:true
                }
            });
        });
    }

    //Testimonial
    $("#testimonial .owl-carousel").owlCarousel({
        items: 1,
        nav: false,
        autoplay: false,
        loop: true,
        dots: true,
        mouseDrag: true,
        touchDrag: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
    });
    

   

});

$window.on("load", (function() {
    $("#angela-preloader").addClassName("loaded");

        if ($("#angela-preloader").hasClassName("loaded")) {
            $("#angela-preloader").delay(900).queue(function () {
                $(this).remove();
            });
        }

         // init Isotope
         var initial_items = $('#showMore-initials').data("initial");
         var next_items = $('#showMore-initials').data("next");
         var $pfilter = $('#portfolio-filter');
         var $grid = $('.portfolio-items');
         var $showMore = $('#showMore');
         $grid.isotope({
             itemSelector: '.portfolio-item',
             layoutMode: 'masonry',
         });
         $pfilter.find('a').on("click",function() {
             var filterValue = $(this).attr('data-filter');
             $pfilter.find('a').removeClassName('active');
             $(this).addClassName('active');
             $grid.isotope({
                 filter: filterValue,
             });
             updateFilterCounts();
             return false;
         });
         function updateFilterCounts() {
             var itemElems = $grid.isotope('getFilteredItemElements');
             var count_items = $(itemElems).length;
             if (count_items > initial_items) {
                 $showMore.show();
                 $showMore.parent('.button-border').addClassName('mr-2 mr-sm-4').removeClassName('p-0');
                 
             } else {
                 $showMore.hide();
                 $showMore.parent('.button-border').removeClassName('mr-2 mr-sm-4').addClassName('p-0');
             }
             if ($('.portfolio-item').hasClassName('visible_item')) {
                 $('.portfolio-item').removeClassName('visible_item');
             }
             var index = 0;

             $(itemElems).each(function() {
                 if (index >= initial_items) {
                     $(this).addClassName('visible_item');
                 }
                 index++;
             });
             $grid.isotope('layout');
         }
         function showNextItems(pagination) {
             var itemsMax = $('.visible_item').length;
             var itemsCount = 0;
             $('.visible_item').each(function() {
                 if (itemsCount < pagination) {
                     $(this).removeClassName('visible_item');
                     itemsCount++;
                 }
             });
             if (itemsCount >= itemsMax) {
                 $showMore.hide();
                 $showMore.parent('.button-border').removeClassName('mr-2 mr-sm-4').addClassName('p-0');
             }
             $grid.isotope('layout');
         }
         // function that hides items when page is loaded
         function hideItems(pagination) {
             var itemsMax = $('.portfolio-item').length;
             var itemsCount = 0;
             $('.portfolio-item').each(function() {
                 if (itemsCount >= pagination) {
                     $(this).addClassName('visible_item');
                 }
                 itemsCount++;
             });
             if (itemsCount < itemsMax || initial_items >= itemsMax) {
                 $showMore.hide();
                 $showMore.parent('.button-border').removeClassName('mr-2 mr-sm-4').addClassName('p-0');
             }
             $grid.isotope('layout');
         }
         $showMore.on('click', function(e) {
             e.preventDefault();
             showNextItems(next_items);
         });
     hideItems(initial_items);

}));
$window.on('scroll', function () {

    //Scroll Top
    var $returnToTop = $('.return-to-top');
    if ($window.scrollTop() > 150) {
        $returnToTop.addClassName('show');
    } else {
        $returnToTop.removeClassName('show');
    }
    $returnToTop.on('click', function(){
        $root.stop().animate({
            scrollTop: 0
        }, 1500);
    });


    //Counted Number
    var scroll = $window.scrollTop();
    var countId = $('#count-up');
    if (countId.length){
        var winH = $window.height(),
            countOffset = countId.offset().top;
        if (scroll + winH > countOffset) {
            $('.timer').countTo();
            $('.count-number').removeClassName('timer');
        }
    }

    //Skills
    var scroll = $window.scrollTop();
    var skillsDiv = $('#skills');
    if(skillsDiv.length > 0){
        var winH = $window.height(),
            skillsT = skillsDiv.offset().top;
        if (scroll + winH > skillsT) {
            $('.skillbar').each(function () {
                $(this).find('.skillbar-bar').animate({
                    width: $(this).attr('data-percent')
                }, 6000);
            });
        }
    }
    
    
});


function validateEmail(email) {


    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function sendEmail() {

    var name     = $('#name').val();
    var family   = $('#family').val();
    var email    = $('#email').val();
    var phone    = $('#phone').val();
    var comments = $('#comments').val();

    if(!name){
        $('#message').toast('show').addClassName('bg-danger').removeClassName('bg-success');
        $('.toast-body').html('First Name is required');
    } else if(!family){
        $('#message').toast('show').addClassName('bg-danger').removeClassName('bg-success');
        $('.toast-body').html('Last Name is required');
    } else if(!email){
        $('#message').toast('show').addClassName('bg-danger').removeClassName('bg-success');
        $('.toast-body').html('Email is required');
    } else if(!validateEmail(email)){
        $('#message').toast('show').addClassName('bg-danger').removeClassName('bg-success');
        $('.toast-body').html('Email is not valid');
    } else if(!phone){
        $('#message').toast('show').addClassName('bg-danger').removeClassName('bg-success');
        $('.toast-body').html('phone is required');
    }else if(!comments){
        $('#message').toast('show').addClassName('bg-danger').removeClassName('bg-success');
        $('.toast-body').html('Comments is required');
    }else {
        $.ajax({
            type: 'POST',
            data: $("#contactForm").serialize(),
            url:  "sendEmail.php",
            beforeSend: function() {
                $('#submit-btn').html('<span classname="spinner-border spinner-border-sm"></span> Loading..');
            },
            success: function(data) {
                $('#submit-btn').html('Submit');
                var myObj = JSON.parse(data);
                if(myObj['status']=='Congratulation'){
                    $('#message').toast('show').addClassName('bg-success').removeClassName('bg-danger bg-warning');
                    $('.toast-body').html('<strong>'+ myObj['status'] +' : </strong> '+ myObj['message']);
                }else if(myObj['status']=='Error'){
                    $('#message').toast('show').addClassName('bg-danger').removeClassName('bg-success bg-warning');
                    $('.toast-body').html('<strong>'+ myObj['status'] +' : </strong> '+ myObj['message']);
                }else if(myObj['status']=='Warning'){
                    $('#message').toast('show').addClassName('bg-warning').removeClassName('bg-success bg-danger');
                    $('.toast-body').html('<strong>'+ myObj['status'] +' : </strong> '+ myObj['message']);
                }
            },
            error: function(xhr) {
                $('#submit-btn').html('Submit');
                $('#message').toast('show').addClassName('bg-danger').removeClassName('bg-success bg-warning');
                $('.toast-body').html('<strong> Error : </strong> Something went wrong, Please try again.');
            },
        });
    }
}
